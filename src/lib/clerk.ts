import { auth } from "@clerk/nextjs/server";

interface isAnyRoleProps {
  roles: string[] | string;
}

export async function isAnyRole({ roles }: isAnyRoleProps) {
  const { sessionClaims } = await auth();
  return roles.includes(sessionClaims?.role as string);
}
