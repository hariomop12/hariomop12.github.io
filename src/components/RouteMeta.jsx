import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_META = {
  "/": {
    title: "Hariom Backend Developer",
    description:
      "Hariom Virkhare backend developer building production-grade APIs, queues, and infrastructure.",
  },
  "/about": {
    title: "About Hariom",
    description:
      "Learn about Hariom Virkhare, a backend developer focused on APIs, databases, and infrastructure.",
  },
  "/projects": {
    title: "Projects  Hariom",
    description:
      "A collection of backend projects by Hariom Virkhare: APIs, services, and infrastructure tooling.",
  },
  "/blog": {
    title: "Blog — Hariom",
    description:
      "Blog posts on backend engineering by Hariom Virkhare — Node.js, Go, Docker, Kubernetes, and more.",
  },
  "/contact": {
    title: "Contact  Hariom",
    description:
      "Get in touch with Hariom Virkhare for projects, roles, or backend engineering questions.",
  },
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_META[pathname] || PAGE_META["/"];
    document.title = meta.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [pathname]);

  return null;
}
