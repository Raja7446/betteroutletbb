import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { DailySalesForm } from "@/components/dashboard/DailySalesForm";
import { ExpensesForm } from "@/components/dashboard/ExpensesForm";
import { DiscountsForm } from "@/components/dashboard/DiscountsForm";
import { OperationalForm } from "@/components/dashboard/OperationalForm";
import { MarginsForm } from "@/components/dashboard/MarginsForm";
import { DashboardPlaceholder } from "@/components/dashboard/DashboardPlaceholder";
import fintechBackground from "@/assets/fintech-background.jpg";

const tabConfig: Record<string, { title: string; subtitle: string }> = {
  "dashboard": {
    title: "Dashboard",
    subtitle: "Overview of your outlet's performance"
  },
  "daily-sales": {
    title: "Daily Sales Data",
    subtitle: "Enter your outlet's daily sales figures for accurate reporting"
  },
  "expenses": {
    title: "Expenses Data",
    subtitle: "Enter today's variable operational expenses"
  },
  "discounts": {
    title: "Discounts & Others",
    subtitle: "Enter discount, promotion, and refund details"
  },
  "operational": {
    title: "Operational Metrics",
    subtitle: "Track order issues, preparation time, and customer feedback"
  },
  "margins": {
    title: "Margin References",
    subtitle: "Set up item-wise cost and pricing for margin tracking"
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("daily-sales");

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPlaceholder />;
      case "daily-sales":
        return <DailySalesForm />;
      case "expenses":
        return <ExpensesForm />;
      case "discounts":
        return <DiscountsForm />;
      case "operational":
        return <OperationalForm />;
      case "margins":
        return <MarginsForm />;
      default:
        return <DailySalesForm />;
    }
  };

  const currentTab = tabConfig[activeTab] || tabConfig["daily-sales"];

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Background Layer - Fixed, non-scrollable */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
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
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Header - Fixed */}
            <Header />

            {/* Page Content - Scrollable */}
            <main className="flex-1 p-8 overflow-y-auto">
              {/* Page Title */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                  {currentTab.title}
                </h1>
                <p className="text-text-secondary mt-1">
                  {currentTab.subtitle}
                </p>
              </div>

              {/* Form Content */}
              <div className="max-w-3xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {renderTabContent()}
              </div>
            </main>

            {/* Footer - Fixed */}
            <footer className="shrink-0 px-8 py-4 border-t border-border/30">
              <div className="flex items-center justify-between text-xs text-text-tertiary">
                <span>Last saved: Not yet saved today</span>
                <span>All data is securely stored</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;