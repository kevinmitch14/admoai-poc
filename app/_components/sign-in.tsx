"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <button
      className="bg-black text-white rounded-md px-4 py-2"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
