import { useEffect } from "react";

const LOVABLE_NODE_SELECTORS = [
  "[data-lovable]",
  "[data-lovable-badge]",
  "[data-lovable-widget]",
  "#lovable-badge",
  "#lovable-watermark",
  ".lovable-badge",
  ".lovable-watermark",
  'iframe[src*="lovable.dev"]',
  'iframe[src*="lovable.ai"]',
  'a[href*="lovable.dev"]',
  'a[href*="lovable.ai"]',
].join(",");

/** Removes Lovable editor/promo nodes injected at runtime (e.g. preview iframe). */
function stripLovableNodes(root: ParentNode = document.body) {
  if (typeof document === "undefined") return;
  try {
    root.querySelectorAll(LOVABLE_NODE_SELECTORS).forEach((node) => node.remove());
  } catch {
    /* ignore invalid selector environments */
  }
}

export function LovableGuard() {
  useEffect(() => {
    if (import.meta.env.PROD) return;

    stripLovableNodes(document.documentElement);

    const observer = new MutationObserver(() => {
      stripLovableNodes(document.documentElement);
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
