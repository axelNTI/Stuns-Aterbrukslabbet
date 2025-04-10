import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background h-26 fixed bottom-0">
      <div className="mx-auto flex w-full max-w-[1000px] justify-around py-10 text-sm font-semibold md:text-base">
        <Link
          href="/faq"
          className="hover:underline"
        >
          Vanliga frågor
        </Link>
        <Link
          href="/about"
          className="hover:underline"
        >
          Om oss
        </Link>
        <Link
          href="/terms-of-service"
          className="hover:underline"
        >
          Användarvillkor
        </Link>
      </div>
    </footer>
  );
}
