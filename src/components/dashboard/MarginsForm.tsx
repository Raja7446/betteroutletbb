import { useState } from "react";
import { BookOpen, Plus, Trash2, Save } from "lucide-react";
import { DataSection } from "./DataSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface MarginItem {
  id: string;
  itemName: string;
  costToPrepare: string;
  dineInPrice: string;
  onlinePrice: string;
}

export function MarginsForm() {
  const [items, setItems] = useState<MarginItem[]>([]);
  const [itemName, setItemName] = useState("");
  const [costToPrepare, setCostToPrepare] = useState("");
  const [dineInPrice, setDineInPrice] = useState("");
  const [onlinePrice, setOnlinePrice] = useState("");

  const handleAddItem = () => {
    if (!itemName || !costToPrepare || !dineInPrice || !onlinePrice) {
      toast.error("Please fill all fields");
      return;
    }

    const newItem: MarginItem = {
      id: Date.now().toString(),
      itemName,
      costToPrepare,
      dineInPrice,
      onlinePrice,
    };

    setItems([...items, newItem]);
    setItemName("");
    setCostToPrepare("");
    setDineInPrice("");
    setOnlinePrice("");
    toast.success("Item added successfully");
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    toast.info("Item removed");
  };

  return (
    <div className="space-y-8">
      <DataSection
        icon={BookOpen}
        title="Add Menu Item Margins"
        subtitle="Enter cost and pricing details for margin calculation"
        accentColor="primary"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
              Item Name
            </label>
            <Input
              placeholder="e.g., Butter Chicken, Paneer Tikka"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="h-12 bg-input-bg border-input-border"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Cost to Prepare
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">₹</span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={costToPrepare}
                  onChange={(e) => setCostToPrepare(e.target.value)}
                  className="h-12 pl-7 bg-input-bg border-input-border"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Dine-in Selling Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">₹</span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={dineInPrice}
                  onChange={(e) => setDineInPrice(e.target.value)}
                  className="h-12 pl-7 bg-input-bg border-input-border"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-xs font-medium text-text-tertiary uppercase tracking-wider">
                Online Selling Price
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">₹</span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={onlinePrice}
                  onChange={(e) => setOnlinePrice(e.target.value)}
                  className="h-12 pl-7 bg-input-bg border-input-border"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleAddItem}
            className="w-full h-11 gap-2 bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4" />
            Save Item
          </Button>
        </div>
      </DataSection>

      {/* Items List */}
      {items.length > 0 && (
        <div className="bg-surface rounded-xl border border-border p-6">
          <h3 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-4">
            Saved Items ({items.length})
          </h3>
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {items.map((item) => {
              const dineInMargin = ((parseFloat(item.dineInPrice) - parseFloat(item.costToPrepare)) / parseFloat(item.dineInPrice) * 100).toFixed(1);
              const onlineMargin = ((parseFloat(item.onlinePrice) - parseFloat(item.costToPrepare)) / parseFloat(item.onlinePrice) * 100).toFixed(1);

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex-1">
                    <p className="font-medium text-text-primary">{item.itemName}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-text-secondary">
                      <span>Cost: ₹{item.costToPrepare}</span>
                      <span>Dine-in: ₹{item.dineInPrice} ({dineInMargin}%)</span>
                      <span>Online: ₹{item.onlinePrice} ({onlineMargin}%)</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}