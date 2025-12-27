import { useState } from "react";
import { Wallet, Save, RotateCcw, Plus, Trash2 } from "lucide-react";
import { DataSection } from "./DataSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface ExpenseItem {
  id: string;
  type: string;
  customName?: string;
  amount: string;
}

const expenseTypes = [
  "Raw Materials",
  "Packaging",
  "Kitchen Consumables",
  "Staff Wages / Overtime",
  "Gas / Fuel",
  "Marketing",
  "Platform Commission",
  "Miscellaneous",
  "Other",
];

export function ExpensesForm() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [customName, setCustomName] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (!selectedType || !amount) {
      toast.error("Please select expense type and enter amount");
      return;
    }

    if (selectedType === "Other" && !customName) {
      toast.error("Please enter custom expense name");
      return;
    }

    const newExpense: ExpenseItem = {
      id: Date.now().toString(),
      type: selectedType,
      customName: selectedType === "Other" ? customName : undefined,
      amount,
    };

    setExpenses([...expenses, newExpense]);
    setSelectedType("");
    setCustomName("");
    setAmount("");
    toast.success("Expense added");
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleSave = () => {
    toast.success("Expenses data saved successfully");
  };

  const handleReset = () => {
    setExpenses([]);
    setSelectedType("");
    setCustomName("");
    setAmount("");
    toast.info("Form has been reset");
  };

  const totalExpenses = expenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);

  return (
    <div className="space-y-5">
      {/* Add Expense Section */}
      <DataSection
        icon={Wallet}
        title="Add Expense"
        subtitle="Enter today's expenses one by one"
        accentColor="accent"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Expense Type */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Expense Type
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-11 bg-background border-border text-foreground">
                  <SelectValue placeholder="Select type" className="text-muted-foreground" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {expenseTypes.map((type) => (
                    <SelectItem key={type} value={type} className="text-foreground">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Custom Name (shown only for "Other") */}
            {selectedType === "Other" && (
              <div className="space-y-2">
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Custom Expense Name
                </label>
                <Input
                  placeholder="Enter expense name"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="h-11 bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            )}

            {/* Amount */}
            <div className="space-y-2">
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-11 pl-7 bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Add Button */}
            <div className={`flex items-end ${selectedType === "Other" ? "" : "col-start-3"}`}>
              <Button
                onClick={handleAddExpense}
                className="h-11 gap-2 bg-primary hover:bg-primary/90 w-full"
              >
                <Plus className="w-4 h-4" />
                Add Expense
              </Button>
            </div>
          </div>
        </div>
      </DataSection>

      {/* Expenses List */}
      {expenses.length > 0 && (
        <div className="bg-card rounded-xl border border-border p-4">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Today's Expenses ({expenses.length})
          </h3>
          <div className="space-y-2 max-h-[200px] overflow-y-auto">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between py-2.5 px-3 bg-secondary/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-card-foreground">
                    {expense.type === "Other" ? expense.customName : expense.type}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-card-foreground">
                    ₹{parseFloat(expense.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveExpense(expense.id)}
                    className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Summary Bar */}
      <div className="bg-secondary/30 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
              Total Expenses
            </p>
            <p className="text-2xl font-bold text-destructive input-number">
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
