'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Code, PlayCircle, CheckCircle, BookOpen } from "lucide-react"
import Link from "next/link"

export function CoursePlayerComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/perfil">
            Mi Cuenta
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex">
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Introducción a Python</h1>
          <div className="aspect-video bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
            <PlayCircle className="h-16 w-16 text-gray-400" />
          </div>
          <Tabs defaultValue="descripcion">
            <TabsList>
              <TabsTrigger value="descripcion">Descripción</TabsTrigger>
              <TabsTrigger value="recursos">Recursos</TabsTrigger>
              <TabsTrigger value="discusion">Discusión</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre este curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Este curso te introducirá a los conceptos fundamentales de Python, uno de los lenguajes de
                    programación más populares y versátiles. Aprenderás desde los conceptos básicos hasta técnicas más
                    avanzadas, permitiéndote crear tus propios programas y scripts.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recursos">
              <Card>
                <CardHeader>
                  <CardTitle>Materiales del curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Guía de instalación de Python</li>
                    <li>Cheatsheet de sintaxis básica</li>
                    <li>Ejercicios prácticos (PDF)</li>
                    <li>Código fuente de ejemplos</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="discusion">
              <Card>
                <CardHeader>
                  <CardTitle>Foro de discusión</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>No hay mensajes en el foro de discusión aún. ¡Sé el primero en preguntar o compartir algo!</p>
                </CardContent>
                <CardFooter>
                  <Button>Nuevo tema</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-80 border-l p-4">
          <h2 className="text-xl font-semibold mb-4">Contenido del curso</h2>
          <Progress value={33} className="mb-4" />
          <p className="text-sm text-gray-500 mb-4">4 de 12 lecciones completadas</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">1. Introducción a Python</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">2. Instalación y configuración</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">3. Variables y tipos de datos</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">4. Operadores y expresiones</span>
            </li>
            <li className="flex items-center space-x-2">
              <PlayCircle className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">5. Estructuras de control</span>
            </li>
            <li className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span className="text-sm">6. Funciones</span>
            </li>
            <li className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-gray-400" />
              <span className="text-sm">7. Listas y tuplas</span>
            </li>
          </ul>
        </div>
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