import Image from "next/image";
import Link from "next/link";

import { prompt } from "@/assets/fonts/fonts";
import logo from "@/assets/images/logo.webp";
import { cn } from "@/lib/utils";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-1 md:gap-x-2"
    >
      <Image
        src={logo}
        alt="Website logo"
        width={50}
        height={50}
      />
      <div className={cn("hidden text-2xl md:block", prompt.className)}>Återbrukslabbet</div>
    </Link>
  );
}
