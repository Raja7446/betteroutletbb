import { cn } from "@/lib/utils";
import { useState } from "react";

interface DataInputProps {
  label: string;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
  type?: "number" | "text";
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function DataInput({
  label,
  placeholder = "0",
  prefix,
  suffix,
  type = "number",
  value,
  onChange,
  className,
}: DataInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
        {label}
      </label>
      <div
        className={cn(
          "relative flex items-center rounded-xl bg-input-bg border-2 transition-all duration-200",
          isFocused
            ? "border-input-focus ring-4 ring-primary/10"
            : "border-input-border hover:border-input-border/80"
        )}
      >
        {prefix && (
          <span className="pl-4 text-text-tertiary font-medium text-sm">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={internalValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "w-full px-4 py-4 bg-transparent text-text-primary font-semibold text-xl",
            "placeholder:text-text-tertiary/50 focus:outline-none",
            "input-number",
            prefix && "pl-1"
          )}
        />
        {suffix && (
          <span className="pr-4 text-text-tertiary font-medium text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
