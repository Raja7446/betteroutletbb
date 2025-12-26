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
    <div className="space-y-6 animate-slide-up text-center">
      {/* Celebration Icon */}
      <div className="flex justify-center">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
          <PartyPopper className="w-10 h-10 text-primary" />
        </div>
      </div>

      {/* Headline */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-text-primary">
          🎉 Congratulations!
        </h2>
        <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto">
          You've successfully initiated your onboarding. Please return to the BB Lite app to complete setup and start your profit journey.
        </p>
      </div>

      {/* Completed Steps */}
      <div className="bg-surface rounded-xl p-4 border border-border max-w-sm mx-auto">
        <h4 className="text-xs font-medium text-text-tertiary mb-3 uppercase tracking-wider">
          What you've completed
        </h4>
        <div className="space-y-2">
          {completedSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 text-left">
              <CheckCircle className="w-4 h-4 text-success shrink-0" />
              <span className="text-sm text-text-primary">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-2">
        <Button
          onClick={() => navigate("/dashboard")}
          className="h-11 px-8 font-medium bg-primary hover:bg-primary/90 gap-2"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}