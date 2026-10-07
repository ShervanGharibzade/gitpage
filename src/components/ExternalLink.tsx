import type { AnchorHTMLAttributes } from "react";
import { ArrowUpRight } from "./Icons";

/** External link: opens in a new tab, shows an indicator, and announces it to screen readers. */
export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <ArrowUpRight />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
