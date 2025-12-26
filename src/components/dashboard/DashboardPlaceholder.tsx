import { LayoutDashboard } from "lucide-react";

export function DashboardPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] text-center">
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
        <LayoutDashboard className="w-10 h-10 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-text-primary mb-2">Dashboard</h2>
      <p className="text-text-secondary max-w-md">
        Your analytics dashboard will appear here once you've entered enough data. 
        Start by entering your daily sales data from the sidebar.
      </p>
    </div>
  );
}