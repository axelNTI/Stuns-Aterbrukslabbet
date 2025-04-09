import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/terms-of-service",
  "/faq",
  "/about",
  "/api/webhooks(.*)",
  "/api/send-mail-to-expiring-posts(.*)",
  "/delete(.*)",
  "/extend(.*)",
  "/sign-in",
  "/sign-up",
  /^\/sitemap(-\d+)?\.xml$/,
  "/robots.txt",
  "/favicons/favicon.ico",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
