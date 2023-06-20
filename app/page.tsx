import SignIn from "./_components/sign-in";
import { getAuthSession } from "@/lib/auth";
import SignOut from "./_components/sing-out";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <main className="p-4">
      {session ? (
        <>
          <p>
            Permissions level: <b>{session.user.role}</b>
          </p>
          <p>
            Company: <b>{session.user.tenant}</b>
          </p>
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </main>
  );
}
