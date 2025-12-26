import { useState } from "react";
import { Activity, Save, RotateCcw, StickyNote, Clock, XCircle, AlertTriangle, Calendar } from "lucide-react";
import { DataSection } from "./DataSection";
import { DataInput } from "./DataInput";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export function OperationalForm() {
  const [ordersCancelled, setOrdersCancelled] = useState("");
  const [ordersDelayed, setOrdersDelayed] = useState("");
  const [avgPrepTime, setAvgPrepTime] = useState("");
  const [complaintsReceived, setComplaintsReceived] = useState("");
  const [specialEvents, setSpecialEvents] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    toast.success("Operational metrics saved successfully");
  };

  const handleReset = () => {
    setOrdersCancelled("");
    setOrdersDelayed("");
    setAvgPrepTime("");
    setComplaintsReceived("");
    setSpecialEvents("");
    setNotes("");
    toast.info("Form has been reset");
  };

  return (
    <div className="space-y-8">
      <DataSection
        icon={XCircle}
        title="Order Issues"
        subtitle="Cancelled and delayed orders"
        accentColor="accent"
      >
        <div className="grid grid-cols-2 gap-6">
          <DataInput
            label="Orders Cancelled"
            placeholder="0"
            suffix="orders"
            value={ordersCancelled}
            onChange={setOrdersCancelled}
          />
          <DataInput
            label="Orders Delayed"
            placeholder="0"
            suffix="orders"
            value={ordersDelayed}
            onChange={setOrdersDelayed}
          />
        </div>
      </DataSection>

      <DataSection
        icon={Clock}
        title="Preparation Time"
        subtitle="Average time to prepare orders"
        accentColor="primary"
      >
        <DataInput
          label="Avg Preparation Time"
          placeholder="0"
          suffix="minutes"
          value={avgPrepTime}
          onChange={setAvgPrepTime}
        />
      </DataSection>

      <DataSection
        icon={AlertTriangle}
        title="Customer Feedback"
        subtitle="Complaints received today"
        accentColor="accent"
      >
        <DataInput
          label="Complaints Received"
          placeholder="0"
          suffix="complaints"
          value={complaintsReceived}
          onChange={setComplaintsReceived}
        />
      </DataSection>

      <DataSection
        icon={Calendar}
        title="Special Events"
        subtitle="Any special events or occasions today"
        accentColor="success"
      >
        <div className="space-y-2">
          <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
            Special Events
          </label>
          <Select value={specialEvents} onValueChange={setSpecialEvents}>
            <SelectTrigger className="h-[58px] bg-input-bg border-input-border">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </DataSection>

      {/* Notes Section */}
      <DataSection
        icon={StickyNote}
        title="Notes"
        subtitle="Additional operational notes"
        accentColor="primary"
      >
        <Textarea
          placeholder="Add any notes about today's operations..."
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