import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPostBySlug } from "../lib/blog";

const PAGE_META = {
  "/": {
    title: "Hariom Virkhare — Backend Developer",
    description:
      "Hariom Virkhare backend developer building production-grade APIs, queues, and infrastructure.",
  },
  "/about": {
    title: "About — Hariom Virkhare",
    description:
      "Learn about Hariom Virkhare, a backend developer focused on APIs, databases, and infrastructure.",
  },
  "/projects": {
    title: "Projects — Hariom Virkhare",
    description:
      "A collection of backend projects by Hariom Virkhare: APIs, services, and infrastructure tooling.",
  },
  "/blog": {
    title: "Blog — Hariom Virkhare",
    description:
      "Blog posts on backend engineering by Hariom Virkhare — Node.js, Go, Docker, Kubernetes, and more.",
  },
  "/contact": {
    title: "Contact — Hariom Virkhare",
    description:
      "Get in touch with Hariom Virkhare for projects, roles, or backend engineering questions.",
  },
};

function setMeta(title, description) {
  document.title = title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);

  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", title);

  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute("content", description);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/blog/")) {
      const slug = pathname.replace("/blog/", "");
      const post = getPostBySlug(slug);
      if (post) {
        const title = `${post.title} — Hariom Virkhare`;
        const description = post.description || `${post.title} by Hariom Virkhare`;
        setMeta(title, description);
        return;
      }
    }

    const meta = PAGE_META[pathname] || PAGE_META["/"];
    setMeta(meta.title, meta.description);
  }, [pathname]);

  return null;
}
