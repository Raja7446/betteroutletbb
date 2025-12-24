import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DailySalesForm } from "@/components/dashboard/DailySalesForm";
import fintechBackground from "@/assets/fintech-background.jpg";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fintechBackground})` }}
      >
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 min-h-screen flex p-6 lg:p-8">
        {/* Main Container - Floating Card */}
        <div className="flex w-full max-w-[1400px] mx-auto bg-card rounded-2xl floating-container overflow-hidden animate-fade-in">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1 p-8 overflow-auto">
              {/* Page Title */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                  Daily Sales Data
                </h1>
                <p className="text-text-secondary mt-1">
                  Enter your outlet's daily sales figures for accurate reporting
                </p>
              </div>

              {/* Form Content */}
              <div className="max-w-3xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <DailySalesForm />
              </div>
            </main>

            {/* Footer */}
            <footer className="px-8 py-4 border-t border-border/30">
              <div className="flex items-center justify-between text-xs text-text-tertiary">
                <span>Last saved: Not yet saved today</span>
                <span>All data is encrypted and securely stored</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
