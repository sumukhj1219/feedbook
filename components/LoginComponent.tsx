import React from 'react'
import { auth, signIn } from "@/auth"
import { Button } from "@/components/ui/button"

const LoginComponent = async() => {
  const session = await auth()

  return (
    <div className='mt-12'>
        <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/" })
      }}
    >
      <Button type="submit">{session ? (session?.user?.name) : ("Signin with Github")}</Button>
    </form>
    </div>
  )
}

export default LoginComponent
