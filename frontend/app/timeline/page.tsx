"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Clock, FileText, CheckCircle2 } from "lucide-react";

export default function TimelinePage() {
  const router = useRouter();

  const timeline = [
    {
      date: "10 April 2026",
      title: "Latest Medical Report",
      description: "Blood test report analyzed and added to your health journey.",
      status: "Analyzed",
    },
    {
      date: "15 January 2026",
      title: "Previous Medical Report",
      description: "Previous report used as the comparison baseline.",
      status: "Analyzed",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F0F5F7] text-[#203330]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <button
          onClick={() => router.push("/dashboard")}
          className="mb-8 flex items-center gap-2 text-sm font-medium text-[#577877] hover:text-[#295255]"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#577877]">
            Health Journey
          </p>

          <h1 className="text-4xl font-bold text-[#162623]">
            Your health story over time
          </h1>

          <p className="mt-3 max-w-2xl text-[#667A77]">
            A chronological view of your medical reports and important health
            events.
          </p>
        </div>

        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-[#DCE9E8] p-3">
              <Clock className="text-[#295255]" size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold">Medical Timeline</h2>
              <p className="text-sm text-[#667A77]">
                Reports connected across time
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={item.date} className="relative flex gap-5">
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[15px] top-10 h-full w-px bg-[#DCE9E8]" />
                )}

                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#295255]">
                  <CheckCircle2 size={17} className="text-white" />
                </div>

                <div className="flex-1 rounded-2xl border border-[#DCE9E8] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[#577877]">
                        {item.date}
                      </p>

                      <h3 className="mt-1 text-lg font-bold">
                        {item.title}
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#DCE9E8] px-3 py-1 text-xs font-semibold text-[#295255]">
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-4 flex items-start gap-3 text-sm text-[#667A77]">
                    <FileText size={18} className="mt-0.5 shrink-0" />
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 rounded-2xl border border-[#DCE9E8] bg-white p-5 text-sm text-[#577877]">
          <strong>Evidence-first:</strong> MedTrace uses medical reports as the
          source of truth. AI organizes and explains the information; clinical
          decisions remain with your healthcare professional.
        </div>
      </div>
    </main>
  );
}