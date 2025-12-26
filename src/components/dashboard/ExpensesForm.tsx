import { useState } from "react";
import { Wallet, Save, RotateCcw, StickyNote } from "lucide-react";
import { DataSection } from "./DataSection";
import { DataInput } from "./DataInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ExpensesForm() {
  const [rawMaterial, setRawMaterial] = useState("");
  const [packaging, setPackaging] = useState("");
  const [kitchenConsumables, setKitchenConsumables] = useState("");
  const [staffOvertime, setStaffOvertime] = useState("");
  const [gasFuel, setGasFuel] = useState("");
  const [marketing, setMarketing] = useState("");
  const [platformCommission, setPlatformCommission] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    toast.success("Expenses data saved successfully");
  };

  const handleReset = () => {
    setRawMaterial("");
    setPackaging("");
    setKitchenConsumables("");
    setStaffOvertime("");
    setGasFuel("");
    setMarketing("");
    setPlatformCommission("");
    setMiscellaneous("");
    setNotes("");
    toast.info("Form has been reset");
  };

  const totalExpenses = [
    rawMaterial, packaging, kitchenConsumables, staffOvertime,
    gasFuel, marketing, platformCommission, miscellaneous
  ].reduce((sum, val) => sum + (parseFloat(val) || 0), 0);

  return (
    <div className="space-y-8">
      <DataSection
        icon={Wallet}
        title="Daily Variable Expenses"
        subtitle="Enter today's operational expenses"
        accentColor="accent"
      >
        <div className="grid grid-cols-2 gap-6">
          <DataInput
            label="Raw Material Cost"
            placeholder="0.00"
            prefix="₹"
            value={rawMaterial}
            onChange={setRawMaterial}
          />
          <DataInput
            label="Packaging Cost"
            placeholder="0.00"
            prefix="₹"
            value={packaging}
            onChange={setPackaging}
          />
          <DataInput
            label="Kitchen Consumables"
            placeholder="0.00"
            prefix="₹"
            value={kitchenConsumables}
            onChange={setKitchenConsumables}
          />
          <DataInput
            label="Staff Overtime / Daily Wages"
            placeholder="0.00"
            prefix="₹"
            value={staffOvertime}
            onChange={setStaffOvertime}
          />
          <DataInput
            label="Gas / Fuel"
            placeholder="0.00"
            prefix="₹"
            value={gasFuel}
            onChange={setGasFuel}
          />
          <DataInput
            label="Marketing Spend (Daily)"
            placeholder="0.00"
            prefix="₹"
            value={marketing}
            onChange={setMarketing}
          />
          <DataInput
            label="Platform Commission"
            placeholder="0.00"
            prefix="₹"
            value={platformCommission}
            onChange={setPlatformCommission}
          />
          <DataInput
            label="Miscellaneous Expense"
            placeholder="0.00"
            prefix="₹"
            value={miscellaneous}
            onChange={setMiscellaneous}
          />
        </div>
      </DataSection>

      {/* Notes Section */}
      <DataSection
        icon={StickyNote}
        title="Notes"
        subtitle="Any additional notes about today's expenses"
        accentColor="primary"
      >
        <Textarea
          placeholder="Add any notes or context about today's expenses..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px] bg-input-bg border-input-border resize-none"
        />
      </DataSection>

      {/* Summary Bar */}
      <div className="bg-secondary/30 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
              Total Expenses
            </p>
            <p className="text-3xl font-bold text-destructive input-number">
              ₹{totalExpenses.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleReset} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button onClick={handleSave} className="gap-2 bg-primary hover:bg-primary/90 px-6">
              <Save className="w-4 h-4" />
              Save Entry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}