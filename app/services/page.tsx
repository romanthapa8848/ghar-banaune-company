import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building2,
  Zap,
  Layers,
  Cable as Cube,
  FileText,
  ArrowRight,
  Hammer,
  Users,
  Award,
  MessageSquare,
  PaintBucket,
} from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive construction and design services - from structural analysis to 3D visualization
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
            {/* Construction - Position 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/construction.jpg" alt="Construction" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Construction</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Complete construction services from foundation to finishing. We execute projects with precision,
                  quality materials, and modern techniques for lasting durability and structural integrity.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Consultation - Position 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/consultation-meeting.jpg" alt="Consultation" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Consultation</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Expert consultation and advisory services for your construction project. We guide you through every
                  step from concept to completion, ensuring your vision becomes reality.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Structural Analysis - Position 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/structural-analysis.png" alt="Structural Analysis" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Structural Analysis</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Professional structural analysis and engineering assessments. We ensure all designs meet safety codes
                  and building standards for secure, long-lasting constructions.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Interior Design - Position 4 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/interior-design-home.jpg" alt="Interior Design" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <PaintBucket className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Interior Design</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Professional interior design services creating beautiful, functional spaces. We design interiors that
                  reflect your style and enhance your living experience with elegance and comfort.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 2D Design - Position 5 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/2d-design-blueprint-architecture.jpg" alt="2D Design" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Layers className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">2D Design</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Detailed 2D architectural drawings and floor plans. We create precise technical drawings that clearly
                  communicate your project design to all stakeholders and construction teams.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* 3D Design - Position 6 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/3d-model-design-visualization.jpg" alt="3D Design" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <Cube className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">3D Design</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Advanced 3D modeling and visualization services. Visualize your project before construction with
                  realistic renderings and virtual walkthroughs to perfect your design.
                </p>
                <Button variant="outline" className="gap-2 bg-transparent">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Naksa Pass - Position 7 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/naksa-pass-document-approval.jpg" alt="Naksa Pass" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <FileText className="h-6 w-6 text-primary-500" />
                  <h3 className="text-xl font-semibold">Naksa Pass</h3>
                </div>
                <p className="mb-4 text-muted-foreground">
                  Complete naksa (building plan) preparation and municipal approval services. We handle all government
                  approvals and permits required for your construction project.
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
              From initial design to final handover - we handle every aspect of your project
            </p>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary-200" />

              <div className="relative grid gap-12">
                {[
                  {
                    step: 1,
                    title: "Analysis & Design",
                    description: "Structural analysis, 2D design, and 3D modeling tailored to your vision.",
                  },
                  {
                    step: 2,
                    title: "Naksa Pass & Approvals",
                    description: "Complete handling of municipal approvals and construction permits.",
                  },
                  {
                    step: 3,
                    title: "Construction Phase",
                    description: "Expert construction execution with quality materials and skilled craftsmen.",
                  },
                  {
                    step: 4,
                    title: "Consultation",
                    description: "Expert consultation and advisory services for your construction project.",
                  },
                  {
                    step: 5,
                    title: "Interior Design",
                    description: "Professional interior design services to bring your home to life.",
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
              Professional expertise across all aspects of construction and design
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 text-center">
                  <Building2 className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Complete Solutions</h3>
                  <p className="text-muted-foreground">
                    From analysis and design to construction, we handle every service under one roof.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Legal Compliance</h3>
                  <p className="text-muted-foreground">
                    All designs meet building codes with professional naksa pass and municipal approvals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Cube className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Modern Technology</h3>
                  <p className="text-muted-foreground">
                    Advanced 3D modeling and 2D design tools for precise project planning and visualization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Hammer className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Quality Construction</h3>
                  <p className="text-muted-foreground">
                    Expert craftsmanship using premium materials ensures structural integrity and longevity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our team of civil engineers and skilled specialists bring years of experience to every project.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4 h-12 w-12 text-primary-500" />
                  <h3 className="mb-3 text-lg font-semibold">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    Successfully completed numerous construction projects across Nepal since 2025.
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
