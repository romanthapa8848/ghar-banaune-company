import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, MapPin, Home } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Construction Projects</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our portfolio of completed residential home construction projects across Nepal
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-4">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="modern">Modern Homes</TabsTrigger>
              <TabsTrigger value="traditional">Traditional</TabsTrigger>
              <TabsTrigger value="luxury">Luxury Homes</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/ceholder-svg-height-400-width-600-text-constructio.png?height=400&width=600&text=Construction Project ${item}`}
                        alt={`Construction Project ${item}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">Family Home Construction</h3>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Butwal, Nepal</span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Completed 2019</span>
                      </div>
                      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Home className="h-4 w-4" />
                        <span>3 Bedrooms • 2 Bathrooms • 1,800 sq ft</span>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Complete home construction from foundation to finishing, featuring modern design with
                        traditional Nepali elements.
                      </p>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="modern" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/ceholder-svg-height-400-width-600-text-modern-home.png?height=400&width=600&text=Modern Home ${item}`}
                        alt={`Modern Home ${item}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">Modern Family Home</h3>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Butwal, Nepal</span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Completed 2019</span>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Contemporary design with clean lines, large windows, and modern amenities for comfortable family
                        living.
                      </p>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="traditional" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2].map((item) => (
                  <Card key={item} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/ceholder-svg-height-400-width-600-text-traditional.png?height=400&width=600&text=Traditional Home ${item}`}
                        alt={`Traditional Home ${item}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">Traditional Nepali Home</h3>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Butwal, Nepal</span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Completed 2019</span>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Traditional architecture preserving cultural elements while incorporating modern comfort and
                        functionality.
                      </p>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1].map((item) => (
                  <Card key={item} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={`/ceholder-svg-height-400-width-600-text-luxury-home.png?height=400&width=600&text=Luxury Home ${item}`}
                        alt={`Luxury Home ${item}`}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">Luxury Family Villa</h3>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Butwal, Nepal</span>
                      </div>
                      <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Completed 2019</span>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Premium construction with high-end finishes, spacious layouts, and luxury amenities for elegant
                        family living.
                      </p>
                      <Button variant="outline" className="w-full gap-2 bg-transparent">
                        View Project Details
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Construction Process</h2>
            <p className="mb-12 text-muted-foreground">
              How we deliver successful construction projects from planning to completion
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-500">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold">Planning & Design</h3>
                <p className="text-muted-foreground">
                  Detailed project planning, architectural design, and construction documentation.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-500">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold">Foundation Work</h3>
                <p className="text-muted-foreground">
                  Site preparation, excavation, and solid foundation construction for long-lasting structures.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-500">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold">Construction</h3>
                <p className="text-muted-foreground">
                  Complete construction including walls, roofing, electrical, plumbing, and structural work.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-500">
                  4
                </div>
                <h3 className="mb-2 text-lg font-semibold">Finishing & Handover</h3>
                <p className="text-muted-foreground">
                  Final finishing work, quality inspection, and project handover with documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Ready to Start Your Construction Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Contact Ghar Banaune Company today for professional construction services and quality workmanship.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500 bg-transparent"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
