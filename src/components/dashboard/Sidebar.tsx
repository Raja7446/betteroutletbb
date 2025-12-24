import { 
  LayoutDashboard, 
  Receipt, 
  Wallet, 
  Percent, 
  Activity, 
  BookOpen,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Receipt, label: "Daily Sales Data", active: true },
  { icon: Wallet, label: "Expenses Data" },
  { icon: Percent, label: "Discounts & Others" },
  { icon: Activity, label: "Operational Metrics" },
  { icon: BookOpen, label: "Margin References" },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">OA</span>
          </div>
          <div>
            <h1 className="text-sidebar-accent-foreground font-semibold text-sm">Outlet Analytics</h1>
            <p className="text-sidebar-foreground text-xs opacity-60">Data Entry Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                item.active
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                item.active ? "text-sidebar-primary" : "text-sidebar-foreground"
              )} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.active && (
                <ChevronRight className="w-4 h-4 text-sidebar-primary" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="px-4 py-3 rounded-xl bg-sidebar-accent/30">
          <p className="text-xs text-sidebar-foreground opacity-70">Need help?</p>
          <p className="text-xs text-sidebar-primary font-medium mt-1 cursor-pointer hover:underline">
            View Documentation
          </p>
        </div>
      </div>
    </aside>
  );
}
