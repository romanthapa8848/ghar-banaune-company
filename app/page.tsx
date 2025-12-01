import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Home, Users, ArrowRight, Building, PaintBucket } from "lucide-react"

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
              New Home Construction
            </div>
            <h2 className="mb-2 text-3xl font-semibold tracking-tight sm:text-4xl">What We Build</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We focus exclusively on building brand new homes from foundation to finish, creating dream homes for
              families across Nepal.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Home className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Custom Home Construction</h3>
                <p className="text-muted-foreground">
                  Build your dream home from scratch with our custom home construction services, designed specifically
                  for your family's needs and lifestyle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <Building className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Architectural Design</h3>
                <p className="text-muted-foreground">
                  Our expert architects create beautiful, functional home designs that maximize space and complement
                  Nepal's landscape and climate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <PaintBucket className="mb-4 h-12 w-12 text-primary-500" />
                <h3 className="mb-2 text-xl font-semibold">Interior Finishing</h3>
                <p className="text-muted-foreground">
                  Complete interior finishing services to make your new home move-in ready, from flooring and paint to
                  fixtures and final details.
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

      {/* CTA Section */}
      <section className="bg-primary-500 py-16 text-white md:py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to Build Your New Home?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Let's create the perfect new home for your family. Contact us today for a free consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white bg-transparent"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
