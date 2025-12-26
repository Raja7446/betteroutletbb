import { UtensilsCrossed, Smartphone, Save, RotateCcw } from "lucide-react";
import { DataSection } from "./DataSection";
import { DataInput } from "./DataInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function DailySalesForm() {
  const [dineInOrders, setDineInOrders] = useState("");
  const [dineInRevenue, setDineInRevenue] = useState("");
  const [onlineOrders, setOnlineOrders] = useState("");
  const [onlineRevenue, setOnlineRevenue] = useState("");
  const [swiggyOrders, setSwiggyOrders] = useState("");
  const [swiggyRevenue, setSwiggyRevenue] = useState("");
  const [zomatoOrders, setZomatoOrders] = useState("");
  const [zomatoRevenue, setZomatoRevenue] = useState("");

  const handleSave = () => {
    toast.success("Daily sales data saved successfully", {
      description: "Your data has been recorded for today.",
    });
  };

  const handleReset = () => {
    setDineInOrders("");
    setDineInRevenue("");
    setOnlineOrders("");
    setOnlineRevenue("");
    setSwiggyOrders("");
    setSwiggyRevenue("");
    setZomatoOrders("");
    setZomatoRevenue("");
    toast.info("Form has been reset");
  };

  // Calculate totals
  const totalOrders = (parseInt(dineInOrders) || 0) + (parseInt(onlineOrders) || 0);
  const totalRevenue = (parseFloat(dineInRevenue) || 0) + (parseFloat(onlineRevenue) || 0);

  return (
    <div className="space-y-8">
      {/* Dine-in Orders Section */}
      <DataSection
        icon={UtensilsCrossed}
        title="Dine-in Orders"
        subtitle="Walk-in customers and table service"
        accentColor="primary"
      >
        <div className="grid grid-cols-2 gap-6">
          <DataInput
            label="Number of Orders"
            placeholder="0"
            suffix="orders"
            value={dineInOrders}
            onChange={setDineInOrders}
          />
          <DataInput
            label="Total Revenue"
            placeholder="0.00"
            prefix="₹"
            value={dineInRevenue}
            onChange={setDineInRevenue}
          />
        </div>
      </DataSection>

      {/* Divider */}
      <div className="border-t border-border/50" />

      {/* Online Orders Section */}
      <DataSection
        icon={Smartphone}
        title="Online Orders"
        subtitle="Delivery and pickup orders via apps"
        accentColor="success"
      >
        <div className="space-y-6">
          {/* Overall Online */}
          <div className="grid grid-cols-2 gap-6">
            <DataInput
              label="Online Orders Count"
              placeholder="0"
              suffix="orders"
              value={onlineOrders}
              onChange={setOnlineOrders}
            />
            <DataInput
              label="Online Revenue"
              placeholder="0.00"
              prefix="₹"
              value={onlineRevenue}
              onChange={setOnlineRevenue}
            />
          </div>

          {/* Aggregator Breakdown */}
          <div className="bg-surface/50 rounded-xl p-4 border border-border/50">
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-4">
              Platform Breakdown (Optional)
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <DataInput
                  label="Swiggy Orders"
                  placeholder="0"
                  suffix="orders"
                  value={swiggyOrders}
                  onChange={setSwiggyOrders}
                />
                <DataInput
                  label="Swiggy Revenue"
                  placeholder="0.00"
                  prefix="₹"
                  value={swiggyRevenue}
                  onChange={setSwiggyRevenue}
                />
              </div>
              <div className="space-y-4">
                <DataInput
                  label="Zomato Orders"
                  placeholder="0"
                  suffix="orders"
                  value={zomatoOrders}
                  onChange={setZomatoOrders}
                />
                <DataInput
                  label="Zomato Revenue"
                  placeholder="0.00"
                  prefix="₹"
                  value={zomatoRevenue}
                  onChange={setZomatoRevenue}
                />
              </div>
            </div>
          </div>
        </div>
      </DataSection>

      {/* Summary Bar */}
      <div className="bg-secondary/30 rounded-2xl p-6 mt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div>
              <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
                Total Orders
              </p>
              <p className="text-3xl font-bold text-text-primary input-number">
                {totalOrders}
              </p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
                Total Revenue
              </p>
              <p className="text-3xl font-bold text-primary input-number">
                ₹{totalRevenue.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={handleReset}
              className="gap-2 text-text-secondary hover:text-text-primary"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              onClick={handleSave}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6"
            >
              <Save className="w-4 h-4" />
              Save Entry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}