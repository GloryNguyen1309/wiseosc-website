"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "wa_free_trial_apr2026_dismissed";

const AUTO_OPEN_DELAY_MS = 1500;

/** 5 Apr 2026 – 30 Apr 2026 (local timezone) */
export function isWithinFreeTrialCampaignWindow(date: Date): boolean {
  const start = new Date(2026, 3, 5, 0, 0, 0, 0);
  const end = new Date(2026, 3, 30, 23, 59, 59, 999);
  return date >= start && date <= end;
}

type FreeTrialCampaignContextValue = {
  openModal: () => void;
  /** Hiển thị dòng teaser trên hero khi đang trong đợt campaign */
  isCampaignActive: boolean;
};

const FreeTrialCampaignContext =
  createContext<FreeTrialCampaignContextValue | null>(null);

export function useFreeTrialCampaign() {
  const ctx = useContext(FreeTrialCampaignContext);
  if (!ctx) {
    throw new Error(
      "useFreeTrialCampaign must be used within FreeTrialCampaignProvider",
    );
  }
  return ctx;
}

/**
 * Dùng trong hero khi có thể không bọc Provider (tránh throw).
 * Trả về null nếu không có provider.
 */
export function useFreeTrialCampaignOptional() {
  return useContext(FreeTrialCampaignContext);
}

export function FreeTrialCampaignProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [isCampaignActive, setIsCampaignActive] = useState(false);

  useEffect(() => {
    const active = isWithinFreeTrialCampaignWindow(new Date());
    setIsCampaignActive(active);
    if (!active) return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* fall through to schedule open */
    }

    const timer = window.setTimeout(() => {
      try {
        if (localStorage.getItem(STORAGE_KEY) === "1") return;
      } catch {
        /* open anyway */
      }
      setOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, []);

  const openModal = useCallback(() => {
    if (!isWithinFreeTrialCampaignWindow(new Date())) return;
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({ openModal, isCampaignActive }),
    [openModal, isCampaignActive],
  );

  return (
    <FreeTrialCampaignContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            "max-w-[min(100%,32rem)] border-2 border-cyan-400/45 bg-white p-8 text-slate-900 shadow-2xl shadow-black/35 sm:rounded-2xl",
            "[&>button]:text-slate-500 [&>button:hover]:text-slate-900 [&>button]:opacity-90",
          )}
        >
          <DialogHeader className="space-y-3 text-center sm:text-center">
            <div className="flex items-center justify-center gap-2 text-cyan-600">
              <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Limited offer
              </span>
            </div>
            <DialogTitle className="text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
              <span className="block">
                Try an Elite AI Engineer On Your Team
              </span>
              <span className="mt-1 block">2 Weeks Free</span>
            </DialogTitle>
            <DialogDescription className="text-center text-sm leading-relaxed text-slate-600">
              Thinking of adding AI engineers to your team? Experience how our
              elite AI engineers support your systems, workflows, and delivery
              before making a long-term hiring decision.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-col sm:space-x-0">
            <Link
              href="/contact"
              onClick={() => handleOpenChange(false)}
              className="inline-flex h-12 w-full max-w-[280px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-6 text-sm font-bold tracking-wide text-white shadow-md transition-opacity hover:opacity-95"
            >
              RESERVE YOUR SLOT
            </Link>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="h-auto border-0 bg-transparent px-1 py-0.5 text-[0.65rem] font-normal leading-tight text-slate-400 underline-offset-2 transition-colors hover:bg-transparent hover:text-slate-600 hover:underline sm:text-[0.7rem]"
            >
              Remind me later
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </FreeTrialCampaignContext.Provider>
  );
}
