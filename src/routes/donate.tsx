import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/Nav";
import atlasLogo from "@/assets/atlas-logo.png";
import atlasGcLogo from "@/assets/atlas-gc.png";
import sickLogo from "@/assets/Sickimg.png";
import fleursDaveLogo from "@/assets/fleurs-dave.png";
import openmvLogo from "@/assets/openmv.png";
import progressiveRcLogo from "@/assets/progressive-rc.png";
import pixyCamLogo from "@/assets/pixycam.png";
import segmentsAiLogo from "@/assets/segments-ai-white.png";
import allgoLogo from "@/assets/AllgoRhythm_img.png";
import rabLogo from "@/assets/rab.png";
import bachtorockLogo from "@/assets/bachtorock.png";
import hiticLogo from "@/assets/Hitc.png";
import orbbecLogo from "@/assets/orbbec-logo.png";
import injoraLogo from "@/assets/injora-logo.png";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support Atlas Autoware" },
      { name: "description", content: "Support Atlas Autoware — a student-led autonomous vehicle team. Donate or become a sponsor." },Z
      { property: "og:title", content: "Support Atlas Autoware" },
      { property: "og:description", content: "Help keep our autonomous vehicle team running." },
    ],
  }),
  component: DonatePage,
});

function LogoMark() {
  return (
    <div className="relative w-8 h-8 rounded-lg bg-white grid place-items-center overflow-hidden">
      <img src={atlasLogo} alt="Atlas Autoware logo" className="w-7 h-7 object-contain" />
    </div>
  );
}

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("$50");
  const [customAmount, setCustomAmount] = useState("50");

  const raised = 700;
  const goal = 1500;
  const pct = Math.min(100, (raised / goal) * 100);

  const donationOptions = [
    { amount: "$50", label: "gets us a camera" },
    { amount: "$150", label: "replaces parts we broke" },
    { amount: "$500", label: "covers a trip to compete" },
    { amount: "$2,000", label: "goes toward our next LiDAR" },
  ];

  const sponsorCards = [
    { name: "Atlas General Contractors", logo: atlasGcLogo, href: "https://atlasgc.org/" },
    { name: "Segments.ai", logo: segmentsAiLogo, href: "https://segments.ai/" },
    { name: "Fleurs d'Ave", logo: fleursDaveLogo, href: "https://www.fleursdave.com/" },
    { name: "OpenMV", logo: openmvLogo, href: "https://openmv.io/" },
    { name: "Progressive RC", logo: progressiveRcLogo, href: "https://www.progressiverc.com/", badge: "They gave us hardware too!" },
    { name: "Pixy Cam", logo: pixyCamLogo, href: "https://pixycam.com/", badge: "They gave us hardware too!" },
    { name: "Royal Auto Body of Sterling", logo: rabLogo, href: "https://www.royalautobodyofsterling.net/" },
    { name: "Bach to Rock", logo: bachtorockLogo, href: "https://www.bachtorock.com/" },
  { name: "Orbbec", logo: orbbecLogo, href: "https://www.orbbec.com/", badge: "They gave us hardware too!" },
  { name: "INJORA", logo: injoraLogo, href: "https://www.injora.com/", badge: "They gave us hardware too!" },
  ];

  const seasonTiers = [
    {
      amount: "$250",
      meta: "/season",
      title: "Pit Crew",
      benefits: [
        "Name on our supporters wall",
        "Season recap newsletter",
        "Our heartfelt thanks",
      ],
      primary: false,
      buttonLabel: "Choose Pit Crew",
    },
    {
      amount: "$1,000",
      meta: "/season",
      title: "Co-Pilot",
      benefits: [
        "Everything in Pit Crew",
        "Logo on the car & website",
        "Invite to our demo day",
        "Quarterly progress updates",
      ],
      primary: true,
      buttonLabel: "Choose Co-Pilot",
    },
    {
      amount: "$5,000",
      meta: "/season",
      title: "Title Partner",
      benefits: [
        "Everything in Co-Pilot",
        "Premier logo placement",
        "Named on competition livery",
        "A visit with the team & car",
      ],
      primary: false,
      buttonLabel: "Talk to us",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="flex-grow pt-24">
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <div className="inline-flex items-center justify-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-6">
              <span className="inline-block h-px w-8 bg-brand" />
              Support us
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] text-foreground">
              Thanks for even
              <span className="block text-brand-glow">considering this.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-base sm:text-lg leading-8 text-foreground">
              We're a high school team, so we don't have a budget. We have whatever people are
              kind enough to give us. Right now we're trying to raise <span className="text-red-500 font-semibold">$1,500</span> to get to our next
              competition and build a second, better car. No salaries, no overhead, we promise.
            </p>

            <div className="mx-auto mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-muted-foreground shadow-sm shadow-black/10">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-red-500">★</span>
              Registered 501(c)(3) nonprofit · EIN 88-3747265 · tax-deductible
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {donationOptions.map((option) => (
                <div key={option.amount} className="rounded-3xl border border-white/10 bg-surface p-8 text-left shadow-xl shadow-black/10">
                  <div className="text-4xl font-black text-foreground">{option.amount}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{option.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px w-full bg-white/10 mb-8" />
        <section className="mx-auto mb-20 max-w-6xl rounded-[2rem] border border-white/10 bg-surface p-8 shadow-2xl shadow-black/10 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="lg:max-w-2xl">
              <div className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-4">
                <span className="inline-block h-px w-8 bg-brand" />
                Our goal this season
              </div>
              <h2 className="text-4xl font-black tracking-tight text-foreground">
                Help us raise <span className="text-brand">${goal.toLocaleString()}</span>
              </h2>
            </div>
            <div className="text-left lg:text-right">
              <div className="text-4xl md:text-5xl font-semibold text-brand">${raised}</div>
              <div className="text-sm text-muted-foreground mt-1">of ${goal.toLocaleString()} raised so far</div>
            </div>
          </div>

          <div className="mt-8 h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand to-brand-glow shadow-glow transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-surface p-4">
              <div className="h-9 w-9 flex-none rounded-2xl bg-brand/10 text-brand grid place-items-center text-sm font-semibold">✓</div>
              <div>
                <p className="font-semibold text-foreground">Travel to competitions</p>
                <p className="mt-1 text-sm text-muted-foreground">Getting the team and the car to our next RoboRacer round in Boston.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-surface p-4">
              <div className="h-9 w-9 flex-none rounded-2xl bg-brand/10 text-brand grid place-items-center text-sm font-semibold">△</div>
              <div>
                <p className="font-semibold text-foreground">Car #2</p>
                <p className="mt-1 text-sm text-muted-foreground">A second car with better parts, the upgrade we've been planning.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-6xl rounded-[2rem] border border-white/10 bg-surface shadow-2xl shadow-black/10 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-4">
                <span className="inline-block h-px w-8 bg-brand" />
                Pick an amount
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-foreground">Whatever works for you</h2>
              <p className="mt-4 text-sm text-muted-foreground">Select an amount</p>
              <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {['$25', '$50', '$100', '$250', '$500', '$1,000'].map((amount) => {
                  const isActive = selectedAmount === amount;
                  return (
                    <button
                      type="button"
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                      }}
                      className={`rounded-2xl border px-6 py-4 text-lg font-semibold transition ${isActive ? 'border-transparent bg-brand text-white shadow-lg shadow-brand/15' : 'border-white/10 bg-surface text-foreground hover:border-white/20'}`}
                      aria-pressed={isActive}
                    >
                      {amount}
                    </button>
                  );
                })}
              </div>
              <div className={`mt-8 rounded-2xl border p-5 bg-surface ${selectedAmount === 'custom' ? 'ring-2 ring-brand/30' : 'border-white/10'}`}>
                <label className="block text-sm font-medium text-foreground">
                  Or enter a custom amount
                </label>
                <div className="mt-3 flex items-center gap-3 rounded-xl bg-surface-2 px-4 py-3 border border-white/5">
                  <span className={`text-lg font-semibold text-foreground`}>$</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(event) => {
                      setCustomAmount(event.target.value);
                      setSelectedAmount('custom');
                    }}
                    className="w-full border-0 bg-transparent text-right text-2xl font-semibold text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </div>
                <div className="mt-6 rounded-2xl border border-brand/20 bg-brand/10 p-4 text-sm text-foreground">
                  Atlas Autoware is a registered 501(c)(3), but it is not yet registered to solicit charitable contributions in every state. We cannot accept donations from residents of California, Illinois, Mississippi, New Hampshire, New York, North Dakota, Oklahoma, Oregon, or Utah, or from outside the United States. If that includes you, please email <a href="mailto:contact@atlasautoware.org" className="text-brand underline">contact@atlasautoware.org</a> before giving.
                </div>

                <label className="mt-4 flex items-start gap-3 text-sm">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                  <span className="text-foreground">I confirm I am a U.S. resident and not a resident of any state listed above.</span>
                </label>

                <button
                  type="button"
                  className="mt-6 w-full rounded-full bg-brand hover:bg-brand-glow text-white py-4 font-semibold shadow-lg"
                >
                  Give to Atlas Autoware &nbsp; ♥
                </button>

                <p className="mt-3 text-xs text-muted-foreground">
                  You'll complete your donation on PayPal, and PayPal will email you a receipt. Atlas Autoware is a registered 501(c)(3) nonprofit, so your donation is tax-deductible. Our EIN is 88-3747265.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-brand/10 to-brand-glow/10 p-8 shadow-2xl shadow-black/5">
              <h3 className="text-2xl font-bold text-brand">What it actually buys</h3>
              <p className="mt-4 text-sm leading-7 text-foreground">
                No overhead, nobody gets paid. It all goes to the car and getting it places.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex gap-4 rounded-3xl bg-surface/80 p-5 items-start">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-brand text-white">+</div>
                  <div>
                    <p className="font-semibold text-brand">Parts</p>
                    <p className="mt-1 text-sm text-muted-foreground">Sensors, the GPU, and replacements for the stuff we inevitably fry.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl bg-surface/80 p-5 items-start">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-brand text-white">✓</div>
                  <div>
                    <p className="font-semibold text-brand">Getting to competitions</p>
                    <p className="mt-1 text-sm text-muted-foreground">Vans, gas, entry fees. Turns out moving a car across states isn't free.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-3xl bg-surface/80 p-5 items-start">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-brand text-white">■</div>
                  <div>
                    <p className="font-semibold text-brand">Tools</p>
                    <p className="mt-1 text-sm text-muted-foreground">The boring-but-essential stuff: a soldering iron that works, spare cables, batteries.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-surface rounded-xl p-6 shadow-lg">
                <p className="text-sm italic text-slate-700 leading-relaxed">"Last year a donor we'd never met covered our entry fee two days before the deadline. We wouldn't have competed without it. So, yeah, this stuff really matters to us."</p>
                <p className="mt-4 text-sm font-semibold text-brand">the team</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-7xl px-6 py-20 md:py-24 border-t border-white/5">
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
              <a
                href="/donate"
                className="text-brand-glow hover:text-foreground transition-colors underline underline-offset-4"
              >
                Become a sponsor →
              </a>{"\n"}
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
        </section>

        <div className="h-px w-full bg-white/10 mb-8" />
        <section className="mx-auto mb-24 max-w-6xl rounded-[2rem] bg-background p-10 text-center">
          <div className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.35em] text-muted-foreground font-semibold mb-4">
            <span className="inline-block h-px w-8 bg-brand" />
            For companies & families
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-gradient max-w-4xl mx-auto">
            Or sponsor us for the season
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            If you want to do something bigger, here's roughly how we say thanks. Happy to tweak any of it, just talk to us.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {seasonTiers.map((tier) => (
              <div
                key={tier.title}
                className="flex h-full min-h-[380px] flex-col rounded-[2rem] border border-white/10 bg-surface p-8 text-left shadow-xl transition"
              >
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-black text-foreground">{tier.amount}</p>
                    <span className="text-xs font-semibold text-slate-500">{tier.meta}</span>
                  </div>
                  <p className="mt-0.5 text-xl font-semibold text-destructive">{tier.title}</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-brand/10 text-brand text-sm">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {tier.buttonLabel === 'Talk to us' ? (
                    <a
                      href="mailto:contact@atlasautoware.org"
                      className={`flex h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition ${tier.primary ? 'btn-donate' : 'btn-ghost'}`}
                    >
                      {tier.buttonLabel}
                    </a>
                  ) : (
                    <button
                      className={`flex h-12 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition ${tier.primary ? 'btn-donate' : 'btn-ghost'}`}
                    >
                      {tier.buttonLabel}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-white/10 mb-8" />
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-6 h-px bg-brand" />
              Not into donating? no worries
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gradient max-w-3xl mx-auto leading-[1.1]">
              Money isn't the only thing that helps.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              Got old sensors or a spare GPU collecting dust? Know your way around ROS and have a few hours? Work somewhere with a STEM program? Any of those would honestly help us as much as a check.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:contact@atlasautoware.org" className="btn-donate">
                Contact Us
              </a>
              <Link to="/the-car" className="btn-ghost">
                See the car
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
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
          © {new Date().getFullYear()} Atlas Autoware · 501(c)(3) nonprofit · EIN 88-3747265
        </div>
      </div>
    </footer>
  );
}
