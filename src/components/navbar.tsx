import { BookUser, LockKeyhole, PlusSquare } from "lucide-react";
import Link from "next/link";

import { checkRole } from "@/utils/check-role";
import { cn } from "@/lib/utils";
import { getUserId } from "@/utils/get-user-id";
import Logo from "@/components/logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { source_sans_3 } from "@/app/fonts";

export default async function Navbar() {
  const userId = await getUserId();
  return (
    <header className="top-0 flex h-20 w-full bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-4">
        <Logo />
        <section className="flex h-full w-auto items-center space-x-3 md:space-x-4">
          <SignedOut>
            <Link
              className={cn("text-xl font-semibold", source_sans_3.className)}
              href={"/sign-in"}>
              Logga in
            </Link>
          </SignedOut>
          <SignedIn>
            {((await checkRole("admin")) || (await checkRole("moderator"))) && (
              <Link href="/admin">
                <LockKeyhole
                  strokeWidth={1}
                  width={30}
                  height={30}
                  className="block md:hidden"
                />
                <p
                  className={cn(
                    "hidden text-xl font-medium hover:opacity-80 md:block",
                    source_sans_3.className
                  )}>
                  Adminpanel
                </p>
              </Link>
            )}
            <Link href={`/profile/${userId}`}>
              <BookUser
                strokeWidth={1}
                width={30}
                height={30}
                className="block md:hidden"
              />
              <p
                className={cn(
                  "hidden text-xl font-medium hover:opacity-80 md:block",
                  source_sans_3.className
                )}>
                Mina annonser
              </p>
            </Link>
            <Link href="/create-post">
              <PlusSquare
                strokeWidth={1}
                width={30}
                height={30}
                className="block md:hidden"
              />
              <p
                className={cn(
                  "bg-sky-600 hidden rounded-md px-4 py-[6px] text-xl font-medium text-white hover:opacity-85 md:block",
                  source_sans_3.className
                )}>
                Skapa annons
              </p>
            </Link>
            <div className="hidden h-2/5 w-[1px] bg-black bg-opacity-70 md:block md:h-1/2" />
            <div className="hidden md:block">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      height: 35,
                      width: 35,
                    },
                  },
                }}
              />
            </div>
            <div className="block md:hidden">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: {
                      height: 30,
                      width: 30,
                    },
                  },
                }}
              />
            </div>
          </SignedIn>
        </section>
      </div>
    </header>
  );
}
