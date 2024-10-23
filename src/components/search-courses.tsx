'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Code, Search, BookOpen, Star } from "lucide-react"
import Link from "next/link"

export function SearchCoursesComponent() {
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
          <Link className="text-sm font-medium underline underline-offset-4" href="/cursos">
            Cursos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/perfil">
            Mi Cuenta
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold">Buscar Cursos</h1>
          <div className="flex space-x-4">
            <Input className="flex-grow" placeholder="Buscar cursos..." type="search" />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="web">Desarrollo Web</SelectItem>
                <SelectItem value="mobile">Desarrollo Móvil</SelectItem>
                <SelectItem value="data">Ciencia de Datos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Nivel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los niveles</SelectItem>
                <SelectItem value="beginner">Principiante</SelectItem>
                <SelectItem value="intermediate">Intermedio</SelectItem>
                <SelectItem value="advanced">Avanzado</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Duración" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Cualquier duración</SelectItem>
                <SelectItem value="short">Corto (&lt; 3 horas)</SelectItem>
                <SelectItem value="medium">Medio (3-10 horas)</SelectItem>
                <SelectItem value="long">Largo (&gt; 10 horas)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Introducción a Python</CardTitle>
                <CardDescription>Aprende los fundamentos de Python desde cero</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    10 lecciones
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    4.5 (120 reseñas)
                  </span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Badge>Principiante</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href='/cursos/1'>
                  Ver Curso
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Avanzado</CardTitle>
                <CardDescription>Domina las características avanzadas de JavaScript</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    15 lecciones
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    4.8 (200 reseñas)
                  </span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Badge>Avanzado</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href='/cursos/1'>
                  Ver Curso
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Desarrollo Web con React</CardTitle>
                <CardDescription>Crea aplicaciones web modernas con React</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    20 lecciones
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    4.7 (150 reseñas)
                  </span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Badge>Intermedio</Badge>
                  <Badge variant="secondary">React</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href='/cursos/1'>
                  Ver Curso
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Básico</CardTitle>
                <CardDescription>Introducción a los conceptos de Machine Learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    12 lecciones
                  </span>
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    4.6 (180 reseñas)
                  </span>
                </div>
                <div className="mt-4 flex space-x-2">
                  <Badge>Principiante</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href='/cursos/1'>
                  Ver Curso
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
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