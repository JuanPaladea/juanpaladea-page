import { useEffect, useState } from "react";

/** The anchor of the section crossing the middle of the viewport. */
export const useActiveSection = (hrefs: string[], enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null);
  const key = hrefs.join();

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const href of key.split(",")) {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [key, enabled]);

  return active;
};
