import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center">
              <Image src="/logo.png" alt="Ghar Banaune Company" width={140} height={50} className="h-12 w-auto" />
            </Link>
            <p className="mb-4 max-w-xs">No. 1 home construction company.</p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/gharbanaunecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/gharbanaunecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@gharbanaunecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://www.youtube.com/@gharbanaunecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/gharbanaunecompany"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary-500 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Structural Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  2D Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  3D Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-500 transition-colors">
                  Naksa Pass
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary-500" />
                <span>Ganeshpur, Tilottama-6, Rupandehi</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>+977 9846187550</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>gharbanaunecompany@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="mb-6 grid grid-cols-1 gap-4 text-center text-sm md:grid-cols-2">
            <div>
              <p className="text-slate-400">Company Registration Number</p>
              <p className="font-semibold text-white">378168/82/83</p>
            </div>
            <div>
              <p className="text-slate-400">PAN Number</p>
              <p className="font-semibold text-white">622474854</p>
            </div>
          </div>
          <p className="text-center">&copy; {new Date().getFullYear()} Ghar Banaune Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
