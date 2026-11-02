import { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import PipelineComponent from "./components/PipelineComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import TechnologiesComponent from "./components/TechnologiesComponent";
import CertificationsComponent from "./components/CertificationsComponent";
import ContactForm from "./components/ContactForm";
import FooterComponent from "./components/FooterComponent";
import ProjectPage from "./components/ProjectPage";
import { ui } from "./data/ui";
import { usePreferences } from "./preferences/context";
import { useRoute } from "./router";

function App() {
  const { t } = usePreferences();
  const route = useRoute();
  const mainRef = useRef<HTMLElement>(null);
  const routeKey = route.name === "project" ? route.id : "home";
  const previousRoute = useRef(routeKey);

  // A route swap replaces the page under the keyboard and the screen reader,
  // so focus moves to the new content instead of being lost with the old one.
  useEffect(() => {
    if (previousRoute.current === routeKey) return;
    previousRoute.current = routeKey;
    mainRef.current?.focus({ preventScroll: true });
  }, [routeKey]);

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded bg-accent px-4 py-2 text-accent-contrast focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        {t(ui.skipToContent)}
      </a>
      <HeaderComponent isHome={route.name === "home"} />
      <main id="main" ref={mainRef} tabIndex={-1}>
        {route.name === "project" ? (
          <ProjectPage id={route.id} />
        ) : (
          <>
            <HeroComponent />
            <ProjectsComponent />
            <AboutMeComponent />
            <ExperienceComponent />
            <PipelineComponent />
            <TechnologiesComponent />
            <CertificationsComponent />
            <ContactForm />
          </>
        )}
      </main>
      <FooterComponent />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "rgb(var(--color-elevated))",
            color: "rgb(var(--color-heading))",
            border: "1px solid rgb(var(--color-line))",
          },
        }}
      />
    </>
  );
}

export default App;
