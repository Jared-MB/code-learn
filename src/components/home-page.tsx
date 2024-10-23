import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Code, Database, Globe, Search, Server, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

const navigate = async (payload: FormData) => {
  "use server"
  const search = payload.get('search')
  redirect(`/cursos?search=${search}`)
}

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">CodeLearn</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/cursos">
            Cursos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/perfil">
            Mi Cuenta
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Aprende programación en línea
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre una amplia variedad de cursos de programación y mejora tus habilidades técnicas.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" action={navigate}>
                  <Input className="max-w-lg flex-1" placeholder="Buscar cursos" name='search' type="text" />
                  <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Cursos Destacados</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="Python course"
                      width={200}
                      height={150}
                      className="aspect-[200/150] object-cover rounded-t-lg"
                    />
                  </div>
                  <CardTitle>Introducción a Python</CardTitle>
                  <CardDescription>Aprende los fundamentos de Python</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge>Principiante</Badge>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href='/cursos/1'>
                    
Comenzar curso                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="JavaScript course"
                      width={200}
                      height={150}
                      className="aspect-[200/150] object-cover rounded-t-lg"
                    />
                  </div>
                  <CardTitle>JavaScript Avanzado</CardTitle>
                  <CardDescription>Domina las características avanzadas de JS</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge>Intermedio</Badge>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href='/cursos/1'>
                    
Comenzar curso                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative w-full h-40 mb-4">
                    <Image
                      src="/placeholder.svg"
                      alt="React course"
                      width={200}
                      height={150}
                      className="aspect-[200/150] object-cover rounded-t-lg"
                    />
                  </div>
                  <CardTitle>Desarrollo Web con React</CardTitle>
                  <CardDescription>Crea aplicaciones web modernas con React</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge>Avanzado</Badge>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href='/cursos/1'>
                    
Comenzar curso                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Categorías de Cursos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Globe className="h-8 w-8" />
                  <CardTitle>Desarrollo Web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>HTML, CSS, JavaScript y más</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Server className="h-8 w-8" />
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Node.js, Python, Ruby y más</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Database className="h-8 w-8" />
                  <CardTitle>Bases de Datos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>SQL, MongoDB, PostgreSQL y más</p>
                </CardContent>
              </Card>
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