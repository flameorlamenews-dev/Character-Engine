import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/integrations/supabase/client';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-ce-body flex items-center justify-center">
      <div className="w-[400px] bg-ce-panel border border-ce-border rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-xl font-semibold text-ce-text-bright">Character Engine</h1>
          <p className="text-xs text-ce-text-muted mt-1">Sign in to access your manuscripts and engine</p>
        </div>
        <Auth
          supabaseClient={supabase as any}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#aa3bff',
                  brandAccent: '#9333ea',
                  inputBackground: '#0d0d1a',
                  inputText: '#c8c8d4',
                  inputBorder: '#2a2a4a',
                  inputBorderFocus: '#aa3bff',
                  inputBorderHover: '#3a3a5a',
                  inputPlaceholder: '#6b6b80',
                  messageText: '#c8c8d4',
                  anchorTextColor: '#aa3bff',
                  dividerBackground: '#2a2a4a',
                },
                space: {
                  inputPadding: '10px',
                  buttonPadding: '10px',
                },
                borderWidths: {
                  buttonBorderWidth: '1px',
                  inputBorderWidth: '1px',
                },
                radii: {
                  borderRadiusButton: '6px',
                  buttonBorderRadius: '6px',
                  inputBorderRadius: '6px',
                },
                fonts: {
                  bodyFontFamily: "'Inter', system-ui, sans-serif",
                  inputFontFamily: "'Inter', system-ui, sans-serif",
                  buttonFontFamily: "'Inter', system-ui, sans-serif",
                  labelFontFamily: "'Inter', system-ui, sans-serif",
                },
              },
            },
            className: {
              container: 'auth-container',
              button: 'auth-button',
              input: 'auth-input',
            },
          }}
          providers={[]}
          redirectTo={window.location.origin}
        />
      </div>
    </div>
  );
}
