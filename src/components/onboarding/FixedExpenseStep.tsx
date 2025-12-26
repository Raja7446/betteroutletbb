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
  "Licenses (FSSAI, Trade)",
  "Annual Maintenance",
  "Insurance",
  "Other",
];

const monthlyExpenseOptions = [
  "Salaries",
  "Electricity",
  "Internet",
  "Water",
  "Other",
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
    <div className="p-6 bg-surface rounded-xl border border-border">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
          <p className="text-sm text-text-secondary">{description}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {entries.map((entry) => (
          <div key={entry.id} className="flex gap-3">
            <Select
              value={entry.type}
              onValueChange={(value) => onUpdate(entry.id, "type", value)}
            >
              <SelectTrigger className="flex-1 h-11 bg-card">
                <SelectValue placeholder="Select expense type" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="relative w-40">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">₹</span>
              <Input
                type="number"
                placeholder="Amount"
                value={entry.amount}
                onChange={(e) => onUpdate(entry.id, "amount", e.target.value)}
                className="h-11 pl-7 bg-card"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemove(entry.id)}
              className="h-11 w-11 text-destructive hover:text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}

        <Button
          variant="outline"
          onClick={onAdd}
          className="w-full h-11 border-dashed gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Expense
        </Button>
      </div>
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
    setYearlyExpenses(yearlyExpenses.filter((e) => e.id !== id));
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
    setMonthlyExpenses(monthlyExpenses.filter((e) => e.id !== id));
  };

  const updateMonthlyExpense = (id: string, field: "type" | "amount", value: string) => {
    setMonthlyExpenses(
      monthlyExpenses.map((e) => (e.id === id ? { ...e, [field]: value } : e))
    );
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Set Up Fixed Expenses</h2>
        <p className="text-text-secondary">
          These expenses will be distributed into your daily profit calculations
        </p>
      </div>

      <div className="space-y-6">
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

      <div className="flex justify-center pt-4">
        <Button
          onClick={onContinue}
          className="h-12 px-8 bg-primary hover:bg-primary/90"
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
}
