import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cake, Heart, Baby, GraduationCap, PartyPopper, Building2, Gift, CalendarDays, ArrowRight, Clock, Palette, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";

const occasions = [
  { icon: Cake, title: "Birthdays", description: "Fun, colorful, themed cake pops to make any birthday celebration extra sweet.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/8807b4374_generated_66ebd5c3.png" },
  { icon: Heart, title: "Weddings", description: "Elegant, sophisticated favors that match your wedding colors and theme perfectly.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/4cdb107b7_generated_10508c17.png" },
  { icon: Baby, title: "Baby Showers", description: "Adorable designs in soft pastels with cute baby-themed decorations.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/72b803fef_generated_826878ed.png" },
  { icon: GraduationCap, title: "Graduations", description: "Celebrate their achievement with school-colored pops and cap designs.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/6e3393f90_generated_ad0c340b.png" },
  { icon: Building2, title: "Corporate Events", description: "Professional branded treats for meetings, trade shows, and team celebrations.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/fd32a9ef2_generated_6c765bf4.png" },
  { icon: Gift, title: "Holidays", description: "Festive seasonal designs for Christmas, Easter, Valentine's Day, and more.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/8b6838ea1_generated_d52e6e71.png" },
  { icon: PartyPopper, title: "Anniversaries", description: "Romantic and elegant pops to celebrate your years of love.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/a2d2501d5_generated_fe77b814.png" },
  { icon: CalendarDays, title: "Party Favors", description: "Individually wrapped, custom-labeled pops your guests will love taking home.", image: "https://media.base44.com/images/public/69debb96c82686023a11a118/4c12a7eb3_generated_9b377415.png" },
];

const steps = [
  { num: "01", title: "Reach Out", description: "Contact us with your event date, theme, quantity, and any design ideas.", icon: MessageCircle },
  { num: "02", title: "Design Together", description: "We'll work with you to finalize colors, flavors, and designs that match your vision.", icon: Palette },
  { num: "03", title: "We Create", description: "Your pops are handcrafted fresh with love and premium ingredients.", icon: Cake },
  { num: "04", title: "Enjoy!", description: "Pick up your beautiful treats and watch your guests light up!", icon: PartyPopper },
];

export default function CustomOrders() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Custom Orders
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Custom Treats for{" "}
            <span className="text-primary">Every Celebration</span>
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
            From birthdays to weddings, we create bespoke cake pops designed around your unique vision. 
            Tell us what you're dreaming of!
          </p>
          <Button asChild size="lg" className="rounded-full font-body">
            <Link to="/contact">
              Start Your Order <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Occasion Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Occasions"
            title="We Create For Every Event"
            description="No matter the celebration, we have the perfect cake pop design for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {occasions.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-heading font-bold text-sm text-foreground">{item.title}</h3>
                  </div>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="How It Works"
            title="Simple Ordering Process"
            description="Getting your custom cake pops is easy. Here's how it works."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-body text-xs font-bold text-primary uppercase tracking-wider">Step {step.num}</span>
                <h3 className="font-heading font-bold text-lg text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-10">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
              Please Order in Advance
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Custom orders require time to design, bake, and decorate to perfection. We recommend 
              placing your order at least <strong className="text-foreground">2 weeks in advance</strong> for 
              standard orders and <strong className="text-foreground">4+ weeks</strong> for large events or 
              complex designs.
            </p>
            <Button asChild size="lg" className="rounded-full font-body">
              <Link to="/contact">
                Contact Us to Order <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}