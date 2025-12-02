import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Have questions about building your new home? Get in touch with our team at Ghar Banaune Company.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="mb-6 text-xl font-semibold">Send Us a Message or Request a Quote</h2>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Quote request, consultation, or general inquiry"
                      className="focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your new home project, request a quote, or ask any questions..."
                      rows={4}
                      className="focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>

                  <Button className="mt-2 bg-primary-500 hover:bg-primary-600 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-between gap-6">
              <div>
                <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-100 p-2">
                      <MapPin className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Our Location</h3>
                      <p className="text-muted-foreground">Madhu Marga, Tilottama-6, Rupadehi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-100 p-2">
                      <Phone className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone Number</h3>
                      <p className="text-muted-foreground">+977 9846187550</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-100 p-2">
                      <Mail className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email Address</h3>
                      <p className="text-muted-foreground">info@gharbanaunecompany.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-100 p-2">
                      <Clock className="h-5 w-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Working Hours</h3>
                      <p className="text-muted-foreground">Every Day: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-64 w-full overflow-hidden rounded-lg bg-slate-200 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.455485464826!2d83.44340931842896!3d27.700757454348985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996864275d9755f%3A0x2b1e92d89d4bb3ae!2sButwal%2C%20Nepal!5e0!3m2!1sen!2sus!4v1654321234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ghar Banaune Company Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
