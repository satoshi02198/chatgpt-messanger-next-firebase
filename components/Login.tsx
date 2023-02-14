"use client";

import chatgptLogo from "../public/chatgptLogo.png";
import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center">
      <Image src={chatgptLogo} width={200} height={200} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="mt-6 font-bold text-3xl animate-pulse"
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
