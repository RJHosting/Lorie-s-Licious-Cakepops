import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/siteConfig";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Custom Orders", path: "/custom-orders" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-3">
              Lorie&apos;s <span className="text-primary">&apos;Licious</span> Cakepops
            </h3>
            <p className="text-background/70 font-body text-sm leading-relaxed mb-5">
              Handcrafted cake pops and custom desserts made with love in Delphos, Ohio. 
              Beautifully made treats for every celebration.
            </p>
            <div className="flex gap-3">
              {SITE_CONFIG.social.facebook !== "#" || true ? (
                <>
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors text-sm font-bold">f</a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors text-sm font-bold">ig</a>
                  <a href={SITE_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary/80 flex items-center justify-center transition-colors text-sm font-bold">tt</a>
                </>
              ) : null}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary text-sm font-body transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href={SITE_CONFIG.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary text-sm font-body transition-colors"
                >
                  {SITE_CONFIG.address}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/70 text-sm font-body">{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/70 text-sm font-body">{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Hours</h4>
            <ul className="space-y-2">
              {SITE_CONFIG.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-sm font-body">
                  <span className="text-background/70">{h.day}</span>
                  <span className="text-background/90 font-medium">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-background/50 text-xs font-body">
            © {new Date().getFullYear()} Lorie&apos;s &apos;Licious Cakepops. All rights reserved.
          </p>
          <p className="text-background/50 text-xs font-body flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> in Delphos, Ohio
          </p>
        </div>
      </div>
    </footer>
  );
}