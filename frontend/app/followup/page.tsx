"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Stethoscope,
  Clock,
} from "lucide-react";

export default function FollowUpPage() {
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
                Follow-up
              </h1>

              <p className="text-sm text-[#667A77]">
                Keep your next healthcare conversation connected to your record
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#EAF3F1] px-4 py-2 text-sm font-medium text-[#295255]">
            <ShieldCheck size={17} />
            Doctor-in-the-loop
          </div>

        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-8">

        {/* Follow-up status */}
        <section className="rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F6EE] text-[#35805C]">
              <CheckCircle2 size={25} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#35805C]">
                Follow-up plan ready
              </p>

              <h2 className="mt-1 text-2xl font-bold text-[#162623]">
                Your next step is connected to your health story.
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667A77]">
                MedTrace keeps your report changes, doctor discussion points,
                and follow-up information together so the next report can be
                understood in context.
              </p>
            </div>

          </div>

        </section>

        {/* Appointment */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCE9E8] text-[#295255]">
              <CalendarDays size={22} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#162623]">
                Next consultation
              </h2>

              <p className="text-sm text-[#667A77]">
                Planned follow-up
              </p>
            </div>

          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#F7FAFA] p-5">

              <p className="text-xs font-semibold uppercase tracking-wide text-[#667A77]">
                Date
              </p>

              <p className="mt-2 text-xl font-bold text-[#295255]">
                20 May 2026
              </p>

            </div>

            <div className="rounded-2xl bg-[#F7FAFA] p-5">

              <p className="text-xs font-semibold uppercase tracking-wide text-[#667A77]">
                Status
              </p>

              <div className="mt-2 flex items-center gap-2">

                <Clock size={17} className="text-[#C87832]" />

                <span className="font-semibold text-[#203330]">
                  Upcoming
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* Discussion summary */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4EFEA] text-[#C87832]">
              <Stethoscope size={21} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#162623]">
                Discussion summary
              </h2>

              <p className="text-sm text-[#667A77]">
                Points to bring into the consultation
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-3">

            <div className="rounded-2xl border border-[#EEF3F2] bg-[#F7FAFA] p-5">

              <p className="text-sm font-semibold text-[#203330]">
                HbA1c
              </p>

              <p className="mt-1 text-sm text-[#667A77]">
                Previous: 6.7% → Current: 6.1%
              </p>

            </div>

            <div className="rounded-2xl border border-[#EEF3F2] bg-[#F7FAFA] p-5">

              <p className="text-sm font-semibold text-[#203330]">
                LDL Cholesterol
              </p>

              <p className="mt-1 text-sm text-[#667A77]">
                Previous: 148 mg/dL → Current: 126 mg/dL
              </p>

            </div>

            <div className="rounded-2xl border border-[#EEF3F2] bg-[#F7FAFA] p-5">

              <p className="text-sm font-semibold text-[#203330]">
                Vitamin D
              </p>

              <p className="mt-1 text-sm text-[#667A77]">
                Previous: 18 ng/mL → Current: 21 ng/mL
              </p>

            </div>

          </div>

        </section>

        {/* Source reports */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF3F1] text-[#295255]">
              <FileText size={21} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#162623]">
                Reports supporting this follow-up
              </h2>

              <p className="text-sm text-[#667A77]">
                Evidence connected to the discussion
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-3">

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

        </section>

        {/* Next report */}
        <section className="mt-8 rounded-3xl border border-[#B8D4D0] bg-[#F0F7F6] p-8">

          <h2 className="text-xl font-bold text-[#162623]">
            When your next report arrives
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667A77]">
            MedTrace can compare the new results with your previous reports
            and help you prepare for the next doctor conversation.
          </p>

          <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#295255]">
            <CheckCircle2 size={18} />
            New report → Compare → Understand → Discuss
          </div>

        </section>

        {/* Safety */}
        <section className="mt-8 rounded-3xl border border-[#DCE9E8] bg-white p-6">

          <div className="flex items-start gap-3">

            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-[#295255]"
            />

            <div>

              <p className="text-sm font-semibold text-[#203330]">
                MedTrace supports the conversation — it does not make the
                medical decision.
              </p>

              <p className="mt-1 text-xs leading-5 text-[#667A77]">
                Follow-up decisions, treatment changes, and clinical
                interpretation should always be made with a qualified
                healthcare professional.
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}