import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, Radar, BellRing, CalendarX2 } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier — 機票降價通知" },
      {
        name: "description",
        content:
          "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
      },
      { property: "og:title", content: "Flight Price Notifier — 機票降價通知" },
      {
        property: "og:description",
        content: "Set a route and a target price — we email you when the fare drops.",
      },
    ],
  }),
  component: LandingPage,
});

const FEATURES = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CalendarX2,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function LandingPage() {
  const ref = useFadeIn<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <Plane className="h-5 w-5 text-primary" />
            Flight Price Notifier
          </Link>
          <Link
            to="/auth"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-32">
          <span className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Plane className="h-3.5 w-3.5 text-primary" />
            機票降價通知
          </span>
          <h1
            className="fade-up max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            設定航線與目標價，
            <span className="text-primary">機票降價</span>
            就通知你
          </h1>
          <p
            className="fade-up mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Set a route and a target price — we email you when the fare drops.
          </p>
          <div className="fade-up mt-10" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
            >
              Sign in / 登入
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="fade-up text-center text-2xl font-bold tracking-tight sm:text-3xl">
            為不想盯票價的人設計
          </h2>
          <p className="fade-up mt-3 text-center text-muted-foreground">
            You pick the budget. We watch the fares.
          </p>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="fade-up card-hover rounded-2xl border border-border bg-card p-6"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-sm font-medium text-primary/90">{f.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
          © 2026 Flight Price Notifier
        </div>
      </footer>
    </div>
  );
}
