import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SITE_CONFIG } from "@/lib/siteConfig";
import MapSection from "@/components/shared/MapSection";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Contact Us
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Something{" "}
            <span className="text-primary">Sweet Together</span>
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Have a question, want to place an order, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body text-sm">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-body text-sm">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body text-sm">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(419) 555-0123"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-body text-sm">Subject</Label>
                    <Select value={formData.subject} onValueChange={(val) => setFormData({ ...formData, subject: val })}>
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom_order">Custom Order</SelectItem>
                        <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                        <SelectItem value="event">Event Order</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body text-sm">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event, design ideas, quantities needed, and preferred dates..."
                    rows={5}
                    required
                    className="rounded-xl"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full font-body px-8">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-5">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Address</p>
                      <p className="font-body text-sm text-muted-foreground">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Phone</p>
                      <p className="font-body text-sm text-muted-foreground">{SITE_CONFIG.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Email</p>
                      <p className="font-body text-sm text-muted-foreground">{SITE_CONFIG.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm font-semibold text-foreground">Hours</p>
                      <p className="font-body text-sm text-muted-foreground">Tue–Fri: 9 AM – 5 PM</p>
                      <p className="font-body text-sm text-muted-foreground">Sat: 10 AM – 3 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full rounded-full font-body">
                <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <MapSection showHeading={false} />
    </div>
  );
}