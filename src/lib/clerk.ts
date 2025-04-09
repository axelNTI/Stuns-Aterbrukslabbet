import { auth } from "@clerk/nextjs/server";
import type { Role } from "@/types/globals";

/**
 * Check if the user has any of the specified roles.
 * @param {Role[] | Role} roles - One or more roles to check against the user's role.
 * @returns {Promise<boolean>} - True if the user has any of the specified roles, false otherwise.
 * @description This function checks if the user has any of the specified roles.
 */
export async function isAnyRole(roles: Role[] | Role): Promise<boolean> {
  const { sessionClaims } = await auth();

  if (!sessionClaims) return false;

  const metadata = sessionClaims?.metadata as { role: Role } | undefined;

  if (!metadata) return false;

  if (typeof roles === "string") {
    return metadata.role === roles;
  }

  return roles.includes(metadata.role);
}

/**
 * Get the user ID from the Clerk authentication session.
 * @returns {Promise<string | null>} - The user ID if authenticated, null otherwise.
 * @description This function retrieves the user ID from the Clerk authentication session.
 */
export async function getUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}
