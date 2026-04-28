import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { execSync } from 'child_process'

// Build-time version stamp surfaced in the TopBar so we can verify which
// commit is actually live in the browser without checking Vercel's deploy
// list. Order of preference:
//   1. VERCEL_GIT_COMMIT_SHA — set automatically on Vercel deploys.
//   2. local `git rev-parse` — works in dev / on a regular CI box.
//   3. literal "dev" — last resort if neither is available.
let buildVersion: string
if (process.env.VERCEL_GIT_COMMIT_SHA) {
  buildVersion = process.env.VERCEL_GIT_COMMIT_SHA.slice(0, 7)
} else {
  try {
    buildVersion = execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    buildVersion = 'dev'
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.VITE_BUILD_VERSION': JSON.stringify(buildVersion),
  },
})
