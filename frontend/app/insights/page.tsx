"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Minus,
  ShieldCheck,
  FileText,
  ChevronRight,
  CircleHelp,
} from "lucide-react";

const changes = [
  {
    name: "HbA1c",
    previous: "6.7",
    current: "6.1",
    unit: "%",
    difference: "0.6",
    direction: "down",
    interpretation: "Potentially improving",
    description:
      "The value decreased compared with the previous report. Discuss the trend with your doctor in the context of your overall health.",
  },
  {
    name: "LDL Cholesterol",
    previous: "148",
    current: "126",
    unit: "mg/dL",
    difference: "22",
    direction: "down",
    interpretation: "Changed",
    description:
      "The value decreased compared with the previous report. Your doctor can determine what this change means for you.",
  },
  {
    name: "HDL Cholesterol",
    previous: "42",
    current: "48",
    unit: "mg/dL",
    difference: "6",
    direction: "up",
    interpretation: "Changed",
    description:
      "The value increased compared with the previous report. Discuss whether this change is meaningful in your clinical context.",
  },
  {
    name: "Vitamin D",
    previous: "18",
    current: "21",
    unit: "ng/mL",
    difference: "3",
    direction: "up",
    interpretation: "Changed",
    description:
      "The value increased compared with the previous report. Your healthcare professional can interpret the result using the laboratory reference range.",
  },
  {
    name: "Creatinine",
    previous: "0.9",
    current: "0.9",
    unit: "mg/dL",
    difference: "0",
    direction: "stable",
    interpretation: "Stable",
    description:
      "No numerical change was detected between the two reports.",
  },
];

function DirectionIcon({
  direction,
}: {
  direction: string;
}) {
  if (direction === "down") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F6EE] text-[#35805C]">
        <ArrowDown size={18} />
      </div>
    );
  }

  if (direction === "up") {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4E8] text-[#C87832]">
        <ArrowUp size={18} />
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F0F5F7] text-[#667A77]">
      <Minus size={18} />
    </div>
  );
}

export default function InsightsPage() {
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
                What Changed?
              </h1>

              <p className="text-sm text-[#667A77]">
                Your latest report compared with the previous one
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

        {/* Hero */}
        <section className="rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF3F1] px-3 py-1.5 text-xs font-semibold text-[#295255]">
              <FileText size={14} />
              Longitudinal comparison
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[#162623]">
              Your health story is changing over time.
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#667A77]">
              MedTrace compares values across reports so you can see what
              changed before your next conversation with your doctor.
            </p>

          </div>

          {/* Report comparison */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-[#DCE9E8] bg-[#F7FAFA] p-5">

              <p className="text-xs font-semibold uppercase tracking-wide text-[#667A77]">
                Previous report
              </p>

              <p className="mt-2 text-lg font-bold text-[#162623]">
                January 10, 2026
              </p>

              <p className="mt-1 text-sm text-[#667A77]">
                Demo Diagnostics
              </p>

            </div>

            <div className="rounded-2xl border border-[#B8D4D0] bg-[#F0F7F6] p-5">

              <p className="text-xs font-semibold uppercase tracking-wide text-[#295255]">
                Current report
              </p>

              <p className="mt-2 text-lg font-bold text-[#162623]">
                April 10, 2026
              </p>

              <p className="mt-1 text-sm text-[#667A77]">
                MedTrace Demo Diagnostics
              </p>

            </div>

          </div>

        </section>

        {/* Changes */}
        <section className="mt-8">

          <div className="mb-5">

            <h2 className="text-xl font-bold text-[#162623]">
              Key changes
            </h2>

            <p className="mt-1 text-sm text-[#667A77]">
              Numerical changes detected between the two reports
            </p>

          </div>

          <div className="space-y-4">

            {changes.map((change) => (

              <article
                key={change.name}
                className="rounded-3xl border border-[#DCE9E8] bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

                  {/* Name */}
                  <div className="flex flex-1 items-center gap-4">

                    <DirectionIcon direction={change.direction} />

                    <div>

                      <h3 className="font-bold text-[#162623]">
                        {change.name}
                      </h3>

                      <p className="mt-1 text-xs text-[#667A77]">
                        {change.interpretation}
                      </p>

                    </div>

                  </div>

                  {/* Values */}
                  <div className="flex items-center gap-4">

                    <div className="text-right">

                      <p className="text-xs text-[#667A77]">
                        Previous
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#162623]">
                        {change.previous}
                        <span className="ml-1 text-xs font-medium text-[#667A77]">
                          {change.unit}
                        </span>
                      </p>

                    </div>

                    <ChevronRight
                      size={20}
                      className="text-[#B8C9C7]"
                    />

                    <div>

                      <p className="text-xs text-[#667A77]">
                        Current
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#295255]">
                        {change.current}
                        <span className="ml-1 text-xs font-medium text-[#667A77]">
                          {change.unit}
                        </span>
                      </p>

                    </div>

                  </div>

                  {/* Difference */}
                  <div className="min-w-[100px] text-left lg:text-right">

                    <p className="text-xs text-[#667A77]">
                      Difference
                    </p>

                    <p className="mt-1 font-bold text-[#203330]">
                      {change.direction === "stable"
                        ? "No change"
                        : `${change.direction === "down" ? "↓" : "↑"} ${change.difference}`}
                    </p>

                  </div>

                </div>

                {/* Evidence */}
                <div className="mt-5 border-t border-[#EEF3F2] pt-5">

                  <div className="flex items-start gap-3">

                    <CircleHelp
                      size={18}
                      className="mt-0.5 shrink-0 text-[#295255]"
                    />

                    <div className="flex-1">

                      <p className="text-sm font-semibold text-[#203330]">
                        Why am I seeing this?
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#667A77]">
                        {change.description}
                      </p>

                    </div>

                  </div>

                  <button
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#295255] hover:underline"
                  >
                    <FileText size={16} />
                    View source report
                  </button>

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* Trust note */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF3F1] text-[#295255]">
              <ShieldCheck size={21} />
            </div>

            <div>

              <h3 className="font-bold text-[#162623]">
                Don't trust the AI. Verify the evidence.
              </h3>

              <p className="mt-1 text-sm leading-6 text-[#667A77]">
                MedTrace shows the underlying report values so you can verify
                what changed. These comparisons are informational and should
                be discussed with a qualified healthcare professional.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}