import * as React from "react";
import { cn } from "@/lib/utils";

function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "pointer-events-none inline-flex h-5.5 w-fit items-center justify-center gap-1 rounded border border-zinc-200/90 bg-zinc-50 px-2 font-mono text-[11px] sm:text-xs font-medium text-zinc-700 select-none shadow-2xs dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300",
        className
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };

