"use client";

import { Link2 } from "lucide-react";
import { useState } from "react";

export function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy link"
      className="hover:text-white transition-colors flex items-center gap-1"
    >
      {copied ? (
        <span className="text-xs">Copied</span>
      ) : (
        <Link2 className="h-4 w-4" />
      )}
    </button>
  );
}
