import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-green-600 hidden lg:flex lg:flex-col lg:gap-y-2 items-center justify-center">
        <Image src="/logo.svg" alt="Logo" height={100} width={100} />
        <h1 className="font-semibold text-white text-2xl pb-2">Steady</h1>
        <span className="font-semibold text-white/80 text-md">
          Stay ahead of your finances. Manage your money with ease
        </span>
        <span className="font-semibold text-white/80 text-md">
          and watch your savings grow.
        </span>
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
}
