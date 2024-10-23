'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Code, User } from "lucide-react"
import Link from "next/link"

export function ProfilePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">CodeLearn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/cursos">
            Cursos
          </Link>
          <Link className="text-sm font-medium underline underline-offset-4" href="/perfil">
            Mi Cuenta
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="@usuario" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold">Perfil de Usuario</h1>
              <p className="text-gray-500 dark:text-gray-400">Gestiona tu cuenta y revisa tu progreso</p>
            </div>
            <div className="mt-8 max-w-3xl mx-auto">
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="info">Información Personal</TabsTrigger>
                  <TabsTrigger value="settings">Configuración</TabsTrigger>
                </TabsList>
                <TabsContent value="info">
                  <Card>
                    <CardHeader>
                      <CardTitle>Información Personal</CardTitle>
                      <CardDescription>Actualiza tu información de perfil aquí.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="tu@email.com" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografía</Label>
                        <Input id="bio" placeholder="Cuéntanos sobre ti" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Guardar Cambios</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Configuración de la Cuenta</CardTitle>
                      <CardDescription>Administra las preferencias de tu cuenta.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="notifications" className="form-checkbox" />
                        <Label htmlFor="notifications">Recibir notificaciones por email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="form-checkbox" />
                        <Label htmlFor="newsletter">Suscribirse al boletín</Label>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Guardar Preferencias</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Mis Cursos</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Introducción a Python</CardTitle>
                    <CardDescription>Progreso del curso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>60%</span>
                      </div>
                      <Progress value={60} className="w-full" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href='/cursos/1'>
                      Continuar curso
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>JavaScript Avanzado</CardTitle>
                    <CardDescription>Progreso del curso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>30%</span>
                      </div>
                      <Progress value={30} className="w-full" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href='/cursos/2'>
                      Continuar curso
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CodeLearn. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}