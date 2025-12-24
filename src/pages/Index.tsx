import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DailySalesForm } from "@/components/dashboard/DailySalesForm";
import fintechBackground from "@/assets/fintech-background.jpg";

const Index = () => {
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background Layer - Fixed, non-scrollable */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${fintechBackground})` }}
      >
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/60" />
      </div>

      {/* Content Layer - Centered floating container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-8 lg:p-12">
        {/* Main Container - Floating Card with fixed height */}
        <div className="flex w-full max-w-[1280px] h-[78vh] bg-card rounded-2xl floating-container overflow-hidden animate-fade-in">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Header - Fixed */}
            <Header />

            {/* Page Content - Scrollable */}
            <main className="flex-1 p-8 overflow-y-auto">
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

            {/* Footer - Fixed */}
            <footer className="shrink-0 px-8 py-4 border-t border-border/30">
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
