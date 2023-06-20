"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="bg-black text-white rounded-md px-4 py-2"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
