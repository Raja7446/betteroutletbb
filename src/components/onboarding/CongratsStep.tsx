import { useNavigate } from "react-router-dom";
import { PartyPopper, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CongratsStep() {
  const navigate = useNavigate();

  const completedSteps = [
    "Menu files uploaded",
    "Fixed expenses configured",
    "Sales data submitted",
  ];

  return (
    <div className="space-y-8 animate-slide-up text-center max-w-lg mx-auto">
      {/* Celebration Icon */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
          <PartyPopper className="w-12 h-12 text-primary" />
        </div>
      </div>

      {/* Headline */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-text-primary">
          🎉 Onboarding Initiated Successfully!
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed">
          You've completed the initial setup. Please return to the BB Lite app to complete the final step and start your profit journey.
        </p>
      </div>

      {/* Completed Steps */}
      <div className="bg-surface rounded-xl p-6 border border-border">
        <h4 className="text-sm font-medium text-text-tertiary mb-4 uppercase tracking-wider">
          What you've completed
        </h4>
        <div className="space-y-3">
          {completedSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-success shrink-0" />
              <span className="text-text-primary">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-4">
        <Button
          onClick={() => navigate("/dashboard")}
          className="h-14 px-10 text-base font-medium bg-primary hover:bg-primary/90 gap-2"
        >
          Go to Daily Data Entry
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>

      <p className="text-sm text-text-tertiary">
        You can now start entering your daily outlet data
      </p>
    </div>
  );
}
