"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronRight,
  FileText,
  HeartPulse,
  History,
  Home,
  Settings,
  ShieldCheck,
  Stethoscope,
  TrendingDown,
  TrendingUp,
  Users,
  Upload,
} from "lucide-react";

const familyMembers = [
  {
    id: "you",
    name: "Rajesh",
    relation: "You",
    initials: "R",
    status: "Stable",
    statusColor: "#55B88A",
    reports: 8,
    parameters: 42,
  },
  {
    id: "mother",
    name: "Mother",
    relation: "Family member",
    initials: "M",
    status: "Stable",
    statusColor: "#55B88A",
    reports: 6,
    parameters: 31,
  },
  {
    id: "father",
    name: "Father",
    relation: "Family member",
    initials: "F",
    status: "Review needed",
    statusColor: "#F29E5B",
    reports: 5,
    parameters: 27,
  },
];

export default function DashboardPage() {
    const router = useRouter();
  const [activeMember, setActiveMember] = useState("you");

  const selectedMember =
    familyMembers.find((member) => member.id === activeMember) ??
    familyMembers[0];

  return (
    <main className="min-h-screen bg-[#F0F5F7] text-[#162623]">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-[245px] bg-[#162623] text-white flex-col">

        {/* Logo */}

        <div className="h-[76px] px-6 flex items-center gap-3 border-b border-[#295255]">

          <div className="w-10 h-10 rounded-xl bg-[#295255] flex items-center justify-center">
            <HeartPulse size={21} />
          </div>

          <div>
            <p className="font-bold text-lg leading-none">
              MedTrace
            </p>

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#8DA5A2] mt-1">
              Health Intelligence
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="px-4 py-6 space-y-1">

          <NavItem
            icon={Home}
            label="Overview"
            active
          />

          <NavItem
            icon={Users}
            label="Family"
          />

          <NavItem
            icon={FileText}
            label="Reports"
            onClick={() => router.push("/reports")}
          />

          <NavItem
            icon={History}
            label="Timeline"
          />

          <NavItem
            icon={Activity}
            label="Insights"
          />

          <NavItem
            icon={Stethoscope}
            label="Doctor"
          />

          <NavItem
            icon={CalendarDays}
            label="Follow-up"
          />

        </nav>

        <div className="mt-auto px-4 pb-5">

          <NavItem
            icon={Settings}
            label="Settings"
          />

          <div className="mt-5 border-t border-[#295255] pt-5 px-3">

            <p className="text-[10px] uppercase tracking-[0.16em] text-[#718986]">
              MedTrace principle
            </p>

            <p className="text-xs text-[#B8D4D0] leading-5 mt-2">
              Reports are the source of truth.
            </p>

          </div>

        </div>

      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="lg:ml-[245px] min-h-screen">

        {/* Header */}

        <header className="h-[76px] bg-white border-b border-[#DCE9E8] px-5 sm:px-8 flex items-center justify-between">

          <div>

            <p className="text-xs text-[#667A77]">
              Family Health Hub
            </p>

            <h1 className="text-xl font-bold mt-0.5">
              Good evening, Rajesh
            </h1>

          </div>

          <div className="flex items-center gap-3">

            <button className="w-10 h-10 rounded-xl border border-[#DCE9E8] bg-white flex items-center justify-center text-[#577877] hover:bg-[#F0F5F7]">
              <Bell size={18} />
            </button>

            <div className="w-10 h-10 rounded-xl bg-[#295255] text-white flex items-center justify-center font-semibold text-sm">
              R
            </div>

          </div>

        </header>

        <div className="max-w-[1250px] mx-auto px-5 sm:px-8 py-8">

          {/* =================================================
              WELCOME / PRIMARY ACTION
          ================================================= */}

          <section className="bg-[#295255] rounded-[24px] p-6 sm:p-8 text-white relative overflow-hidden">

            <div className="absolute -right-16 -top-24 w-72 h-72 rounded-full bg-[#577877]/40 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">

              <div className="max-w-[650px]">

                <div className="flex items-center gap-2 text-[#B8D4D0] text-xs font-semibold uppercase tracking-[0.16em]">
                  <ShieldCheck size={15} />
                  Your health workspace
                </div>

                <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
                  Your health story is taking shape.
                </h2>

                <p className="mt-3 text-[#DCE9E8] text-sm sm:text-base leading-6">
                  You have 8 reports connected to your health journey.
                  Review recent changes and prepare for your next doctor
                  conversation.
                </p>

              </div>

              <button
                onClick={() => window.location.href = "/upload"}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#295255] px-5 py-3 rounded-xl font-semibold text-sm hover:bg-[#F0F5F7] transition"
              >
                <Upload size={17} />
                Upload Report
              </button>

            </div>

          </section>

          {/* =================================================
              YOUR HEALTH
          ================================================= */}

          <section className="mt-8">

            <div className="flex items-center justify-between mb-4">

              <div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#577877]">
                  Your health
                </p>

                <h2 className="text-xl font-bold mt-1">
                  Overview
                </h2>
              </div>

              <button className="text-sm font-semibold text-[#295255] flex items-center gap-1">
                View dashboard
                <ArrowRight size={15} />
              </button>

            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <StatCard
                icon={FileText}
                label="Reports"
                value="08"
                detail="Across your timeline"
                iconBg="#EAF1FF"
                iconColor="#5B8DEF"
              />

              <StatCard
                icon={Activity}
                label="Parameters tracked"
                value="42"
                detail="Across recent reports"
                iconBg="#E5F7EF"
                iconColor="#55B88A"
              />

              <StatCard
                icon={TrendingDown}
                label="Meaningful changes"
                value="03"
                detail="Since previous reports"
                iconBg="#FFF7DE"
                iconColor="#C39520"
              />

              <StatCard
                icon={CalendarDays}
                label="Follow-ups"
                value="02"
                detail="Upcoming"
                iconBg="#FDE9EA"
                iconColor="#E56B6F"
              />

            </div>

          </section>

          {/* =================================================
              FAMILY HEALTH
          ================================================= */}

          <section className="mt-9">

            <div className="flex items-end justify-between mb-4">

              <div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#577877]">
                  Family
                </p>

                <h2 className="text-xl font-bold mt-1">
                  Family Health
                </h2>
              </div>

              <button className="text-sm font-semibold text-[#295255] flex items-center gap-1">
                Manage family
                <ChevronRight size={15} />
              </button>

            </div>

            <div className="grid md:grid-cols-3 gap-4">

              {familyMembers.map((member) => (

                <button
                  key={member.id}
                  onClick={() => setActiveMember(member.id)}
                  className={`text-left bg-white rounded-2xl border p-5 transition ${
                    activeMember === member.id
                      ? "border-[#295255] shadow-md"
                      : "border-[#DCE9E8] hover:border-[#B8D4D0]"
                  }`}
                >

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-xl bg-[#DCE9E8] text-[#295255] flex items-center justify-center font-bold">
                        {member.initials}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {member.name}
                        </p>

                        <p className="text-xs text-[#667A77] mt-0.5">
                          {member.relation}
                        </p>
                      </div>

                    </div>

                    <ChevronRight
                      size={17}
                      className="text-[#8A9B98]"
                    />

                  </div>

                  <div className="mt-5 flex items-center gap-2">

                    <span
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: member.statusColor,
                      }}
                    />

                    <span className="text-xs font-semibold text-[#577877]">
                      {member.status}
                    </span>

                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#EEF3F2]">

                    <div>
                      <p className="text-[11px] text-[#8A9B98]">
                        Reports
                      </p>

                      <p className="font-bold mt-1">
                        {member.reports}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] text-[#8A9B98]">
                        Parameters
                      </p>

                      <p className="font-bold mt-1">
                        {member.parameters}
                      </p>
                    </div>

                  </div>

                </button>

              ))}

            </div>

          </section>

          {/* =================================================
              LOWER GRID
          ================================================= */}

          <section className="mt-9 grid lg:grid-cols-[1.35fr_0.65fr] gap-5">

            {/* What Changed */}

            <div className="bg-white border border-[#DCE9E8] rounded-2xl p-6">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#577877]">
                    Recent analysis
                  </p>

                  <h2 className="text-xl font-bold mt-1">
                    What Changed?
                  </h2>

                </div>

                <div className="w-10 h-10 rounded-xl bg-[#E5F7EF] flex items-center justify-center">
                  <TrendingUp
                    size={19}
                    className="text-[#55B88A]"
                  />
                </div>

              </div>

              <p className="text-sm text-[#667A77] mt-2">
                Changes detected between your latest reports.
              </p>

              <div className="mt-6 space-y-3">

                <ChangeRow
                  name="HbA1c"
                  previous="6.7 %"
                  current="6.1 %"
                  status="Improving"
                  color="#55B88A"
                  icon={TrendingDown}
                />

                <ChangeRow
                  name="LDL"
                  previous="148 mg/dL"
                  current="126 mg/dL"
                  status="Improving"
                  color="#55B88A"
                  icon={TrendingDown}
                />

                <ChangeRow
                  name="Vitamin D"
                  previous="18 ng/mL"
                  current="21 ng/mL"
                  status="Changed"
                  color="#F4C95D"
                  icon={TrendingUp}
                />

              </div>

              <button className="mt-5 text-sm font-semibold text-[#295255] flex items-center gap-1">
                View evidence
                <ArrowRight size={15} />
              </button>

            </div>

            {/* Health Pulse */}

            <div className="bg-white border border-[#DCE9E8] rounded-2xl p-6">

              <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#577877]">
                Health Pulse
              </p>

              <h2 className="text-xl font-bold mt-1">
                Follow-up readiness
              </h2>

              <div className="mt-6 flex items-center justify-center">

                <div className="w-36 h-36 rounded-full border-[12px] border-[#DCE9E8] border-t-[#55B88A] border-r-[#55B88A] flex items-center justify-center">

                  <div className="text-center">
                    <p className="text-3xl font-bold">
                      82%
                    </p>
                    <p className="text-[10px] text-[#667A77]">
                      ready
                    </p>
                  </div>

                </div>

              </div>

              <p className="text-sm text-[#667A77] text-center leading-5 mt-5">
                Your recent reports are organized and ready for your next
                doctor conversation.
              </p>

            </div>

          </section>

          {/* =================================================
              UPCOMING FOLLOW-UP
          ================================================= */}

          <section className="mt-5 grid md:grid-cols-2 gap-5">

            <div className="bg-white border border-[#DCE9E8] rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-[#FFF0E3] flex items-center justify-center">
                  <CalendarDays
                    size={19}
                    className="text-[#F29E5B]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#667A77]">
                    Upcoming follow-up
                  </p>

                  <p className="font-bold mt-0.5">
                    Review recent blood report
                  </p>
                </div>

              </div>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-sm text-[#667A77]">
                  14 October 2026
                </p>

                <button className="text-sm font-semibold text-[#295255]">
                  Prepare →
                </button>

              </div>

            </div>

            <div className="bg-[#DCE9E8] rounded-2xl p-6">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <Stethoscope
                    size={19}
                    className="text-[#295255]"
                  />
                </div>

                <div>
                  <p className="text-xs text-[#577877]">
                    Doctor preparation
                  </p>

                  <p className="font-bold mt-0.5">
                    4 questions ready to review
                  </p>
                </div>

              </div>

              <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#295255]">
                Open Doctor Brief
                <ArrowRight size={15} />
              </button>

            </div>

          </section>

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="mt-10 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8A9B98]">

            <span>
              © 2026 MedTrace AI
            </span>

            <span>
              Reports are the source of truth • AI organizes • Doctor decides
            </span>

          </footer>

        </div>

      </div>

    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function NavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
        active
          ? "bg-[#295255] text-white"
          : "text-[#8DA5A2] hover:bg-[#1D302C] hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
  iconBg,
  iconColor,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  detail: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="bg-white border border-[#DCE9E8] rounded-2xl p-5">

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: iconBg,
          color: iconColor,
        }}
      >
        <Icon size={19} />
      </div>

      <p className="text-xs text-[#667A77] mt-5">
        {label}
      </p>

      <p className="text-2xl font-bold mt-1">
        {value}
      </p>

      <p className="text-[11px] text-[#8A9B98] mt-1">
        {detail}
      </p>

    </div>
  );
}

function ChangeRow({
  name,
  previous,
  current,
  status,
  color,
  icon: Icon,
}: {
  name: string;
  previous: string;
  current: string;
  status: string;
  color: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[#EEF3F2] p-4">

      <div className="flex items-center gap-3">

        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            backgroundColor: `${color}18`,
            color,
          }}
        >
          <Icon size={17} />
        </div>

        <div>
          <p className="text-sm font-semibold">
            {name}
          </p>

          <p className="text-[11px] text-[#8A9B98] mt-0.5">
            {previous} → {current}
          </p>
        </div>

      </div>

      <span
        className="text-[10px] font-bold px-2.5 py-1.5 rounded-full"
        style={{
          backgroundColor: `${color}18`,
          color,
        }}
      >
        {status}
      </span>

    </div>
  );
}