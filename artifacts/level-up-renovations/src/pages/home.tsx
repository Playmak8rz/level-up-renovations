import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Hammer,
  LayoutGrid,
  Bath,
  ChefHat,
  Home,
  Waves,
  Truck,
  Phone,
  MapPin,
  CheckCircle2,
  Mail,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Hammer className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Level Up Renovations
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#why-us" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Why Us</a>
            <a href="#gallery" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="tel:+17184502000" className="hidden md:flex items-center gap-2 text-primary font-bold">
              <Phone className="w-4 h-4" />
              (718) 450-2000
            </a>
            <Button asChild className="font-bold bg-accent hover:bg-accent/90 text-gray-900">
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Modern Brooklyn renovated kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent font-medium text-sm mb-6">
                <MapPin className="w-4 h-4" />
                Serving Brooklyn, New York and Area
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Serious craftsmanship. <br />
                <span className="text-primary">Done right.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                We are a dependable, working-class contractor team bringing premium renovations to Brooklyn homes. No cutting corners. Just results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg font-bold px-8 h-14" asChild>
                  <a href="#contact">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg font-bold px-8 h-14 bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                  <a href="#services">Our Services</a>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Licensed & Insured
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" /> Free Estimates
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600">
              From fresh paint to full gut renovations, we handle every detail of your home improvement project with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Paintbrush, title: "Painting", desc: "Flawless interior and exterior painting services." },
              { icon: LayoutGrid, title: "Skim Coat", desc: "Perfectly smooth wall finishing and restoration." },
              { icon: Home, title: "Flooring", desc: "Expert hardwood, tile, and vinyl installation." },
              { icon: LayoutGrid, title: "Tile", desc: "Precision kitchen and bathroom tile work." },
              { icon: Bath, title: "Bathroom Renovation", desc: "Complete, high-end bathroom remodels." },
              { icon: ChefHat, title: "Kitchen Renovation", desc: "Full kitchen transformations for modern living." },
              { icon: Hammer, title: "Full Gut Renovation", desc: "Complete home teardown and rebuilds." },
              { icon: Waves, title: "Carpet Cleaning", desc: "Professional deep cleaning services." },
              { icon: Truck, title: "Moving Services", desc: "Reliable local moving help in Brooklyn." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-lg bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
           <img src="/images/why-us.png" alt="Contractor tools" className="w-full h-full object-cover opacity-40" />
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Level Up Difference</h2>
            <div className="w-20 h-1.5 bg-accent mb-10 rounded-full" />
            
            <div className="space-y-8">
              {[
                { icon: ShieldCheck, title: "Fully Licensed & Insured", desc: "Your property is protected. We carry all necessary Brooklyn and NY state credentials." },
                { icon: Star, title: "10+ Years Experience", desc: "We've seen it all. Our crew brings a decade of hands-on expertise to every job site." },
                { icon: CheckCircle2, title: "Working-Class Ethic", desc: "We show up on time, work hard, and clean up when we're done. No excuses." },
                { icon: MapPin, title: "Brooklyn Local", desc: "We know the neighborhoods, the building codes, and how to navigate city renovations." }
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h2>
              <div className="w-20 h-1.5 bg-primary mb-6 rounded-full" />
              <p className="text-lg text-gray-600">
                A glimpse into our recent renovations across Brooklyn. We let the results speak for themselves.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex mt-6 md:mt-0 font-bold border-gray-300 text-gray-700">
              View Full Portfolio <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img src="/images/gallery-1.png" alt="Living room renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-xl">Living Space Modernization</h4>
                  <p className="text-gray-300 text-sm">Flooring, Paint, Skim Coating</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img src="/images/gallery-3.png" alt="Hardwood flooring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-xl">Custom Flooring</h4>
                  <p className="text-gray-300 text-sm">Oak Hardwood Installation</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 md:mt-12">
               <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img src="/images/gallery-2.png" alt="Bathroom renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-xl">Luxury Bathroom</h4>
                  <p className="text-gray-300 text-sm">Full Gut Renovation & Tile</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
                <img src="/images/gallery-4.png" alt="Skim coated walls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h4 className="text-white font-bold text-xl">Flawless Finishes</h4>
                  <p className="text-gray-300 text-sm">Level 5 Skim Coating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            <div className="lg:w-2/5 bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to Level Up?</h2>
                <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                  Contact us today for a free estimate on your next project. We'll discuss your vision, timeline, and provide a transparent quote.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 font-medium">Call Us</p>
                      <a href="tel:+17184502000" className="text-lg font-bold hover:text-accent transition-colors">+1 718 450 2000</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 font-medium">Location</p>
                      <p className="text-lg font-bold">7022 13th Ave<br/>Brooklyn, NY</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/70 font-medium">Email</p>
                      <p className="text-lg font-bold">info@leveluprenovations.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Estimate</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input placeholder="John Doe" className="bg-gray-50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                    <Input placeholder="(555) 123-4567" className="bg-gray-50 h-12" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-gray-50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Service Needed</label>
                    <select className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select a service...</option>
                      <option value="gut">Full Gut Renovation</option>
                      <option value="kitchen">Kitchen Renovation</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="painting">Painting & Skim Coat</option>
                      <option value="flooring">Flooring & Tile</option>
                      <option value="other">Other / Multiple</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Project Details</label>
                  <Textarea placeholder="Tell us a bit about your property and what you're looking to achieve..." className="bg-gray-50 min-h-[120px]" />
                </div>
                <Button className="w-full h-14 text-lg font-bold bg-accent text-gray-900 hover:bg-accent/90 mt-4">
                  Submit Request
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Hammer className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Level Up Renovations
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">7022 13th Ave, Brooklyn, NY</p>
              <p className="font-semibold text-white">+1 718 450 2000</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Level Up Renovations LLC. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
