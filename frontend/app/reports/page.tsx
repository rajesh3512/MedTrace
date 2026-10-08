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

export default function ReportsPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFile = (file: File) => {
    const allowed = ["application/pdf", "image/png", "image/jpeg"];

    if (!allowed.includes(file.type)) {
      alert("Please upload a PDF, PNG, or JPG medical report.");
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

      const data = await response.json();

      console.log("Uploaded report:", data);

      setUploaded(true);
    } catch (error) {
      console.error(error);
      alert(
        "Could not connect to MedTrace backend. Make sure FastAPI is running."
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F0F5F7] text-[#203330]">
      {/* Header */}
      <header className="border-b border-[#DCE9E8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="rounded-xl p-2 transition hover:bg-[#F0F5F7]"
            >
              <ArrowLeft size={20} />
            </button>

            <div>
              <h1 className="text-xl font-bold text-[#162623]">
                Medical Reports
              </h1>
              <p className="text-sm text-[#667A77]">
                Your source documents and extracted health data
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#EAF3F1] px-4 py-2 text-sm font-medium text-[#295255]">
            <ShieldCheck size={17} />
            Evidence-first
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Upload section */}
        <section className="rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#162623]">
              Upload a medical report
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667A77]">
              Upload a blood test, diagnostic report, or other medical
              document. MedTrace will organize the information so you can
              understand your health journey and discuss it with your doctor.
            </p>
          </div>

          {/* Drop zone */}
          {!selectedFile ? (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="group w-full rounded-3xl border-2 border-dashed border-[#B8D4D0] bg-[#F7FAFA] px-6 py-16 transition hover:border-[#295255] hover:bg-[#F0F7F6]"
            >
              <div className="mx-auto flex max-w-md flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCE9E8] text-[#295255] transition group-hover:scale-105">
                  <Upload size={28} />
                </div>

                <h3 className="text-lg font-semibold text-[#162623]">
                  Choose a medical report
                </h3>

                <p className="mt-2 text-sm text-[#667A77]">
                  PDF, PNG, or JPG
                </p>

                <span className="mt-5 rounded-xl bg-[#295255] px-5 py-3 text-sm font-semibold text-white">
                  Browse files
                </span>
              </div>
            </button>
          ) : (
            <div className="rounded-2xl border border-[#DCE9E8] bg-[#F7FAFA] p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#DCE9E8] text-[#295255]">
                    <FileText size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#162623]">
                      {selectedFile.name}
                    </p>

                    <p className="mt-1 text-xs text-[#667A77]">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setUploaded(false);
                  }}
                  className="rounded-lg p-2 text-[#667A77] hover:bg-white hover:text-[#E56B6F]"
                >
                  <X size={19} />
                </button>
              </div>

              <button
                onClick={handleUpload}
                disabled={uploading || uploaded}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#295255] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#203F41] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {uploading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Uploading report...
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
                handleFile(file);
              }
            }}
          />

          {/* Privacy note */}
          <div className="mt-6 flex gap-3 rounded-2xl bg-[#F0F7F6] p-4">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#295255]"
            />

            <div>
              <p className="text-sm font-semibold text-[#203330]">
                Evidence stays connected to the source
              </p>

              <p className="mt-1 text-xs leading-5 text-[#667A77]">
                AI-generated observations are linked back to the uploaded
                report. MedTrace is a decision-support tool and does not
                diagnose or replace your doctor.
              </p>
            </div>
          </div>
        </section>

        {/* Existing reports */}
        <section className="mt-8">
          <div className="mb-5">
            <h2 className="text-xl font-bold text-[#162623]">
              Your reports
            </h2>

            <p className="mt-1 text-sm text-[#667A77]">
              Reports connected to your health journey
            </p>
          </div>

          <div className="rounded-2xl border border-[#DCE9E8] bg-white p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF3F1] text-[#295255]">
                <FileText size={21} />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-[#162623]">
                  October 2026 Blood Test
                </p>

                <p className="mt-1 text-xs text-[#667A77]">
                  Demo Diagnostics • 07 Oct 2026
                </p>
              </div>

              <span className="rounded-full bg-[#E8F6EE] px-3 py-1.5 text-xs font-semibold text-[#35805C]">
                Ready
              </span>
            </div>

            <div className="mt-5 grid gap-3 border-t border-[#EEF3F2] pt-5 sm:grid-cols-3">
              <div>
                <p className="text-xs text-[#667A77]">HbA1c</p>
                <p className="mt-1 font-semibold">6.1 %</p>
              </div>

              <div>
                <p className="text-xs text-[#667A77]">LDL</p>
                <p className="mt-1 font-semibold">126 mg/dL</p>
              </div>

              <div>
                <p className="text-xs text-[#667A77]">Vitamin D</p>
                <p className="mt-1 font-semibold">21 ng/mL</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}