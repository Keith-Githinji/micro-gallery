import React, { useState } from 'react';
import { Code2, Copy, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

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
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm transition-colors ${className || ''}`}
          aria-label="View code"
          title="View code"
        >
          <Code2 size={16} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between gap-3">
            <span>{title || 'Source code'}</span>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
            >
              {copied ? (<><Check size={16} /> Copied</>) : (<><Copy size={16} /> Copy</>)}
            </button>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2 max-h-[65vh] overflow-auto rounded-md border border-slate-200 bg-slate-50">
          <pre className="p-4 text-xs leading-relaxed"><code>{code || 'No code available.'}</code></pre>
        </div>
      </DialogContent>
    </Dialog>
  );
}

