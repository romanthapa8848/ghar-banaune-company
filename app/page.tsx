import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Home, Users, ArrowRight, Building, MessageSquare, PaintBucket } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Beautiful residential home in Nepal"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center justify-center px-4 py-32 text-center md:py-48">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
            Ghar Banaune Company
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 leading-relaxed">
            Nepal's premier home construction company. We specialize exclusively in building new homes from the ground
            up for families across Nepal.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                View Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white bg-transparent"
              >
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              <Home className="h-4 w-4" />
              Our Core Services
            </div>
            <h2 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive construction and design services tailored to build your dream home.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Building className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Construction</h3>
                <p className="text-muted-foreground">
                  Complete construction services from foundation to finishing with precision, quality materials, and
                  modern techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Building className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Structural Analysis</h3>
                <p className="text-muted-foreground">
                  Professional structural analysis and engineering assessments ensuring all designs meet safety codes
                  and building standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Building className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">2D Design</h3>
                <p className="text-muted-foreground">
                  Detailed 2D architectural drawings and floor plans that clearly communicate your project design to all
                  stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Building className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">3D Design</h3>
                <p className="text-muted-foreground">
                  Advanced 3D modeling and visualization services for realistic renderings and virtual walkthroughs of
                  your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <MessageSquare className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Consultation</h3>
                <p className="text-muted-foreground">
                  Expert consultation and advisory services guiding you through every step from concept to completion of
                  your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <PaintBucket className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Interior Design</h3>
                <p className="text-muted-foreground">
                  Professional interior design services creating beautiful, functional spaces that reflect your style
                  and enhance living.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services">
              <Button
                variant="outline"
                className="gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 bg-transparent"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">Why Families Choose Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We are Nepal's trusted new home construction specialists, dedicated to building homes that families love
              from day one.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-100 p-3">
                <Home className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">New Home Specialists</h3>
              <p className="text-muted-foreground">
                We focus exclusively on building brand new homes, making us true experts in new construction.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-100 p-3">
                <CheckCircle className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Quality Materials</h3>
              <p className="text-muted-foreground">
                We use only the finest materials and skilled craftsmen to build homes that last generations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-100 p-3">
                <Clock className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">On-Time Delivery</h3>
              <p className="text-muted-foreground">
                We understand families are eager to move into their new homes, so we deliver on schedule.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary-100 p-3">
                <Users className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Family-Focused</h3>
              <p className="text-muted-foreground">
                We design and build homes with families in mind, creating spaces for life's precious moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
