import { BookOpen } from "lucide-react";

export function MarginsForm() {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] text-center">
      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
        <BookOpen className="w-8 h-8 text-muted-foreground" />
      </div>
      <p className="text-lg text-muted-foreground">
        Margin References coming soon
      </p>
      <p className="text-sm text-muted-foreground/70 mt-1">
        This section will be available in a future update
      </p>
    </div>
  );
}
