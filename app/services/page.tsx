import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Home, FileText, Cable as Cube, ArrowRight, Hammer, Users, Award } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Construction Services</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Complete residential construction services from design to completion - building dreams into reality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/foundation-structure.jpg" alt="New Home Construction" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">New Home Construction</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Complete new home construction from foundation to finishing. We build custom homes tailored to your
                  family's needs, using quality materials and modern construction techniques for lasting durability.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/wall-construction.jpg" alt="Home Renovations" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Home Renovations</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Transform your existing home with our comprehensive renovation services. From room additions and
                  kitchen remodeling to complete home makeovers, we bring new life to your living space.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Naksa+Design"
                  alt="Naksa Design and Pass"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Naksa Design and Pass</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Professional architectural design and municipal approval services. We create detailed building plans
                  (naksa) and handle all government approvals and permits required for your construction project.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=3D+Model+Design"
                  alt="3D Model Design"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Cube className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">3D Model Design</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Visualize your dream home before construction begins with our advanced 3D modeling services. Get
                  realistic renderings and virtual walkthroughs to perfect your design and make informed decisions.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Complete Service Process</h2>
            <p className="mb-12 text-muted-foreground">
              From initial design to final handover - we handle every aspect of your construction project
            </p>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-200" />

              <div className="relative grid gap-12">
                {[
                  {
                    step: 1,
                    title: "Design & Planning",
                    description: "3D modeling, naksa design, and architectural planning tailored to your vision.",
                  },
                  {
                    step: 2,
                    title: "Permits & Approvals",
                    description: "Complete handling of municipal approvals and construction permits.",
                  },
                  {
                    step: 3,
                    title: "Foundation & Structure",
                    description: "Site preparation, foundation work, and structural construction.",
                  },
                  {
                    step: 4,
                    title: "Construction Phase",
                    description: "Complete construction including walls, roofing, electrical, and plumbing work.",
                  },
                  {
                    step: 5,
                    title: "Finishing Work",
                    description: "Interior finishing, flooring, painting, and final installations.",
                  },
                  {
                    step: 6,
                    title: "Quality Check & Handover",
                    description: "Final quality inspection and project handover with documentation.",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative grid gap-2 pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Why Choose Our Services</h2>
            <p className="mb-12 text-muted-foreground">
              Complete construction solutions with professional expertise and quality assurance
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Complete Solutions</h3>
                  <p className="text-muted-foreground">
                    From design to construction, we handle every aspect of your project under one roof for seamless
                    execution.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Legal Compliance</h3>
                  <p className="text-muted-foreground">
                    We ensure all designs meet building codes and handle municipal approvals for hassle-free
                    construction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Cube className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Modern Technology</h3>
                  <p className="text-muted-foreground">
                    Advanced 3D modeling and visualization help you see your project before construction begins.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Hammer className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Quality Construction</h3>
                  <p className="text-muted-foreground">
                    Expert craftsmanship using premium materials ensures your project stands the test of time.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our team of civil engineers and skilled craftsmen bring years of experience to every project.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Successfully completed numerous residential projects across Nepal since 2025.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
