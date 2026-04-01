import { supabaseAuth } from '@/integrations/supabase/client';

const hasSupabase = !!import.meta.env.VITE_SUPABASE_URL;

function SimpleLoginForm() {
  // Fallback login form when @supabase/auth-ui-react has issues
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabaseAuth.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('Check your email to confirm your account.');
      } else {
        const { error } = await supabaseAuth.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="text-xs text-ce-text-muted block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 text-sm bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label className="text-xs text-ce-text-muted block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full px-3 py-2 text-sm bg-ce-body border border-ce-border rounded text-ce-text focus:border-ce-accent outline-none"
          placeholder="Min 6 characters"
        />
      </div>
      {error && <div className="text-xs text-red-400 bg-red-900/20 border border-red-500/30 rounded px-3 py-2">{error}</div>}
      {message && <div className="text-xs text-green-400 bg-green-900/20 border border-green-500/30 rounded px-3 py-2">{message}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-2 text-sm font-semibold bg-ce-accent text-white rounded hover:bg-ce-accent/90 disabled:opacity-50"
      >
        {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <button
        type="button"
        onClick={() => { setIsSignUp(!isSignUp); setError(''); setMessage(''); }}
        className="w-full text-xs text-ce-accent hover:underline"
      >
        {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
      </button>
    </form>
  );
}

import { useState } from 'react';

export function LoginPage() {
  if (!hasSupabase) {
    return (
      <div className="min-h-screen bg-ce-body flex items-center justify-center">
        <div className="w-[400px] bg-ce-panel border border-ce-border rounded-lg p-6 text-center">
          <h1 className="text-xl font-semibold text-ce-text-bright mb-2">Character Engine</h1>
          <p className="text-xs text-red-400 mb-4">
            Supabase not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables, then redeploy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ce-body flex items-center justify-center">
      <div className="w-[400px] bg-ce-panel border border-ce-border rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-ce-text-bright">Character Engine</h1>
          <p className="text-xs text-ce-text-muted mt-1">Sign in to access your manuscripts and engine</p>
        </div>
        <SimpleLoginForm />
      </div>
    </div>
  );
}
