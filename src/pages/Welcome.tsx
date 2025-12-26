import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import fintechBackground from "@/assets/fintech-background.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${fintechBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-8">
        <div className="w-full max-w-lg bg-card rounded-2xl floating-container p-10 animate-fade-in text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">BB</span>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-4 mb-10">
            <h1 className="text-3xl font-bold text-text-primary">
              Hello Restaurant Owner 👋
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Welcome to the data feeding section of your profit journey with BB Lite.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Let's set up your outlet</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => navigate("/onboarding")}
            className="h-14 px-8 text-base font-medium bg-primary hover:bg-primary/90 gap-2"
          >
            Start Onboarding
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
