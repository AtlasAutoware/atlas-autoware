import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import heroCar from "@/assets/rc-car.png";
import projLane from "@/assets/project-lane.jpg";
import projRc from "@/assets/project-rc.jpg";

import atlasLogo from "@/assets/atlas-logo.png";
import atlasGcLogo from "@/assets/atlas-gc.png";
import fleursDaveLogo from "@/assets/fleurs-dave.png";
import progressiveRcLogo from "@/assets/progressive-rc.png";
import pixyCamLogo from "@/assets/pixycam.png";
import segmentsAiLogo from "@/assets/segments-ai-white.png";
import openmvLogo from "@/assets/openmv.png";
import rcCarPhoto from "@/assets/rc-car.png";
import teamPhoto from "@/assets/2025_Team.png";
import sickLogo from "@/assets/Sickimg.png";
import allgoLogo from "@/assets/AllgoRhythm_img.png";
import rabLogo from "@/assets/rab.png";
import bachtorockLogo from "@/assets/bachtorock.png";
import hiticLogo from "@/assets/Hitc.png";
import orbbecLogo from "@/assets/orbbec-logo.png";
import injoraLogo from "@/assets/injora-logo.png";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      {
        property: "og:title",
        content: "Atlas Autoware — Building the Future of Autonomous Mobility",
      },
    ],
  }),
  component: HomePage,
});

/* ---------- Small primitives ---------- */

