import { useState } from "react";
import { Percent, Save, RotateCcw, StickyNote, Tag } from "lucide-react";
import { DataSection } from "./DataSection";
import { DataInput } from "./DataInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function DiscountsForm() {
  const [discountAmount, setDiscountAmount] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [couponName, setCouponName] = useState("");
  const [refundAmount, setRefundAmount] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    toast.success("Discounts data saved successfully");
  };

  const handleReset = () => {
    setDiscountAmount("");
    setDiscountType("");
    setCouponName("");
    setRefundAmount("");
    setNotes("");
    toast.info("Form has been reset");
  };

  return (
    <div className="space-y-8">
      <DataSection
        icon={Percent}
        title="Discounts"
        subtitle="Enter discount and promotion details"
        accentColor="primary"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <DataInput
              label="Total Discount Amount"
              placeholder="0.00"
              prefix="₹"
              value={discountAmount}
              onChange={setDiscountAmount}
            />
            <div className="space-y-2">
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Discount Type
              </label>
              <Select value={discountType} onValueChange={setDiscountType}>
                <SelectTrigger className="h-[58px] bg-input-bg border-input-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat Discount</SelectItem>
                  <SelectItem value="percentage">Percentage Discount</SelectItem>
                  <SelectItem value="platform">Platform Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
              Coupon / Offer Name
            </label>
            <Input
              placeholder="e.g., SUMMER20, Festival Offer"
              value={couponName}
              onChange={(e) => setCouponName(e.target.value)}
              className="h-12 bg-input-bg border-input-border"
            />
          </div>
        </div>
      </DataSection>

      <DataSection
        icon={Tag}
        title="Refunds"
        subtitle="Customer refunds issued today"
        accentColor="accent"
      >
        <DataInput
          label="Refund Amount"
          placeholder="0.00"
          prefix="₹"
          value={refundAmount}
          onChange={setRefundAmount}
        />
      </DataSection>

      {/* Notes Section */}
      <DataSection
        icon={StickyNote}
        title="Notes"
        subtitle="Any additional context"
        accentColor="primary"
      >
        <Textarea
          placeholder="Add any notes about discounts or refunds..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="min-h-[100px] bg-input-bg border-input-border resize-none"
        />
      </DataSection>

      {/* Actions */}
      <div className="bg-secondary/30 rounded-2xl p-6">
        <div className="flex items-center justify-end gap-3">
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
  );
}