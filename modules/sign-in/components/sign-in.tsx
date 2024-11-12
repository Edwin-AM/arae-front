"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signinSchema } from "@/schemas";
import { Button } from "@/modules/ui/button";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent,
  CardFooter
} from "@/modules/ui/card";
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormDescription, 
  FormMessage 
} from "@/modules/ui/form";
import { Input } from "@/modules/ui/input";
import { toast } from "sonner";

export function SignIn() {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "usuario",
      password: "12345678"
    },
  })

  function onSubmit(values: z.infer<typeof signinSchema>) {
    toast("Funcionalidad en proceso", {
      description: "Por ahora no se puede iniciar sesión"
    })
    console.log("Falta implementar el onSubmit")
  }

  return (
    <Card className="w-full max-w-sm mx-auto p-4 sm:p-6">
      <CardHeader className="space-y-2 sm:space-y-1">
        <CardTitle className="text-2xl">Bienvenido</CardTitle>
        <CardDescription>Para iniciar sesión ingrese sus credenciales</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CardContent className="grid gap-3 sm:gap-4">
            <FormField
              control={form.control}
              name="username"
              render={({field}) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="usuario" {...field} />
                </FormControl>
                <FormDescription>Ingrese su nombre de usuario o email</FormDescription>
                <FormMessage />
              </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
              )}
              />
          </CardContent>
          <CardFooter>
            <Button type="submit">Enviar</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
