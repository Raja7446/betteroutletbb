import { useState } from "react";
import { Plus, Trash2, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FixedExpenseStepProps {
  onContinue: () => void;
}

interface ExpenseEntry {
  id: string;
  type: string;
  amount: string;
}

const yearlyExpenseOptions = [
  "Lease / Rent",
  "FSSAI License",
  "Trade License",
  "Equipment AMC",
  "Software Licenses",
  "Insurance",
  "Property Tax",
  "Other (Custom)",
];

const monthlyExpenseOptions = [
  "Staff Salaries",
  "Electricity Bill",
  "Water Bill",
  "Internet",
  "Maintenance",
  "Accountant Fees",
  "Other (Custom)",
];

function ExpenseSection({
  title,
  icon: Icon,
  description,
  options,
  entries,
  onAdd,
  onRemove,
  onUpdate,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  options: string[];
  entries: ExpenseEntry[];
  onAdd: () => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, field: "type" | "amount", value: string) => void;
}) {
  return (
    <div className="p-4 bg-surface rounded-xl border border-border">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
          <p className="text-xs text-text-secondary">{description}</p>
        </div>
      </div>

      <div className="space-y-2 max-h-[120px] overflow-y-auto pr-1">
        {entries.map((entry) => (
          <div key={entry.id} className="flex gap-2">
            <Select
              value={entry.type}
              onValueChange={(value) => onUpdate(entry.id, "type", value)}
            >
              <SelectTrigger className="flex-1 h-9 bg-card text-sm">
                <SelectValue placeholder="Select expense" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative w-28">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-text-tertiary text-sm">₹</span>
              <Input
                type="number"
                placeholder="Amount"
                value={entry.amount}
                onChange={(e) => onUpdate(entry.id, "amount", e.target.value)}
                className="h-9 pl-6 bg-card text-sm"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(entry.id)}
              className="h-9 w-9 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={onAdd}
        className="w-full h-9 border-dashed gap-2 mt-2 text-sm"
      >
        <Plus className="w-4 h-4" />
        Add Expense
      </Button>
    </div>
  );
}

export function FixedExpenseStep({ onContinue }: FixedExpenseStepProps) {
  const [yearlyExpenses, setYearlyExpenses] = useState<ExpenseEntry[]>([
    { id: "1", type: "", amount: "" },
  ]);
  const [monthlyExpenses, setMonthlyExpenses] = useState<ExpenseEntry[]>([
    { id: "1", type: "", amount: "" },
  ]);

  const addYearlyExpense = () => {
    setYearlyExpenses([...yearlyExpenses, { id: Date.now().toString(), type: "", amount: "" }]);
  };

  const removeYearlyExpense = (id: string) => {
    if (yearlyExpenses.length > 1) {
      setYearlyExpenses(yearlyExpenses.filter((e) => e.id !== id));
    }
  };

  const updateYearlyExpense = (id: string, field: "type" | "amount", value: string) => {
    setYearlyExpenses(
      yearlyExpenses.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  const addMonthlyExpense = () => {
    setMonthlyExpenses([...monthlyExpenses, { id: Date.now().toString(), type: "", amount: "" }]);
  };

  const removeMonthlyExpense = (id: string) => {
    if (monthlyExpenses.length > 1) {
      setMonthlyExpenses(monthlyExpenses.filter((e) => e.id !== id));
    }
  };

  const updateMonthlyExpense = (id: string, field: "type" | "amount", value: string) => {
    setMonthlyExpenses(
      monthlyExpenses.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  return (
    <div className="space-y-4 animate-slide-up">
      <div className="text-center">
        <h2 className="text-xl font-bold text-text-primary mb-1">Set Up Fixed Expenses</h2>
        <p className="text-sm text-text-secondary">
          These expenses will be distributed into your daily profit calculations
        </p>
      </div>

      <div className="space-y-4">
        <ExpenseSection
          title="Yearly Fixed Expenses"
          icon={Calendar}
          description="Expenses paid once a year"
          options={yearlyExpenseOptions}
          entries={yearlyExpenses}
          onAdd={addYearlyExpense}
          onRemove={removeYearlyExpense}
          onUpdate={updateYearlyExpense}
        />

        <ExpenseSection
          title="Monthly Fixed Expenses"
          icon={CreditCard}
          description="Expenses paid every month"
          options={monthlyExpenseOptions}
          entries={monthlyExpenses}
          onAdd={addMonthlyExpense}
          onRemove={removeMonthlyExpense}
          onUpdate={updateMonthlyExpense}
        />
      </div>

      <div className="flex justify-center pt-2">
        <Button
          onClick={onContinue}
          className="h-11 px-6 bg-primary hover:bg-primary/90"
        >
          Continue to Next Step
        </Button>
      </div>
    </div>
  );
}