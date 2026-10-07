import { useEffect, useState } from "react";
import { ArrowUp } from "./Icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-30 inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-lg transition-colors hover:text-fg"
    >
      <ArrowUp />
    </a>
  );
}
