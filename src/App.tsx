import { Toaster } from "react-hot-toast";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import TechnologiesComponent from "./components/TechnologiesComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import CertificationsComponent from "./components/CertificationsComponent";
import ContactForm from "./components/ContactForm";
import FooterComponent from "./components/FooterComponent";
import ProjectPage from "./components/ProjectPage";
import { ui } from "./data/ui";
import { usePreferences } from "./preferences/context";
import { useRoute } from "./router";

function App() {
  const { theme, t } = usePreferences();
  const route = useRoute();

  return (
    <>
      <a
        href="#main"
        className="sr-only rounded bg-accent px-4 py-2 text-accent-contrast focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        {t(ui.skipToContent)}
      </a>
      <HeaderComponent isHome={route.name === "home"} />
      <main id="main">
        {route.name === "project" ? (
          <ProjectPage id={route.id} />
        ) : (
          <>
            <HeroComponent />
            <AboutMeComponent />
            <ExperienceComponent />
            <TechnologiesComponent />
            <ProjectsComponent />
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
          style:
            theme === "dark"
              ? { background: "#1f2937", color: "#f9fafb" }
              : { background: "#ffffff", color: "#111827", border: "1px solid #e5e7eb" },
        }}
      />
    </>
  );
}

export default App;
