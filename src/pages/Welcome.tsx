import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        <div className="w-full max-w-md bg-card rounded-2xl floating-container p-8 animate-fade-in text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-text-primary">BB Lite</h1>
              <p className="text-sm text-text-secondary">Outlet Analytics</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-text-primary">
              Hello Restaurant Owner 👋
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Welcome to the data feeding section of your profit journey
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => navigate("/onboarding")}
            className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;