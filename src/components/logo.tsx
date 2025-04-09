import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.webp";
import { prompt } from "@/assets/fonts/fonts";

export default function Logo() {
  return (
    <Link href="/" className="flex md:gap-x-2 gap-x-1 items-center">
      <Image src={logo} alt="Website logo" width={50} height={50} />
      <div className={cn("md:block hidden text-2xl", prompt.className)}>
        Återbrukslabbet
      </div>
    </Link>
  );
}
