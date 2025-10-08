import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface CodeRevealProps {
  code?: string;
  title?: string;
  className?: string;
}

export function CodeReveal({ code, title, className }: CodeRevealProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // intentionally empty
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={`inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-colors ${className || ''}`}
          aria-label="View code"
          title="View code"
        >
          <Code2 size={16} />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" side="bottom" className="w-[28rem] sm:w-[36rem] p-0">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-3 py-2">
          <span className="text-sm font-medium text-slate-700 truncate">{title || 'Source code'}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 hover:bg-slate-50"
          >
            {copied ? (<><Check size={14} /> Copied</>) : (<><Copy size={14} /> Copy</>)}
          </button>
        </div>
        <div className="max-h-[60vh] overflow-auto bg-slate-50">
          <pre className="p-3 text-[11px] leading-relaxed"><code>{code || 'No code available.'}</code></pre>
        </div>
      </PopoverContent>
    </Popover>
  );
}

