'use client';

import { AppShell } from '../components/AppShell';
import { useTheme } from '../components/ThemeProvider';
import { Palette, Check } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Gallery', description: 'Artistic charcoal with vibrant pink accents' },
  { id: 'celo', name: 'Celo', description: 'Black background with yellow accents' },
  { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
  { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
  { id: 'coinbase', name: 'Coinbase', description: 'Navy with Coinbase blue accents' },
];

export default function ThemePreview() {
  const { theme, setTheme } = useTheme();

  return (
    <AppShell title="Theme Preview">
      <div className="space-y-6">
        <div className="flex items-center space-x-2 mb-6">
          <Palette className="w-6 h-6 text-accent" />
          <h2 className="text-2xl font-bold text-text-primary">Theme Gallery</h2>
        </div>

        <div className="space-y-4">
          {themes.map((themeOption) => (
            <div
              key={themeOption.id}
              className={`glass-card p-4 rounded-organic cursor-pointer transition-all duration-200 ${
                theme === themeOption.id ? 'ring-2 ring-accent' : 'hover:bg-surface/90'
              }`}
              onClick={() => setTheme(themeOption.id as any)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    {themeOption.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {themeOption.description}
                  </p>
                </div>
                {theme === themeOption.id && (
                  <Check className="w-5 h-5 text-accent" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Theme Demo Components */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-text-primary">Component Preview</h3>
          
          <div className="glass-card p-4 rounded-organic">
            <h4 className="font-medium text-text-primary mb-2">Sample Card</h4>
            <p className="text-text-secondary mb-3">
              This is how cards look in the current theme.
            </p>
            <button className="btn-primary">Primary Button</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="btn-secondary">Secondary</button>
            <button className="btn-ghost">Ghost Button</button>
          </div>

          <input 
            type="text" 
            placeholder="Sample input field" 
            className="input-field w-full"
          />
        </div>
      </div>
    </AppShell>
  );
}
