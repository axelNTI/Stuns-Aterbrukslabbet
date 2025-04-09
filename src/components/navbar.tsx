import { BookUser, LockKeyhole, PlusSquare } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

import { source_sans_3 } from "@/assets/fonts/fonts";
import Logo from "@/components/logo";
import { getUserId, isAnyRole } from "@/lib/clerk";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Navbar() {
  const userId = await getUserId();
  return (
    <header className="top-0 flex h-20 w-full bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-4">
        <Logo />
        <section className="flex h-full w-auto items-center gap-x-3 md:gap-x-4">
          <SignedOut>
            <Link
              className={cn("text-xl font-semibold", source_sans_3.className)}
              href={"/sign-in"}
            >
              Logga in
            </Link>
          </SignedOut>
          <SignedIn>
            {(await isAnyRole(["admin", "moderator"])) && (
              <Link href="/admin">
                <LockKeyhole
                  strokeWidth={1}
                  width={30}
                  height={30}
                  className="block md:hidden"
                />
                <p className={cn("hidden text-xl font-medium hover:opacity-80 md:block", source_sans_3.className)}>
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
              <p className={cn("hidden text-xl font-medium hover:opacity-80 md:block", source_sans_3.className)}>
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
                  "hidden rounded-md bg-sky-600 px-4 py-[6px] text-xl font-medium text-white hover:opacity-85 md:block",
                  source_sans_3.className,
                )}
              >
                Skapa annons
              </p>
            </Link>
            <Separator
              orientation="vertical"
              decorative={true}
              className="bg-black !h-1/2"
            />
            <div className="hidden md:block size-[35px]">
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
            <div className="block md:hidden size-[30px]">
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
