import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/siteConfig";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function MapSection({ showHeading = true }) {
  const hasEmbed = !!SITE_CONFIG.mapEmbedUrl;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <SectionHeading
            subtitle="Find Us"
            title="Visit Our Bakery"
            description="We'd love to see you! Stop by our location in Delphos, Ohio or reach out to place an order."
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">{SITE_CONFIG.businessName}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">{SITE_CONFIG.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary-foreground" />
                </div>
                <span className="font-body text-sm text-foreground">{SITE_CONFIG.phone}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div className="font-body text-sm">
                  <span className="text-foreground font-medium">Tue – Fri:</span>
                  <span className="text-muted-foreground ml-1">9 AM – 5 PM</span>
                  <span className="text-foreground font-medium ml-3">Sat:</span>
                  <span className="text-muted-foreground ml-1">10 AM – 3 PM</span>
                </div>
              </div>

              <Button asChild size="lg" className="w-full rounded-full font-body text-sm">
                <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Proudly serving Delphos, Lima, Van Wert, and surrounding Ohio communities with handcrafted cake pops and custom desserts for every occasion.
            </p>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {hasEmbed ? (
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl shadow-sm"
                title="Google Maps location"
              />
            ) : (
              /* Styled map card when no embed URL is available */
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full min-h-[360px] flex flex-col">
                <div className="flex-1 bg-secondary/50 flex items-center justify-center relative">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2">
                      310 W 3rd St
                    </h4>
                    <p className="font-body text-sm text-muted-foreground mb-1">Delphos, OH 45833</p>
                    <p className="font-body text-xs text-muted-foreground">United States</p>
                  </div>
                </div>
                <div className="p-5">
                  <Button asChild className="w-full rounded-full font-body text-sm" variant="outline">
                    <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
                      <Navigation className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}