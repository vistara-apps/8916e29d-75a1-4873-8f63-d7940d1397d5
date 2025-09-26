'use client';

import { Rights } from '@/lib/types';
import { ChevronRight, BookOpen } from 'lucide-react';

interface RightsCardProps {
  right: Rights;
  onClick?: () => void;
}

export function RightsCard({ right, onClick }: RightsCardProps) {
  return (
    <div 
      className="glass-card p-4 rounded-organic hover:bg-surface/90 transition-all duration-200 cursor-pointer card-hover"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-xs text-accent font-medium uppercase tracking-wide">
              {right.category.replace('_', ' ')}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {right.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">
            {right.description}
          </p>
          <div className="flex flex-wrap gap-1 mt-3">
            {right.keywords.slice(0, 3).map((keyword) => (
              <span 
                key={keyword}
                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-text-secondary ml-2 flex-shrink-0" />
      </div>
    </div>
  );
}
