import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Target, Users, Shield } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">About Ghar Banaune Company</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Nepal's premier residential home construction company, dedicated to building quality homes since 2025
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 items-center">
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Construction Excellence"
                alt="Construction Excellence"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Company Story</h2>
              <p className="mb-4 text-muted-foreground">
                Established in 2025, Ghar Banaune Company emerged with a clear vision: to revolutionize residential home
                construction in Nepal. Based in Butwal, we specialize exclusively in building new homes from the ground
                up, focusing on quality craftsmanship and customer satisfaction.
              </p>
              <p className="text-muted-foreground">
                Our company operates with a commitment to transparency, quality materials, and modern construction
                techniques. We believe every family deserves a home built to the highest standards, and we work
                tirelessly to make that vision a reality for our clients across Nepal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="mb-4 text-2xl font-bold">Our Mission & Vision</h2>
              <p className="mb-6 text-muted-foreground">
                At Ghar Banaune Company, our mission is to create homes that inspire, function efficiently, and stand
                the test of time. We aim to exceed client expectations by delivering exceptional quality, innovative
                designs, and personalized service for every family.
              </p>

              <ul className="grid gap-3">
                {[
                  "Deliver high-quality home construction that exceeds industry standards",
                  "Provide transparent communication throughout the home building process",
                  "Respect timelines and budgets while maintaining quality",
                  "Incorporate sustainable building practices whenever possible",
                  "Support the local economy by employing local talent and sourcing materials locally",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 text-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-64 md:h-full order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Our Mission"
                alt="Our Mission"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mb-12 text-muted-foreground">
              The fundamental principles that guide every aspect of our construction business
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Quality Excellence</h3>
                  <p className="text-muted-foreground">
                    We never compromise on quality, using premium materials and proven construction methods.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Trust & Integrity</h3>
                  <p className="text-muted-foreground">
                    Complete transparency in all dealings, from pricing to project timelines and progress.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Customer Focus</h3>
                  <p className="text-muted-foreground">
                    Every decision we make prioritizes our clients' needs and long-term satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuously adopting modern techniques and technologies for better construction outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Why Choose Ghar Banaune Company</h2>
            <p className="mb-12 text-muted-foreground">
              What sets us apart as Nepal's premier residential home construction company
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">Specialized Expertise</h3>
                  <p className="text-muted-foreground">
                    We focus exclusively on residential home construction, making us true specialists in building family
                    homes that meet modern living standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every project undergoes rigorous quality control processes to ensure construction meets our high
                    standards and exceeds client expectations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">Transparent Process</h3>
                  <p className="text-muted-foreground">
                    Complete transparency in pricing, timelines, and construction progress. Clients receive regular
                    updates and detailed project documentation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">Local Commitment</h3>
                  <p className="text-muted-foreground">
                    As a Nepal-based company, we understand local building requirements, climate considerations, and
                    cultural preferences in home design.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Construction Approach</h2>
            <p className="mb-12 text-muted-foreground">
              How we ensure every home construction project meets our standards of excellence
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-2xl font-bold text-primary-500">1</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Planning & Design</h3>
                <p className="text-muted-foreground">
                  Comprehensive project planning with detailed architectural designs tailored to client needs.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-2xl font-bold text-primary-500">2</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Quality Construction</h3>
                <p className="text-muted-foreground">
                  Expert construction using premium materials and proven techniques for lasting durability.
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <span className="text-2xl font-bold text-primary-500">3</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold">Final Delivery</h3>
                <p className="text-muted-foreground">
                  Thorough quality inspection and professional handover of your completed dream home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-500 py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Ready to Build Your Dream Home?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Partner with Nepal's premier home construction company for your next residential building project.
            Experience the difference of working with true construction specialists.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-500 bg-transparent"
              >
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-500 bg-transparent"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer description="building brand new dream homes for families since 2025" />
    </div>
  )
}
