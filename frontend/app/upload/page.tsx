"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Loader2,
  ShieldCheck,
  Upload,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileSelect = (file: File) => {
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, PNG, or JPG file.");
      return;
    }

    setSelectedFile(file);
    setUploaded(false);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", selectedFile);
      formData.append("patient_id", "patient_001");

      const response = await fetch(
        "http://127.0.0.1:8000/reports/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();

      console.log("MedTrace upload:", result);

      setUploaded(true);
    } catch (error) {
      console.error("Upload error:", error);

      alert(
        "Could not connect to the MedTrace backend. Make sure FastAPI is running."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F5F7] text-[#162623]">

      {/* Header */}
      <header className="bg-white border-b border-[#DCE9E8]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-xl border border-[#DCE9E8] flex items-center justify-center hover:bg-[#F0F5F7]"
            >
              <ArrowLeft size={19} />
            </button>

            <div>
              <h1 className="text-xl font-bold">
                Upload Medical Report
              </h1>

              <p className="text-sm text-[#667A77]">
                Add a report to your health journey
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#295255] bg-[#EAF3F1] px-4 py-2 rounded-full">
            <ShieldCheck size={16} />
            Evidence-first
          </div>

        </div>
      </header>

      {/* Main */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white border border-[#DCE9E8] rounded-3xl p-6 sm:p-10 shadow-sm">

          {/* Title */}
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#577877]">
              New report
            </p>

            <h2 className="text-3xl font-bold mt-2">
              Add your medical report
            </h2>

            <p className="text-[#667A77] mt-3 leading-6">
              Upload a blood test or diagnostic report. MedTrace will
              organize the information and prepare it for longitudinal
              analysis.
            </p>
          </div>

          {/* Upload area */}
          {!selectedFile ? (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full mt-8 border-2 border-dashed border-[#B8D4D0] rounded-3xl bg-[#F7FAFA] py-16 px-6 hover:border-[#295255] hover:bg-[#F0F7F6] transition"
            >
              <div className="flex flex-col items-center text-center">

                <div className="w-16 h-16 rounded-2xl bg-[#DCE9E8] text-[#295255] flex items-center justify-center">
                  <Upload size={28} />
                </div>

                <h3 className="text-lg font-semibold mt-5">
                  Upload your report
                </h3>

                <p className="text-sm text-[#667A77] mt-2">
                  PDF, PNG or JPG
                </p>

                <span className="mt-5 inline-flex items-center gap-2 bg-[#295255] text-white px-5 py-3 rounded-xl text-sm font-semibold">
                  <Upload size={16} />
                  Choose file
                </span>

              </div>
            </button>
          ) : (

            /* Selected file */
            <div className="mt-8 rounded-2xl border border-[#DCE9E8] bg-[#F7FAFA] p-5">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#DCE9E8] text-[#295255] flex items-center justify-center">
                    <FileText size={22} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      {selectedFile.name}
                    </p>

                    <p className="text-xs text-[#667A77] mt-1">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setUploaded(false);
                  }}
                  className="p-2 rounded-lg hover:bg-white text-[#667A77]"
                >
                  <X size={18} />
                </button>

              </div>

              {/* Upload button */}
              <button
                onClick={handleUpload}
                disabled={uploading || uploaded}
                className="w-full mt-5 flex items-center justify-center gap-2 bg-[#295255] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#203F41] disabled:opacity-60"
              >

                {uploading ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Uploading...
                  </>
                ) : uploaded ? (
                  <>
                    <CheckCircle2 size={18} />
                    Report uploaded
                  </>
                ) : (
                  <>
                    <Upload size={18} />
                    Upload report
                  </>
                )}

              </button>

            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                handleFileSelect(file);
              }
            }}
          />

          {/* Trust section */}
          <div className="mt-8 flex gap-3 bg-[#F0F7F6] rounded-2xl p-5">

            <ShieldCheck
              size={20}
              className="text-[#295255] shrink-0 mt-0.5"
            />

            <div>
              <p className="font-semibold text-sm">
                Your report remains the source of truth
              </p>

              <p className="text-xs text-[#667A77] leading-5 mt-1">
                MedTrace organizes and explains information from your
                documents. AI observations are decision-support only
                and do not replace your doctor.
              </p>
            </div>

          </div>

        </div>

        {/* Processing pipeline */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">

          <div className="bg-white border border-[#DCE9E8] rounded-2xl p-5">
            <p className="text-xs text-[#667A77]">
              Step 01
            </p>
            <p className="font-semibold mt-2">
              Upload
            </p>
            <p className="text-xs text-[#8A9B98] mt-1">
              Add your original report
            </p>
          </div>

          <div className="bg-white border border-[#DCE9E8] rounded-2xl p-5">
            <p className="text-xs text-[#667A77]">
              Step 02
            </p>
            <p className="font-semibold mt-2">
              Extract
            </p>
            <p className="text-xs text-[#8A9B98] mt-1">
              Organize report parameters
            </p>
          </div>

          <div className="bg-white border border-[#DCE9E8] rounded-2xl p-5">
            <p className="text-xs text-[#667A77]">
              Step 03
            </p>
            <p className="font-semibold mt-2">
              Compare
            </p>
            <p className="text-xs text-[#8A9B98] mt-1">
              Find meaningful changes
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}