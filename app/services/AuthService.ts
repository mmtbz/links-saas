import { getSession } from "next-auth/react";

async function mySession() {
  const session = await getSession();
  return session?.user;
}

export { mySession };
