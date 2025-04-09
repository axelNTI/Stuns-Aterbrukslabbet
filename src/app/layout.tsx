import { svSE } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  svSE.footerPageLink__terms =
    "Genom att använda denna webbplats godkänner du våra användarvillkor och integritetspolicy.";
  return (
    <ClerkProvider localization={svSE}>
      <html lang="sv">
        <body className="bg-secondary">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
