import type { ReactNode } from "react";

/** Uppercase red kicker above a heading. Type the words in normal case; CSS uppercases them. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`aa-eyebrow ${className}`}>{children}</p>;
}

/** Eyebrow + gradient section title (+ optional lead), left-aligned or centered. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className={`aa-section-title aa-title-gradient ${eyebrow ? "mt-3" : ""}`}>{title}</h2>
      {lead ? <p className={`aa-lead mt-4 ${center ? "mx-auto" : ""}`}>{lead}</p> : null}
    </div>
  );
}

/** Dot grid with the red glow falling from above. Place inside a `relative` container. */
export function Backdrop({ dim = false }: { dim?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className={`absolute inset-0 aa-dot-grid ${dim ? "opacity-40" : ""}`} />
      <div className="absolute inset-0 aa-red-glow" />
    </div>
  );
}
