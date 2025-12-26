import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingTimelineProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { id: 1, title: "Menu Upload" },
  { id: 2, title: "Fixed Expenses" },
  { id: 3, title: "Sales Data" },
  { id: 4, title: "Complete" },
];

export function OnboardingTimeline({ currentStep, onStepClick }: OnboardingTimelineProps) {
  return (
    <div className="w-full py-6 px-8 bg-card border-b border-border">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-center justify-between">
          {/* Progress Line Background */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-muted rounded-full" />
          
          {/* Progress Line Fill */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />

          {/* Steps */}
          {steps.map((step) => {
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isClickable = step.id <= currentStep;

            return (
              <button
                key={step.id}
                onClick={() => isClickable && onStepClick(step.id)}
                disabled={!isClickable}
                className={cn(
                  "relative z-10 flex flex-col items-center gap-2 transition-all duration-200",
                  isClickable ? "cursor-pointer" : "cursor-not-allowed"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                    isCompleted
                      ? "bg-primary border-primary text-primary-foreground"
                      : isCurrent
                      ? "bg-card border-primary text-primary shadow-lg shadow-primary/20"
                      : "bg-card border-muted text-text-tertiary"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium whitespace-nowrap transition-colors",
                    isCurrent ? "text-primary" : isCompleted ? "text-text-primary" : "text-text-tertiary"
                  )}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
