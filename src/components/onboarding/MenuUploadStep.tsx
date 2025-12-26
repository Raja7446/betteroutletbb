import { useState } from "react";
import { Upload, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MenuUploadStepProps {
  onContinue: () => void;
}

interface UploadCardProps {
  title: string;
  description: string;
  uploaded: boolean;
  onUpload: () => void;
}

function UploadCard({ title, description, uploaded, onUpload }: UploadCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    onUpload();
  };

  return (
    <div
      className={cn(
        "flex-1 p-6 rounded-xl border-2 border-dashed transition-all duration-200",
        uploaded
          ? "border-success bg-success/5"
          : isDragging
          ? "border-primary bg-primary/5"
          : "border-input-border hover:border-primary/50 bg-surface"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={cn(
            "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors",
            uploaded ? "bg-success/10" : "bg-primary/10"
          )}
        >
          {uploaded ? (
            <Check className="w-7 h-7 text-success" />
          ) : (
            <Upload className="w-7 h-7 text-primary" />
          )}
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
        <p className="text-sm text-text-secondary mb-4">{description}</p>

        {uploaded ? (
          <div className="flex items-center gap-2 text-success">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Upload completed ✓</span>
          </div>
        ) : (
          <>
            <label className="cursor-pointer">
              <input type="file" className="hidden" onChange={onUpload} accept=".pdf,.xlsx,.csv" />
              <div className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                Choose file or drag & drop
              </div>
            </label>
            <p className="text-xs text-text-tertiary mt-3">
              Supports PDF, Excel, CSV
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export function MenuUploadStep({ onContinue }: MenuUploadStepProps) {
  const [dineInUploaded, setDineInUploaded] = useState(false);
  const [onlineUploaded, setOnlineUploaded] = useState(false);

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Upload Your Menus</h2>
        <p className="text-text-secondary">
          Upload your dine-in and online menus to help us understand your offerings
        </p>
      </div>

      <div className="flex gap-6">
        <UploadCard
          title="Dine-in Menu"
          description="Upload your physical restaurant menu"
          uploaded={dineInUploaded}
          onUpload={() => setDineInUploaded(true)}
        />
        <UploadCard
          title="Online Aggregator Menu"
          description="Upload your Swiggy/Zomato menu"
          uploaded={onlineUploaded}
          onUpload={() => setOnlineUploaded(true)}
        />
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onContinue}
          className="h-12 px-8 bg-primary hover:bg-primary/90 gap-2"
        >
          Continue to Next Step
        </Button>
      </div>
    </div>
  );
}