function LogoMark() {
  return (
    <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
      <img src={atlasLogo} alt="Atlas Autoware logo" className="w-7 h-7 object-contain" />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="w-6 h-px bg-brand" />
      {children}
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const chips = [
    { title: "Computer Vision", meta: "OpenCV · YOLO" },
    { title: "Embedded Systems", meta: "Jetson · Arduino" },
    { title: "Artificial Intelligence", meta: "PyTorch · TF" },
    { title: "Autonomous Driving", meta: "ROS · Sensor Fusion" },
    { title: "LiDAR lock", meta: "360° scan · 20 Hz" },
    { title: "32 fps vision", meta: "Stereo camera pipeline" },
    { title: "Path clear", meta: "Planner · obstacle-free" },
    { title: "~20 of us", meta: "on the team" },
    { title: "2 competitions", meta: "entered so far" },
    { title: "8th at IGVC 2022", meta: "against college teams" },
    { title: "Car #2", meta: "in the works now" },
  ];

  const [chipIdx, setChipIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setChipIdx((i) => (i + 1) % chips.length), 6400);
    return () => clearInterval(id);
  }, [chips.length]);
  const chip = chips[chipIdx];
  return (
    <section id="top" className="relative min-h-screen pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroCar}
          alt="Image loading"
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <SectionLabel>Student · Engineering · Autonomous</SectionLabel>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-gradient">
            We're <span className="text-brand-glow">high schoolers</span>
            <br />
            <span className="text-brand-glow">building a car</span>
            <br />
            that drives itself.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Atlas Autoware is a student team out of Northern Virginia. We started in a
            basement with a beat-up chassis and a pile of sensors, and we've been
            teaching it to drive ever since. No professional engineers, just us, after
            school and most weekends.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">

            <Link to="/donate" className="btn-donate">
              Chip In
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href="#projects" className="btn-ghost">
              Our Projects
            </a>
          </div>
        </div>

        {/* Bouncing car with a single rotating capability chip */}
        <div className="lg:col-span-6 relative min-h-[520px] md:h-[720px] flex items-center justify-center">
          <div className="relative w-full max-w-[720px] aspect-[4/3]">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-brand/25 via-brand-glow/10 to-transparent blur-2xl" />

            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-full animate-float-slow" style={{ animationDuration: "3.2s" }}>
                <img
                  src={rcCarPhoto}
                  alt="Image loading"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[70%] h-4 rounded-full bg-black/60 blur-lg animate-float-slow"
                  style={{ animationDuration: "3.2s", animationDelay: "0.05s" }}
                />
              </div>
            </div>

            <div
              className="absolute w-44 -bottom-4 right-16 animate-float-slow"
              style={{ animationDuration: "3.2s" }}
            >
              <div
                key={chip.title}
                className="glass-strong rounded-xl p-3 animate-fade-up text-center"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="min-w-0">
                  <div className="font-medium text-sm truncate">{chip.title}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 truncate">
                    {chip.meta}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo cloud ---------- */

function LogoCloud() {
  const items = [
    "ROS", "OpenCV", "PyTorch", "TensorFlow", "YOLO", "Jetson",
    "Raspberry Pi", "Arduino", "Docker", "Python", "C++", "Git",
  ];
  const row = [...items, ...items];
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Powered by an open, professional stack
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-14 animate-marquee w-max">
          {row.map((t, i) => (
            <div
              key={i}
              className="text-2xl font-medium text-muted-foreground/60 whitespace-nowrap"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  const features = [
    {
      title: "It looks around",
      desc: "The LiDAR and cameras feed in, and the code stitches them into a picture of what's out there: lanes, cones, curbs, whatever's in the way.",
    },
    {
      title: "It picks a line",
      desc: "Then it works out where to actually go (the smoothest, safest path through the mess in front of it) and keeps re-checking that call constantly.",
    },
    {
      title: "It actually drives",
      desc: "Last part: turning that plan into real steering, gas, and brakes. This is the bit we spent the most weekends tuning so it doesn't drive like a robot.",
    },
  ];
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant">
              <img
                src={rcCarPhoto}
                alt="Image loading"
                loading="lazy"
                className="w-full h-full object-cover aspect-[5/6]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionLabel>Who we are</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              Honestly? We're just a bunch of kids who got obsessed.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're all students at Thomas Jefferson High School for Science and
                Technology (TJHSST). When we started, none of us knew how to make a
                self-driving car. We learned through trial and error, reading research
                papers we barely understood, and spending countless late nights in the
                lab.
              </p>
              <p className="text-center">Here's roughly how our car thinks:</p>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl p-5 bg-surface/60 border border-white/8 hover:border-brand/40 transition-colors text-center"
                >
                  <div className="text-lg font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function Projects() {
  const projects = [
    {
      img: rcCarPhoto,
      title: "Atlas One",
      desc: "Our first car. It sees the road through cameras, figures out where the lane actually is, and steers to stay in it - all running live on a Jetson Nano.",
      tags: [],
    },
    {
      img: null,
      title: "Atlas Two",
      desc: "Coming soon.",
      tags: [],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel>What we build</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Projects shipped by our members.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our members design, build, and test the vehicle systems using computer vision, machine learning, sensors, and embedded hardware.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden bg-surface/70 border border-white/8 hover:border-brand/50 transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              {p.img ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] overflow-hidden bg-surface/40 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xl font-semibold tracking-tight">Atlas Two - coming soon!</p>
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                {p.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Team ---------- */

function Team() {
  return (
    <section id="team" className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="w-6 h-px bg-brand" />
            Team
            <span className="w-6 h-px bg-brand" />
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient max-w-full">
            The team behind <span className="text-brand-glow">Atlas Autoware.</span>
          </h2>
        </div>
        <div className="mt-14 flex justify-center">
          <img
            src={teamPhoto}
            alt="Atlas Autoware team"
            className="w-full max-w-4xl h-auto rounded-2xl border border-white/10 shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
}


/* ---------- Timeline ---------- */

function Timeline() {
  const events = [
    { year: "2022", title: "Club Founded", desc: "Founded by 5 students passionate about autonomy." },
    { year: "2023", title: "First Project", desc: "Delivered our lane-detection prototype on Jetson." },
    { year: "2023", title: "First Competition", desc: "Placed top-10 at regional autonomous racing." },
    { year: "2024", title: "Workshops", desc: "Ran 6 open workshops for 200+ students." },
    { year: "2026", title: "Future Goals", desc: "Full-scale autonomous test platform on campus." },
  ];
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <SectionLabel>Timeline</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            Our journey so far.
          </h2>
        </div>
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid md:grid-cols-5 gap-8">
            {events.map((e, i) => (
              <div key={i} className="relative">
                <div className="hidden md:block w-3 h-3 rounded-full bg-brand shadow-glow mx-auto mb-6 relative z-10" />
                <div className="glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-widest text-brand-glow">
                    {e.year}
                  </div>
                  <div className="mt-2 font-semibold">{e.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="text-5xl md:text-6xl font-semibold text-gradient">
      {n}
      {suffix}
    </div>
  );
}

function Stats() {
  const items = [
    { n: "~20", label: "of us on the team" },
    { n: "2", label: "competitions entered so far" },
    { n: <>8<sup>th</sup></>, label: "at IGVC 2022, against college teams" },
    { n: "#2", label: "car, in the works now" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 bg-surface/60 p-8 min-h-[180px] flex flex-col justify-between shadow-elegant"
          >
            <div className="text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
              {s.n}
            </div>
            <div className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Awkward Part ---------- */

function AwkwardPart() {
  return (
    <section className="py-20 md:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="w-6 h-px bg-brand" />
          The awkward part
        </div>
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-gradient max-w-4xl mx-auto">
          This stuff is expensive,<br />and we're, you know, in high school.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          A single LiDAR costs more than most of our parents would like. Add cameras, a decent GPU,
          spare parts we keep breaking, and gas money to drive to competitions. It adds up fast.
          If you can spare anything, it genuinely keeps us running.
        </p>
        <div className="mt-9 flex flex-wrap justify-center items-center gap-3">
          <Link to="/donate" className="btn-donate inline-flex items-center gap-2">
            Help us out 🤍
          </Link>
          <a href="#projects" className="btn-ghost">See what we built first</a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why we do this ---------- */

function WhyWeDoThis() {
  const points = [
    {
      title: "Real hardware, real consequences",
      desc: "Actual LiDAR and cameras, not just a screen.",
    },
    {
      title: "Older kids teach the new ones",
      desc: "Nobody's born knowing ROS. You pick it up from whoever's been here longer.",
    },
    {
      title: "Show up curious, that's it",
      desc: "We've taught total beginners. If you're willing to be confused for a while, you'll be fine.",
    },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant aspect-[4/3] bg-gradient-to-br from-brand/10 via-surface to-background flex items-center justify-center">
            <img
              src={rcCarPhoto}
              alt="Atlas Autoware car in the lab"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <SectionLabel>Why we do this</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
            You learn a lot more<br />when the thing is real.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A simulator is one thing. A 100-pound car that'll actually drive into a cone if
            you mess up the math is another. We wanted the real version: the soldering, the
            dead batteries, the "why is it turning left" debugging at 11pm. That's the stuff
            you remember.
          </p>
          <div className="mt-8 space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-brand/10 text-brand text-sm">✓</span>
                <div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Recent Event ---------- */

function RecentEvent() {
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 border border-white/10 rounded-2xl bg-surface/40">
          <div className="shrink-0 w-24 h-28 rounded-2xl bg-black text-center flex flex-col items-center justify-center border border-white/10">
            <div className="text-xs uppercase tracking-widest text-brand-glow">Jun</div>
            <div className="text-4xl font-semibold text-foreground leading-none mt-1">22</div>
            <div className="text-xs text-muted-foreground mt-1">2026</div>
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-glow">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Most recent
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight">
              IEEE Intelligent Vehicles Symposium 2026
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
              We made it to IV 2026 in Detroit, but a hardware failure stopped the car before we could finish. Our first DNF. Rough, but we learned a ton, and we're already prepping for our next RoboRacer round in Boston.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-7.58-8-13a8 8 0 1 1 16 0c0 5.42-8 13-8 13z" />
                <circle cx="12" cy="9" r="3" />
              </svg>
              Detroit, Michigan · June 22–25
            </div>
          </div>
          <a
            href="https://ieee-iv.org/2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 shrink-0"
          >
            Event details
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Fundraising Progress ---------- */

function FundraisingProgress() {
  const raised = 700;
  const goal = 1500;
  const pct = Math.min(100, (raised / goal) * 100);
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="p-8 md:p-10 border border-white/10 rounded-2xl bg-surface/40">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <SectionLabel>Our goal this season</SectionLabel>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Help us raise <span className="text-brand-glow">${goal.toLocaleString()}</span>
              </h3>
            </div>
            <div className="text-right">
              <div className="text-4xl md:text-5xl font-semibold text-brand-glow">${raised}</div>
              <div className="text-sm text-muted-foreground mt-1">of ${goal.toLocaleString()} raised so far</div>
            </div>
          </div>
          <div className="mt-8 h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-glow shadow-glow transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-glow" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Getting to competitions</div>
                <div className="text-sm text-muted-foreground mt-1">Travel, gas, and entry fees to events like IV 2026.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-brand/10 border border-brand/20 grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-glow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 2 22h20L12 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold">Building Atlas Two - 2nd Car</div>
                <div className="text-sm text-muted-foreground mt-1">A second car with better sensors and faster compute.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Sponsors ---------- */



function Supporters() {
  return (
    <section className="py-20 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mt-6">
            <span className="w-6 h-px bg-brand" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
              The sponsors behind the build.
            </h2>
            <span className="w-6 h-px bg-brand" />
          </div>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground whitespace-pre-line">
            Every part, every trip, every win made possible by sponsors like these.{"\u00a0"}{"\n"}
            Interested in supporting us?{"\u00a0"}{"\n"}
            <Link
              to="/donate"
              className="text-brand-glow hover:text-foreground transition-colors underline underline-offset-4"
            >
              Become a sponsor →
            </Link>{"\n"}
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.5)]" />
              <h3 className="text-lg font-semibold tracking-tight text-yellow-400">Gold</h3>
            </div>
            <a
              href="https://www.sick.com/us/en/"
              target="_blank"
              rel="noopener noreferrer"
                className="block rounded-2xl border-2 border-yellow-400/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:shadow-[0_0_32px_rgba(250,204,21,0.35)]"
            >
              <img src={sickLogo} alt="SICK" className="max-h-40 w-auto object-contain" />
            </a>
            <div className="mt-8 border-t border-slate-300/10 pt-8">
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <span className="w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_12px_rgba(203,213,225,0.5)]" />
                <h3 className="text-lg font-semibold tracking-tight text-slate-300">Silver</h3>
              </div>
              <a
                href="https://atlasgc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border-2 border-slate-300/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_0_32px_rgba(203,213,225,0.35)]"
              >
                <img src={atlasGcLogo} alt="Atlas General Contractors" className="max-h-40 w-auto object-contain" />
              </a>
              <a
                href="https://segments.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-2xl border-2 border-slate-300/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_0_32px_rgba(203,213,225,0.35)]"
              >
                <img src={segmentsAiLogo} alt="Segments.ai" className="max-h-36 w-auto object-contain" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-600 shadow-[0_0_12px_rgba(217,119,6,0.5)]" />
                <h3 className="text-lg font-semibold tracking-tight text-amber-600">Bronze</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <a
                  href="https://www.progressiverc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <div className="w-full flex items-center justify-center mb-6">
                    <img src={progressiveRcLogo} alt="Progressive RC" className="max-h-24 w-auto object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                </a>
                <a
                  href="https://pixycam.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <div className="w-full flex items-center justify-center mb-6">
                    <img src={pixyCamLogo} alt="Pixy Cam" className="max-h-24 w-auto object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                </a>
                <a
                  href="https://hitecrcd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block overflow-hidden rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <div className="w-full flex items-center justify-center mb-0 mt-6 overflow-hidden">
                    <img src={hiticLogo} alt="Hitec RC" className="max-h-44 w-auto object-contain -mt-1" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                </a>
                <a
                  href="https://openmv.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <div className="w-full flex items-center justify-center mt-6 mb-2">
                    <img src={openmvLogo} alt="OpenMV" className="max-h-24 w-auto object-contain" />
                  </div>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                </a>
                  <a
                    href="https://www.orbbec.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                  >
                    <div className="w-full flex items-center justify-center mb-6">
                      <img src={orbbecLogo} alt="Orbbec" className="max-h-24 w-auto object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                  </a>
                  <a
                    href="https://www.injora.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex flex-col items-end justify-end transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                  >
                    <div className="w-full flex items-center justify-center mb-6">
                      <img src={injoraLogo} alt="INJORA" className="max-h-24 w-auto object-contain" />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30">They gave us hardware too!</span>
                  </a>
              </div>
              <div className="text-center">
                <a
                  href="https://www.fleursdave.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <img src={fleursDaveLogo} alt="Fleurs d'Ave Floral Boutique" className="max-h-40 w-auto object-contain" />
                </a>
                <a
                  href="https://www.royalautobodyofsterling.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <img src={rabLogo} alt="Royal Auto Body of Sterling" className="max-h-28 w-auto object-contain" />
                </a>
                <a
                  href="https://www.bachtorock.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)] overflow-hidden"
                >
                  <img src={bachtorockLogo} alt="Bach to Rock" className="max-h-44 w-auto object-contain scale-[1.12]" />
                </a>
                <a
                  href="https://gorhythms.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block rounded-2xl border-2 border-amber-600/30 bg-white p-6 h-[200px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-600 hover:shadow-[0_0_32px_rgba(217,119,6,0.35)]"
                >
                  <img src={allgoLogo} alt="AllgoRhythm" className="max-h-32 w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */

function CTA() {
  return (
    <section id="join" className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto">
          Questions?<br />Get in touch!
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
          Don't hesitate to reach out if you have any questions about our program, or anything else. Email us at{" "}
          <a href="mailto:contact@atlasautoware.org" className="text-foreground hover:text-brand-glow transition-colors underline underline-offset-4">
            contact@atlasautoware.org
          </a>{" "}
          and make sure to follow our Instagram{" "}
          <a href="https://www.instagram.com/atlasautoware/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand-glow transition-colors underline underline-offset-4">
            @atlasautoware
          </a>{" "}
          for updates.
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="max-w-md">
            <div className="flex items-center gap-3 flex-wrap">
              <LogoMark />
              <span className="text-lg font-semibold tracking-tight">Atlas Autoware</span>
              <span className="text-sm text-muted-foreground">· Built by students</span>
            </div>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              A student-led autonomous vehicle team based in Northern Virginia, composed of students from TJHSST. We design, build, and program our self-driving car from the ground up.
            </p>
          </div>
          <div className="flex flex-col md:items-center gap-4 text-center">
            <div className="text-foreground">
              <div className="text-lg font-semibold tracking-tight">Explore</div>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3 text-base text-muted-foreground">
                <Link to="/home" className="hover:text-foreground transition-colors">Home</Link>
                <span className="text-white/20">·</span>
                <Link to="/the-car" className="hover:text-foreground transition-colors">The Car</Link>
                <span className="text-white/20">·</span>
                <Link to="/donate" className="hover:text-foreground transition-colors">Donate</Link>
              </div>
              <a href="mailto:contact@atlasautoware.org" className="mt-3 block text-base text-muted-foreground hover:text-foreground transition-colors">contact@atlasautoware.org</a>
            </div>
            <div className="flex items-center justify-center gap-5">
              <a href="https://www.instagram.com/atlasautoware/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://github.com/AtlasAutoware" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.36 22.9c.58.1.79-.25.79-.55v-2c-3.2.7-3.88-1.4-3.88-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .98-.32 3.2 1.18a11.1 11.1 0 015.83 0c2.22-1.5 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.06.78 2.15v3.19c0 .3.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              </a>
              <a href="mailto:contact@atlasautoware.org" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="w-32 h-px bg-white/10" />
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Atlas Autoware · 501(c)(3) nonprofit · EIN 88-3747265
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <LogoCloud />
        <About />
        <RecentEvent />
        <WhyWeDoThis />
        <Projects />
        <Team />
        <AwkwardPart />
        <FundraisingProgress />
        <Supporters />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
