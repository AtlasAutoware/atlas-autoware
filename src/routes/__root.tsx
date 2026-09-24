import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-base px-4">
      <div className="absolute inset-0 aa-dot-grid" aria-hidden="true" />
      <div className="absolute inset-0 aa-red-glow" aria-hidden="true" />
      <div className="relative max-w-md text-center">
        <p className="aa-eyebrow">Off track</p>
        <h1 className="mt-3 text-7xl font-bold aa-gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page Not Found</h2>
        <p className="mt-2 text-sm text-ink-muted">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/home" className="aa-btn aa-btn--primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-base px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">This Page Didn't Load</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="aa-btn aa-btn--primary"
          >
            Try Again
          </button>
          <a href="/home" className="aa-btn aa-btn--outline">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#030305" },
      { title: "Atlas Autoware" },
      {
        name: "description",
        content:
          "Atlas Autoware is a student organization building autonomous driving, robotics, embedded systems, and AI-powered mobility technologies.",
      },
      {
        property: "og:title",
        content: "Atlas Autoware — Building the Future of Autonomous Mobility",
      },
      {
        property: "og:description",
        content:
          "Atlas Autoware is a student organization building autonomous driving, robotics, embedded systems, and AI-powered mobility technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Atlas Autoware — Building the Future of Autonomous Mobility",
      },
      {
        name: "twitter:description",
        content:
          "Atlas Autoware is a student organization building autonomous driving, robotics, embedded systems, and AI-powered mobility technologies.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const THEME_SCRIPT = `try{if(localStorage.getItem("aa-theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Dark is the default; apply a saved light preference before paint so there is no flash. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
