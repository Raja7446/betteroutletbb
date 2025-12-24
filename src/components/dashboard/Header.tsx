import { Calendar, ChevronDown, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-border/50">
      {/* Left - Date Selector */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
          <Calendar className="w-4 h-4 text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">{formattedDate}</span>
          <ChevronDown className="w-4 h-4 text-text-tertiary" />
        </button>
        <div className="h-6 w-px bg-border" />
        <span className="text-sm text-text-tertiary">Data entry for selected date</span>
      </div>

      {/* Right - User & Actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative text-text-secondary hover:text-text-primary">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </Button>
        
        <div className="h-6 w-px bg-border" />
        
        <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-secondary/50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-text-primary">Mumbai Outlet</p>
            <p className="text-xs text-text-tertiary">Owner Account</p>
          </div>
          <ChevronDown className="w-4 h-4 text-text-tertiary" />
        </button>
      </div>
    </header>
  );
}
