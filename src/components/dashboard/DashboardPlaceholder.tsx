import { LayoutDashboard } from "lucide-react";

export function DashboardPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
        <LayoutDashboard className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-lg text-muted-foreground">
        Dashboard coming soon
      </p>
    </div>
  );
}
