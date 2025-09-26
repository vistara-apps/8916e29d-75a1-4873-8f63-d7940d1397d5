'use client';

import { ReactNode } from 'react';
import { Shield, Menu, Settings2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AppShellProps {
  children: ReactNode;
  title?: string;
}

export function AppShell({ children, title = 'Guardian Rights' }: AppShellProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="glass-card border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-accent/20 rounded-organic">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-primary">{title}</h1>
                <p className="text-sm text-text-secondary">Legal Defense Card</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <select 
                value={theme} 
                onChange={(e) => setTheme(e.target.value as any)}
                className="bg-surface border border-border rounded-lg px-3 py-1 text-sm text-fg"
              >
                <option value="default">Gallery</option>
                <option value="celo">Celo</option>
                <option value="solana">Solana</option>
                <option value="base">Base</option>
                <option value="coinbase">Coinbase</option>
              </select>
              <button className="p-2 hover:bg-surface/50 rounded-lg transition-colors">
                <Menu className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-border/50">
        <div className="max-w-xl mx-auto px-4 py-3">
          <div className="flex justify-around">
            <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-surface/50 transition-colors">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-xs text-text-secondary">Rights</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-surface/50 transition-colors">
              <Menu className="w-5 h-5 text-text-secondary" />
              <span className="text-xs text-text-secondary">Contracts</span>
            </button>
            <button className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-surface/50 transition-colors">
              <Settings2 className="w-5 h-5 text-text-secondary" />
              <span className="text-xs text-text-secondary">Settings</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
