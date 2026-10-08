"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export default function Home() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const enterDemo = () => {
    localStorage.setItem("medtrace_authenticated", "true");
    localStorage.setItem("medtrace_user", "Rajesh");
    localStorage.setItem("medtrace_demo", "true");

    router.push("/dashboard");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Hackathon prototype authentication.
    // Replace with real authentication later.
    setTimeout(() => {
      localStorage.setItem("medtrace_authenticated", "true");
      localStorage.setItem("medtrace_user", email || "Rajesh");

      router.push("/dashboard");
    }, 500);
  };

  return (
    <main className="min-h-screen bg-[#F0F5F7] text-[#162623]">
      <div className="min-h-screen grid lg:grid-cols-[1.05fr_0.95fr]">

        {/* =====================================================
            LEFT — BRAND / PRODUCT STORY
        ===================================================== */}
        <section className="hidden lg:flex relative overflow-hidden bg-[#162623] p-10 xl:p-14">
          
          {/* Decorative background */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#295255] blur-3xl opacity-70" />
          <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#577877] blur-3xl opacity-30" />

          <div className="relative z-10 flex flex-col justify-between w-full max-w-[620px] mx-auto">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#295255] flex items-center justify-center">
                <HeartPulse size={22} className="text-white" />
              </div>

              <div>
                <p className="text-white font-bold text-xl leading-none">
                  MedTrace
                </p>
                <p className="text-[#8DA5A2] text-[10px] uppercase tracking-[0.2em] mt-1">
                  Health Intelligence
                </p>
              </div>
            </div>

            {/* Main message */}
            <div className="py-16">

              <div className="inline-flex items-center gap-2 rounded-full bg-[#295255]/70 border border-[#577877] px-4 py-2 text-sm text-[#B8D4D0]">
                <Sparkles size={14} />
                Doctor-in-the-loop health intelligence
              </div>

              <h1 className="mt-7 text-5xl xl:text-6xl font-bold tracking-[-0.04em] leading-[1.05] text-white">
                Your health journey,
                <br />
                <span className="text-[#B8D4D0]">
                  from one report
                </span>
                <br />
                to the next.
              </h1>

              <div className="mt-6 w-20 h-1.5 rounded-full bg-[#F4C95D]" />

              <p className="mt-7 text-[#8DA5A2] text-lg leading-8 max-w-[530px]">
                Organize your medical reports, understand what changed,
                and prepare for better conversations with your doctor.
              </p>

              {/* Product principles */}
              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#295255] flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[#B8D4D0]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Evidence first
                    </p>
                    <p className="text-[#718986] text-xs mt-0.5">
                      Trace important observations back to your reports.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#295255] flex items-center justify-center">
                    <Stethoscope size={18} className="text-[#B8D4D0]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Doctor in the loop
                    </p>
                    <p className="text-[#718986] text-xs mt-0.5">
                      AI organizes information. Your doctor makes decisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#295255] flex items-center justify-center">
                    <LockKeyhole size={18} className="text-[#B8D4D0]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Privacy focused
                    </p>
                    <p className="text-[#718986] text-xs mt-0.5">
                      Designed around controlled access to health information.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Principle */}
            <div className="border-t border-[#295255] pt-6">
              <p className="text-[#718986] text-xs uppercase tracking-[0.18em]">
                The MedTrace principle
              </p>

              <p className="text-white text-sm mt-2">
                Reports are the source of truth.
              </p>

              <p className="text-[#8DA5A2] text-sm mt-1">
                AI organizes the evidence. Your doctor makes the medical decision.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            RIGHT — LOGIN
        ===================================================== */}
        <section className="flex items-center justify-center px-5 py-8 sm:px-8">

          <div className="w-full max-w-[470px]">

            {/* Mobile logo */}
            <div className="lg:hidden flex items-center gap-3 mb-10">
              <div className="w-11 h-11 rounded-xl bg-[#295255] flex items-center justify-center">
                <HeartPulse size={22} className="text-white" />
              </div>

              <div>
                <p className="font-bold text-xl leading-none">
                  MedTrace
                </p>
                <p className="text-[#577877] text-[10px] uppercase tracking-[0.2em] mt-1">
                  Health Intelligence
                </p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <p className="text-[#295255] text-xs font-bold uppercase tracking-[0.18em]">
                Welcome to MedTrace
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                {mode === "login"
                  ? "Continue your health journey."
                  : "Create your health space."}
              </h2>

              <p className="mt-3 text-[#667A77] leading-6">
                {mode === "login"
                  ? "Access your reports, health timeline, insights and doctor preparation tools."
                  : "Bring your family's health reports together in one organized space."}
              </p>
            </div>

            {/* Login card */}
            <div className="mt-8 bg-white border border-[#DCE9E8] rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(22,38,35,0.08)]">

              {/* Toggle */}
              <div className="grid grid-cols-2 bg-[#F0F5F7] rounded-xl p-1">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`py-2.5 rounded-lg text-sm font-semibold transition ${
                    mode === "login"
                      ? "bg-white text-[#295255] shadow-sm"
                      : "text-[#667A77]"
                  }`}
                >
                  Log in
                </button>

                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`py-2.5 rounded-lg text-sm font-semibold transition ${
                    mode === "signup"
                      ? "bg-white text-[#295255] shadow-sm"
                      : "text-[#667A77]"
                  }`}
                >
                  Create account
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">

                <div>
                  <label className="block text-sm font-semibold text-[#203330] mb-2">
                    Email address
                  </label>

                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-12 px-4 rounded-xl border border-[#C9DDDB] bg-white outline-none text-sm transition focus:border-[#295255] focus:ring-4 focus:ring-[#295255]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#203330] mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full h-12 px-4 pr-12 rounded-xl border border-[#C9DDDB] bg-white outline-none text-sm transition focus:border-[#295255] focus:ring-4 focus:ring-[#295255]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667A77] hover:text-[#295255]"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {mode === "login" && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-xs font-semibold text-[#295255] hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-[#295255] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#162623] transition disabled:opacity-60"
                >
                  {loading
                    ? "Opening MedTrace..."
                    : mode === "login"
                    ? "Log in"
                    : "Create account"}

                  {!loading && <ArrowRight size={17} />}
                </button>

              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="h-px flex-1 bg-[#DCE9E8]" />
                <span className="text-xs text-[#8A9B98]">
                  or
                </span>
                <div className="h-px flex-1 bg-[#DCE9E8]" />
              </div>

              {/* Demo */}
              <button
                type="button"
                onClick={enterDemo}
                className="w-full h-12 rounded-xl border-2 border-[#295255] text-[#295255] font-semibold flex items-center justify-center gap-2 hover:bg-[#DCE9E8] transition"
              >
                <Sparkles size={17} />
                Enter Demo
              </button>

              <p className="text-center text-[11px] text-[#8A9B98] mt-3">
                Recommended for hackathon demonstration
              </p>

            </div>

            {/* Trust footer */}
            <div className="mt-6 flex items-center justify-center gap-5 text-xs text-[#718986]">

              <span className="flex items-center gap-1.5">
                <LockKeyhole size={13} />
                Privacy focused
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={13} />
                Evidence based
              </span>

              <span className="hidden sm:flex items-center gap-1.5">
                <Stethoscope size={13} />
                Doctor-in-loop
              </span>

            </div>

            <p className="text-center text-[10px] text-[#8A9B98] mt-6 leading-5">
              MedTrace AI provides health information and decision support.
              It does not diagnose diseases or replace qualified healthcare professionals.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}