import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Backdrop, Eyebrow, SectionHeader } from "@/components/Section";

import carPhoto from "@/assets/atlas-car-lab.webp";

export const Route = createFileRoute("/the-car")({
  head: () => ({
    meta: [
      { title: "The Car · Atlas Autoware" },
      {
        name: "description",
        content:
          "Atlas One is the self-driving car built by Atlas Autoware students. LiDAR, cameras, ROS 2, and drive-by-wire — made by high schoolers in Northern Virginia.",
      },
      { property: "og:title", content: "The Car · Atlas Autoware" },
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

function Hero() {
  return (
    <section className="relative isolate pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <Backdrop />
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center aa-slide-up">
          <Eyebrow>The car</Eyebrow>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold tracking-tight leading-none aa-title-gradient">
            Atlas One
          </h1>
          <p className="mt-6 aa-lead md:text-xl mx-auto">
            This is the thing we've been building. It's not pretty up close (there's tape involved)
            but it drives itself around a track, and every wire and line of code on it came from a
            student.
          </p>
        </div>

        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="aa-glow-orb -left-10 -top-10" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden border border-line shadow-[0_24px_80px_-24px_rgba(220,38,38,0.35)]">
            <img
              src={carPhoto}
              alt="Our car in the lab, with the OAK-D camera and LiDAR on top"
              width={1204}
              height={677}
              className="w-full h-auto"
            />
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
    <section className="aa-band py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="What's on it"
            title="A spinning LiDAR, some cameras, a lot of zip ties, and a lot of hope."
          />
          <p className="mt-6 text-ink-muted leading-relaxed">
            The short version: a LiDAR on top, a couple of cameras up front, an IMU for balance, and
            a GPU in the back running everything we wrote. Getting all of it to agree on what's
            happening at the same time was harder than any single piece.
          </p>
          <ul className="mt-8 space-y-5">
            {items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="aa-icon-tile aa-icon-tile--sm mt-0.5">
                  <Check aria-hidden="true" />
                </span>
                <div>
                  <div className="font-semibold text-ink">{item.title}</div>
                  <p className="mt-1 text-sm text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <SectionHeader eyebrow="Where we've taken it" title="How it's actually gone so far." />
          <p className="mt-4 text-ink-muted leading-relaxed">
            We're a young team, so this isn't a wall of trophies. It's more like a list of times we
            showed up, learned a ton, and occasionally did really well. The honest version:
          </p>
          <ol className="mt-10 space-y-6">
            {events.map((event, i) => (
              <li key={i} className="flex gap-5">
                <div className="flex flex-col items-center pt-1.5">
                  <div className="w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
                  {i < events.length - 1 && (
                    <div className="w-px flex-1 min-h-24 bg-gradient-to-b from-brand/50 to-transparent mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="aa-eyebrow !text-ink-subtle">{event.date}</div>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-ink">{event.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{event.desc}</p>
                  <p className="mt-3 text-sm font-semibold text-brand-text">{event.result}</p>
                </div>
              </li>
            ))}
          </ol>
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
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Under the hood" title="Spec Sheet" />
            <p className="mt-4 text-ink-muted leading-relaxed">
              The parts that actually matter. Nothing here is off-the-shelf magic, it's just a lot
              of integration, tuning, and debugging.
            </p>
          </div>
          <div className="lg:col-span-7">
            <dl className="aa-card overflow-hidden">
              {specs.map((s) => (
                <div key={s.label} className="aa-spec-row">
                  <dt className="aa-eyebrow !text-ink-subtle">{s.label}</dt>
                  <dd className="font-medium text-ink text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
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
    <section className="aa-band py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          center
          className="max-w-3xl"
          eyebrow="The code"
          title={<>What happens between "sees a cone" and "doesn't hit it"</>}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="aa-card aa-card--hover p-6 md:p-8">
              <div className="aa-display text-3xl font-bold aa-gradient-text">{s.n}</div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-3 aa-card__body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section className="relative isolate py-20 md:py-28 overflow-hidden">
      <Backdrop dim />
      <div className="mx-auto max-w-7xl px-6 text-center">
        <SectionHeader
          center
          className="max-w-3xl"
          eyebrow="If you're still reading"
          title="Want to Help the Next Version Be Better?"
          lead="Every upgrade (a sharper sensor, a faster GPU, a tank of gas to get to the next event) comes out of whatever we can scrape together. A little help goes a long way for a team our size."
        />
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link to="/donate" className="aa-btn aa-btn--primary">
            Chip In <ArrowRight aria-hidden="true" />
          </Link>
          <Link to="/home" className="aa-btn aa-btn--outline">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}

function TheCarPage() {
  return (
    <div className="min-h-screen bg-base text-ink">
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
