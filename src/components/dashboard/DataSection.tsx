import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DataSectionProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: "primary" | "success" | "accent";
}

export function DataSection({
  icon: Icon,
  title,
  subtitle,
  children,
  className,
  accentColor = "primary",
}: DataSectionProps) {
  const accentStyles = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    accent: "bg-accent/10 text-accent",
  };

  return (
    <section className={cn("space-y-6", className)}>
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center",
          accentStyles[accentColor]
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
          {subtitle && (
            <p className="text-sm text-text-tertiary">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Section Content */}
      <div className="pl-[60px]">
        {children}
      </div>
    </section>
  );
}
