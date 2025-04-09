import { ClerkProvider } from "@clerk/nextjs";
import { svSE } from "@clerk/localizations";
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
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
