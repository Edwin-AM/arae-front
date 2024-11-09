import { SignIn } from "@/modules/sign-in/components/sign-in"

export default function page() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-8">
      <div className="lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignIn />
        </div>
      </div>
    </main>
  )
}
