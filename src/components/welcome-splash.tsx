"use client";

import { MousePointerSquareDashed } from "lucide-react";

export function WelcomeSplash() {
  return (
    <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed bg-accent/30">
      <div className="text-center">
        <div className="mx-auto w-fit rounded-full bg-background p-4 mb-4">
          <MousePointerSquareDashed className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">Select a Resource</h2>
        <p className="mt-2 text-muted-foreground">
          Choose a resource from the sidebar to view its details and track its
          rebuild progress.
        </p>
      </div>
    </div>
  );
}
