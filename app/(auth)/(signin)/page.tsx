import { SignIn } from "@/modules/sign-in/components/sign-in";

export default function page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="h-full w-full flex items-center sm:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
