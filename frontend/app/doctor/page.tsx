"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Stethoscope,
  MessageCircleQuestion,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";

const changes = [
  {
    name: "HbA1c",
    previous: "6.7%",
    current: "6.1%",
    change: "↓ 0.6",
  },
  {
    name: "LDL Cholesterol",
    previous: "148 mg/dL",
    current: "126 mg/dL",
    change: "↓ 22",
  },
  {
    name: "HDL Cholesterol",
    previous: "42 mg/dL",
    current: "48 mg/dL",
    change: "↑ 6",
  },
  {
    name: "Vitamin D",
    previous: "18 ng/mL",
    current: "21 ng/mL",
    change: "↑ 3",
  },
];

const questions = [
  "What do these changes mean in my overall health context?",
  "Should any of these values be monitored again?",
  "Is there anything I should change or discuss before my next follow-up?",
];

export default function DoctorPage() {
  const router = useRouter();

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
                Doctor Brief
              </h1>

              <p className="text-sm text-[#667A77]">
                A concise summary to prepare for your consultation
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

        {/* Patient summary */}
        <section className="rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCE9E8] text-[#295255]">
                <Stethoscope size={27} />
              </div>

              <div>

                <p className="text-sm text-[#667A77]">
                  Patient
                </p>

                <h2 className="text-2xl font-bold text-[#162623]">
                  Rajesh
                </h2>

                <p className="mt-1 text-sm text-[#667A77]">
                  Patient ID: patient_001
                </p>

              </div>

            </div>

            <div className="rounded-2xl bg-[#F0F7F6] px-5 py-4">

              <p className="text-xs font-semibold uppercase tracking-wide text-[#667A77]">
                Reports reviewed
              </p>

              <p className="mt-1 text-xl font-bold text-[#295255]">
                2 reports
              </p>

              <p className="text-xs text-[#667A77]">
                Jan 2026 → Apr 2026
              </p>

            </div>

          </div>

        </section>

        {/* Key changes */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-[#162623]">
              Key changes
            </h2>

            <p className="mt-1 text-sm text-[#667A77]">
              Values detected across the available reports
            </p>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {changes.map((item) => (

              <div
                key={item.name}
                className="rounded-2xl border border-[#DCE9E8] bg-[#F7FAFA] p-5"
              >

                <p className="text-sm font-medium text-[#667A77]">
                  {item.name}
                </p>

                <div className="mt-3 flex items-center gap-3">

                  <span className="font-semibold text-[#667A77]">
                    {item.previous}
                  </span>

                  <span className="text-[#B8C9C7]">
                    →
                  </span>

                  <span className="font-bold text-[#295255]">
                    {item.current}
                  </span>

                </div>

                <p className="mt-3 text-sm font-semibold text-[#35805C]">
                  {item.change}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Questions */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4EFEA] text-[#C87832]">
              <MessageCircleQuestion size={22} />
            </div>

            <div>

              <h2 className="text-xl font-bold text-[#162623]">
                Questions to discuss with your doctor
              </h2>

              <p className="mt-1 text-sm text-[#667A77]">
                Use these prompts to make your consultation more productive.
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-3">

            {questions.map((question, index) => (

              <div
                key={question}
                className="flex gap-4 rounded-2xl border border-[#EEF3F2] bg-[#F7FAFA] p-4"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DCE9E8] text-xs font-bold text-[#295255]">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-[#203330]">
                  {question}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Evidence */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3F1] text-[#295255]">
              <FileText size={21} />
            </div>

            <div className="flex-1">

              <h2 className="text-xl font-bold text-[#162623]">
                Source documents
              </h2>

              <p className="mt-1 text-sm text-[#667A77]">
                Every observation should remain traceable to its source report.
              </p>

              <div className="mt-5 space-y-3">

                <div className="flex items-center justify-between rounded-2xl border border-[#DCE9E8] p-4">

                  <div className="flex items-center gap-3">

                    <FileText
                      size={19}
                      className="text-[#295255]"
                    />

                    <div>

                      <p className="text-sm font-semibold">
                        January 2026 Blood Test
                      </p>

                      <p className="text-xs text-[#667A77]">
                        Previous report
                      </p>

                    </div>

                  </div>

                  <CheckCircle2
                    size={18}
                    className="text-[#55B88A]"
                  />

                </div>

                <div className="flex items-center justify-between rounded-2xl border border-[#DCE9E8] p-4">

                  <div className="flex items-center gap-3">

                    <FileText
                      size={19}
                      className="text-[#295255]"
                    />

                    <div>

                      <p className="text-sm font-semibold">
                        April 2026 Blood Test
                      </p>

                      <p className="text-xs text-[#667A77]">
                        Current report
                      </p>

                    </div>

                  </div>

                  <CheckCircle2
                    size={18}
                    className="text-[#55B88A]"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* Follow-up */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#C87832]">
              <CalendarDays size={21} />
            </div>

            <div className="flex-1">

              <h2 className="text-xl font-bold text-[#162623]">
                Follow-up
              </h2>

              <p className="mt-1 text-sm text-[#667A77]">
                Keep the next step connected to the health record.
              </p>

              <div className="mt-5 rounded-2xl bg-[#F7FAFA] p-5">

                <p className="text-sm font-semibold text-[#203330]">
                  Next consultation
                </p>

                <p className="mt-2 text-lg font-bold text-[#295255]">
                  20 May 2026
                </p>

                <p className="mt-2 text-sm leading-6 text-[#667A77]">
                  Discuss the observed report changes and whether additional
                  monitoring is appropriate.
                </p>

              </div>

              <button
                onClick={() => router.push("/followup")}
                className="mt-5 rounded-xl bg-[#295255] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#203F41]"
              >
                Open follow-up plan
              </button>

            </div>

          </div>

        </section>

        {/* Trust footer */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-6">

          <div className="flex items-start gap-3">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#295255]"
            />

            <div>

              <p className="text-sm font-semibold text-[#203330]">
                Doctor-in-the-loop
              </p>

              <p className="mt-1 text-xs leading-5 text-[#667A77]">
                MedTrace prepares information for a healthcare conversation.
                It does not diagnose conditions, prescribe treatment, or
                replace professional clinical judgment.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}