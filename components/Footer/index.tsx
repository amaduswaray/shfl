"use client";

import LinkedIn from "@icons/linkedin.svg";
import GitHub from "@icons/github.svg";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    pathname === "/" && (
      <div className="flex flex-row gap-5 justify-center items-center w-full max-w-lg h-20 bottom-0 relative mb-10">
        <a href="https://www.linkedin.com/in/amaduswaray/">
          <LinkedIn />
        </a>
        <a href="https://github.com/amaduswaray">
          <GitHub />
        </a>
      </div>
    )
  );
};

export default Footer;
