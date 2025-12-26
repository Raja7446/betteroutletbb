import { useState } from "react";
import { Upload, FileSpreadsheet, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SalesUploadStepProps {
  onContinue: () => void;
}

export function SalesUploadStep({ onContinue }: SalesUploadStepProps) {
  const [uploaded, setUploaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploaded(true);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Upload Past Sales Data</h2>
        <p className="text-text-secondary">
          Upload last 3 months sales reports from PetPooja to kickstart your analytics
        </p>
      </div>

      <div
        className={cn(
          "p-12 rounded-xl border-2 border-dashed transition-all duration-200",
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
              "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors",
              uploaded ? "bg-success/10" : "bg-primary/10"
            )}
          >
            {uploaded ? (
              <Check className="w-10 h-10 text-success" />
            ) : (
              <FileSpreadsheet className="w-10 h-10 text-primary" />
            )}
          </div>

          {uploaded ? (
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-success">Upload Complete!</h3>
              <p className="text-text-secondary">Your sales data has been uploaded successfully</p>
            </div>
          ) : uploadProgress > 0 && uploadProgress < 100 ? (
            <div className="w-full max-w-xs space-y-3">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-sm text-text-secondary">Uploading... {uploadProgress}%</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Drag & drop your sales file here
              </h3>
              <p className="text-text-secondary mb-6">or click to browse from your computer</p>

              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={simulateUpload}
                  accept=".pdf,.xlsx,.csv"
                />
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                  <Upload className="w-5 h-5" />
                  Choose File
                </div>
              </label>

              <p className="text-xs text-text-tertiary mt-4">
                Supported formats: PDF, Excel (.xlsx), CSV
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          onClick={onContinue}
          className="h-12 px-8 bg-primary hover:bg-primary/90"
        >
          Submit & Complete Onboarding
        </Button>
      </div>
    </div>
  );
}
