import { useState } from "react";
import { OnboardingTimeline } from "@/components/onboarding/OnboardingTimeline";
import { MenuUploadStep } from "@/components/onboarding/MenuUploadStep";
import { FixedExpenseStep } from "@/components/onboarding/FixedExpenseStep";
import { SalesUploadStep } from "@/components/onboarding/SalesUploadStep";
import { CongratsStep } from "@/components/onboarding/CongratsStep";
import fintechBackground from "@/assets/fintech-background.jpg";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step: number) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <MenuUploadStep onContinue={handleContinue} />;
      case 2:
        return <FixedExpenseStep onContinue={handleContinue} />;
      case 3:
        return <SalesUploadStep onContinue={handleContinue} />;
      case 4:
        return <CongratsStep />;
      default:
        return null;
    }
  };

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
        <div className="w-full max-w-4xl bg-card rounded-2xl floating-container overflow-hidden animate-fade-in">
          {/* Timeline Header */}
          <OnboardingTimeline currentStep={currentStep} onStepClick={handleStepClick} />

          {/* Step Content */}
          <div className="p-8 min-h-[500px] flex items-start justify-center">
            <div className="w-full max-w-2xl">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
