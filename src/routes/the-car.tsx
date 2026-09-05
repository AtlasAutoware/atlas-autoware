import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";

import atlasLogo from "@/assets/atlas-logo.png";
import rcCarPhoto from "@/assets/rc-car.png";

export const Route = createFileRoute("/the-car")({
  head: () => ({
    meta: [
      { title: "Atlas Autoware" },
      {
        name: "description",
        content:
          "Atlas One is the self-driving car built by Atlas Autoware students. LiDAR, cameras, ROS 2, and drive-by-wire — made by high schoolers in Northern Virginia.",
      },
      {
        property: "og:title",
        content: "Atlas Autoware",
      },
      {
        property: "og:description",
        content:
          "Atlas One is the self-driving car built by Atlas Autoware students. LiDAR, cameras, ROS 2, and drive-by-wire.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TheCarPage,
});

function LogoMark() {
  return (
    <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
      <img
        src={atlasLogo}
        alt="Atlas Autoware logo"
        className="w-7 h-7 object-contain"
      />
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

function Hero() {
  return (
    <section className="relative pt-24 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="hidden md:block absolute top-0 right-0 w-[800px] h-[600px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The car</SectionLabel>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-gradient">
            Atlas One
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This is the thing we've been building. It's not pretty up close
            (there's tape involved) but it drives itself around a track, and every
            wire and line of code on it came from a student.
          </p>
        </div>

        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand/20 via-brand-glow/10 to-transparent blur-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-elegant">
            <img
              src={rcCarPhoto}
              alt="Image loading"
              loading="lazy"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                The real thing, not a render
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsOnIt() {
  const items = [
    {
      title: "It fuses the sensors live",
      desc: "LiDAR, cameras, and the IMU get merged into one view of the world.",
    },
    {
      title: "Drive-by-wire",
      desc: "We converted the steering and throttle so code can drive it. This took forever.",
    },
    {
      title: "Built on ROS 2",
      desc: "So we can swap out one part without the whole thing falling over.",
    },
  ];

  const events = [
    {
      date: "Jun '26",
      title: "IEEE Intelligent Vehicles Symposium 2026",
      desc: "We brought the car to IV 2026 in Detroit, our biggest stage yet. A hardware failure knocked us out before the finish, so it goes down as a DNF. It stings, but we learned a lot, and we're regrouping for our next RoboRacer round in Boston.",
      link: "https://ieee-iv.org/2026/",
      linkText: "Event page →",
      result: "DNF, hardware fault",
    },
    {
      date: "2022",
      title: "8th place at IGVC",
      desc: "The Intelligent Ground Vehicle Competition, a serious mostly-college field, and we finished 8th. The car ran its course with nobody touching it and people actually cheered. For a bunch of high schoolers, we'll take it.",
      result: "8th at IGVC 2022",
    },
    {
      date: "Day one",
      title: "Where it started",
      desc: "A few of us, a secondhand chassis, a box of sensors, and zero idea what we were doing. Somehow that turned into a car that holds its own against college teams.",
      result: "The beginning",
    },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-6">
          <SectionLabel>What's on it</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
            A spinning LiDAR, some cameras, a lot of zip ties, and a lot of hope.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            The short version: a LiDAR on top, a couple of cameras up front, an IMU for balance, and a GPU in the back running everything we wrote. Getting all of it to agree on what's happening at the same time was harder than any single piece.
          </p>
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-brand/10 text-brand text-sm">✓</span>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-3xl px-8 pb-8 pt-0">
            <SectionLabel>Where we've taken it</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
              How it's actually gone so far.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're a young team, so this isn't a wall of trophies. It's more like a list of times we showed up, learned a ton, and occasionally did really well. The honest version:
            </p>
            <div className="mt-10 space-y-6">
              {events.map((event, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand" />
                    {i < events.length - 1 && <div className="w-px h-28 bg-brand/30 mt-3" />}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                      {event.date}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {event.desc}
                    </p>
                    {event.result && (
                      <div className="mt-3 inline-block text-xs font-medium px-3 py-1 rounded-full bg-brand/10 border border-brand/30 text-brand-glow">
                        {event.result}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecSheet() {
  const specs = [
    { label: "Primary sensor", value: "360° spinning LiDAR" },
    { label: "Vision", value: "Stereo + wide-angle cameras" },
    { label: "Localization", value: "GPS-RTK + IMU fusion" },
    { label: "Compute", value: "Onboard NVIDIA GPU" },
    { label: "Software", value: "ROS 2 · C++ / Python" },
    { label: "Control", value: "Drive-by-wire actuation" },
    { label: "Perception rate", value: "30+ Hz" },
    { label: "Built by", value: "100% students" },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>Under the hood</SectionLabel>
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
              Spec sheet
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The parts that actually matter. Nothing here is off the shelf magic, its just a lot of integration, tuning, and debugging.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-surface/40 overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 px-6 md:px-8 border-b border-white/5 last:border-b-0"
                >
                  <span className="text-sm uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="font-medium text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TheCode() {
  const steps = [
    {
      n: "01",
      title: "See it",
      desc: "Raw point clouds and camera frames turn into 'okay, there's a lane here, a cone there, open road ahead.' Easy to say, painful to get right.",
    },
    {
      n: "02",
      title: "Guess what moves",
      desc: "If something's moving, we take a guess at where it's going next, so the car isn't only reacting to where things are right now.",
    },
    {
      n: "03",
      title: "Pick a path",
      desc: "It figures out the actual line to drive (staying in bounds, avoiding stuff) and redoes that math constantly as things change.",
    },
    {
      n: "04",
      title: "Drive it",
      desc: "Finally the plan becomes real steering and throttle. Get this part slightly wrong and the car wobbles like it's had too much coffee.",
    },
  ];
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>The code</SectionLabel>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-[1.05]">
            What happens between "
            <span className="text-brand-glow">sees a cone</span>
            " and "
            <span className="text-brand-glow">doesn't hit it</span>
            "
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl p-6 md:p-8 bg-surface/60 border border-white/8 hover:border-brand/40 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-xl font-semibold text-foreground">
                  {s.n} -
                </span>
                <h3 className="text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="w-6 h-px bg-brand" />
          If you're still reading
        </div>
        <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto leading-[1.1]">
          Want to help the next version be better?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Every upgrade (a sharper sensor, a faster GPU, a tank of gas to get to the next event) comes out of whatever we can scrape together. A little help goes a long way for a team our size.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
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
          <Link to="/home" className="btn-ghost">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}

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
          © {new Date().getFullYear()} Atlas Autoware · 501(c)(3) nonprofit · EIN 88-3747265 - Not affiliated with, endorsed by, or sponsored by the Autoware Foundation
        </div>
      </div>
    </footer>
  );
}

function TheCarPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <WhatsOnIt />
        <SpecSheet />
        <TheCode />
        <SupportCTA />
      </main>
      <Footer />
    </div>
  );
}
