import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Award, Users, Briefcase, FileText, Wrench, Building2 } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Construction Team</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet our CEO and leadership team dedicated to delivering exceptional construction quality and innovation
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-center text-2xl font-bold">Leadership Team</h2>

              {/* CEO Section */}
              <div className="mb-12">
                <Card className="overflow-hidden shadow-xl max-w-2xl mx-auto">
                  <div className="grid gap-6 md:grid-cols-1">
                    <div className="relative h-80">
                      <Image
                        src="/roman-thapa.jpg"
                        alt="Roman Thapa - Founder & CEO"
                        fill
                        className="object-contain bg-slate-50"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4 text-center">
                        <h3 className="mb-2 text-3xl font-bold">Roman Thapa</h3>
                        <p className="text-xl text-primary-500 font-semibold">Founder & CEO</p>
                        <p className="text-muted-foreground">Civil Engineer</p>
                      </div>

                      <p className="mb-4 text-muted-foreground text-center leading-relaxed">
                        Roman Thapa founded Ghar Banaune Company with a vision to transform Nepal's home construction
                        industry through better customer-contractor relationships and quality construction practices.
                      </p>

                      <div className="mb-4 flex justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary-500" />
                          <span>Founded 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary-500" />
                          <span>NEC License: 34018 Civil 'A'</span>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button variant="outline" size="sm" className="gap-2 bg-transparent text-xs">
                          <Phone className="h-3 w-3" />
                          +977 9846187550
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Team Gallery Section */}
          <div className="mb-12">
            <h2 className="mb-8 text-center text-2xl font-bold">Our Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Asmita Pokhrel */}
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-72">
                  <Image
                    src="/asmita-pokhrel.jpg"
                    alt="Asmita Pokhrel - Civil Engineer"
                    fill
                    className="object-contain bg-slate-50"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-xl font-bold text-center">Asmita Pokhrel</h3>
                  <p className="text-primary-500 font-semibold text-center">Civil Engineer</p>
                </CardContent>
              </Card>

              {/* Yachu Manandhar */}
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-72">
                  <Image src="/yachu-manandhar.jpg" alt="Yachu Manandhar" fill className="object-contain bg-slate-50" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-xl font-bold text-center">Yachu Manandhar</h3>
                  <p className="text-primary-500 font-semibold text-center">Civil Engineer</p>
                </CardContent>
              </Card>

              {/* Srijan Kumar Shrestha */}
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-72">
                  <Image
                    src="/srijan-shrestha.jpg"
                    alt="Srijan Kumar Shrestha"
                    fill
                    className="object-contain bg-slate-50"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-xl font-bold text-center">Srijan Kumar Shrestha</h3>
                  <p className="text-primary-500 font-semibold text-center">Civil Engineer</p>
                </CardContent>
              </Card>

              {/* Sulav Ghimire */}
              <Card className="overflow-hidden shadow-lg">
                <div className="relative h-72">
                  <Image src="/sulav-ghimire.jpg" alt="Sulav Ghimire" fill className="object-contain bg-slate-50" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-1 text-xl font-bold text-center">Sulav Ghimire</h3>
                  <p className="text-primary-500 font-semibold text-center">Civil Engineer</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Expertise Section */}
          <div className="mb-16">
            <div className="mx-auto max-w-4xl">
              <Card className="bg-primary-50 border-primary-200">
                <CardContent className="p-8 text-center">
                  <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Construction Expertise</h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-center">
                      <Building2 className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">New Home Construction</h3>
                      <p className="text-muted-foreground text-sm">
                        Complete new home construction from foundation to finishing.
                      </p>
                    </div>
                    <div className="text-center">
                      <Wrench className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">Home Renovations</h3>
                      <p className="text-muted-foreground text-sm">
                        Transform existing homes with comprehensive renovation services.
                      </p>
                    </div>
                    <div className="text-center">
                      <FileText className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">Naksa Design & Pass</h3>
                      <p className="text-muted-foreground text-sm">
                        Professional architectural design and municipal approval services.
                      </p>
                    </div>
                    <div className="text-center">
                      <Award className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">3D Model Design</h3>
                      <p className="text-muted-foreground text-sm">Advanced 3D modeling and visualization services.</p>
                    </div>
                    <div className="text-center">
                      <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">Quality Assurance</h3>
                      <p className="text-muted-foreground text-sm">Rigorous quality control throughout construction.</p>
                    </div>
                    <div className="text-center">
                      <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                      <h3 className="mb-3 text-lg font-semibold">Project Management</h3>
                      <p className="text-muted-foreground text-sm">
                        Professional project management from planning to completion.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Company Mission Section */}
          <div className="mb-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Company Mission</h2>
              <p className="mb-12 text-muted-foreground">
                We work together to deliver exceptional construction quality and customer satisfaction
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Award className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                    <h3 className="mb-3 text-xl font-bold text-center">Construction Excellence</h3>
                    <p className="text-muted-foreground">
                      We bring together diverse construction expertise to deliver technically superior building
                      solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                    <h3 className="mb-3 text-xl font-bold text-center">Customer Focus</h3>
                    <p className="text-muted-foreground">
                      Every decision we make prioritizes our clients' needs and long-term satisfaction with their new
                      homes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                    <h3 className="mb-3 text-xl font-bold text-center">Professional Standards</h3>
                    <p className="text-muted-foreground">
                      We maintain the highest professional standards and continuous improvement in construction
                      practices.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Work With Our Expert Team</h2>
            <p className="mb-8 text-muted-foreground">
              Our experienced construction team is ready to bring your home construction project to life with
              professional expertise and quality craftsmanship.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
