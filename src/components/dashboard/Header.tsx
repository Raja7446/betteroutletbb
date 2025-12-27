import { useState } from "react";
import { Calendar, ChevronDown, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface HeaderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const dummyNotifications = [
  { id: 1, message: "Sales data saved successfully", time: "2 min ago", read: false },
  { id: 2, message: "Yesterday's expenses pending", time: "1 hour ago", read: false },
  { id: 3, message: "New menu items synced", time: "3 hours ago", read: true },
  { id: 4, message: "Weekly report available", time: "1 day ago", read: true },
];

const outlets = [
  { id: "mumbai", name: "Mumbai Outlet", role: "Owner Account" },
  { id: "hyderabad", name: "Hyderabad Outlet", role: "Owner Account" },
  { id: "bangalore", name: "Bangalore Outlet", role: "Manager" },
  { id: "delhi", name: "Delhi Outlet", role: "Manager" },
];

export function Header({ selectedDate, onDateChange }: HeaderProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const selectedOutlet = outlets[0]; // Display only, not editable

  const formattedDate = format(selectedDate, "EEEE, MMMM d, yyyy");

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      onDateChange(date);
      setIsCalendarOpen(false);
    }
  };

  const unreadCount = dummyNotifications.filter(n => !n.read).length;

  return (
    <header className="flex items-center justify-between px-8 py-5 border-b border-border/50">
      {/* Left - Date Selector */}
      <div className="flex items-center gap-4">
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-card-foreground">{formattedDate}</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-card border-border z-50" align="start">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => date > new Date()}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
        <div className="h-6 w-px bg-border" />
        <span className="text-sm text-muted-foreground">Data entry for selected date</span>
      </div>

      {/* Right - User & Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Popover open={isNotificationsOpen} onOpenChange={setIsNotificationsOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-card-foreground">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 bg-card border-border z-50" align="end">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold text-card-foreground">Notifications</h3>
              <p className="text-xs text-muted-foreground">{unreadCount} unread</p>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {dummyNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "px-4 py-3 border-b border-border/50 last:border-0 hover:bg-secondary/50 transition-colors cursor-pointer",
                    !notification.read && "bg-primary/5"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-2 shrink-0",
                      notification.read ? "bg-muted-foreground/30" : "bg-primary"
                    )} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-card-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border">
              <button className="text-xs text-primary hover:underline w-full text-center">
                Mark all as read
              </button>
            </div>
          </PopoverContent>
        </Popover>
        
        <div className="h-6 w-px bg-border" />
        
        {/* Outlet Display (Read-only) */}
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-card-foreground">{selectedOutlet.name}</p>
            <p className="text-xs text-muted-foreground">{selectedOutlet.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
