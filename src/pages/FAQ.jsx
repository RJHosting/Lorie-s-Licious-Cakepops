import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/siteConfig";

const faqs = [
  {
    question: "Do you take custom orders?",
    answer: "Absolutely! Custom orders are our specialty. Whether you need specific colors, themes, flavors, or designs, we'll work with you to create the perfect cake pops for your event. Just reach out through our contact page to get started.",
  },
  {
    question: "How far in advance should I order?",
    answer: "We recommend placing your order at least 2 weeks in advance for standard orders. For larger events (50+ pops) or complex custom designs like weddings, we suggest 4 or more weeks of lead time. During peak seasons (holidays, prom, graduation), please order as early as possible.",
  },
  {
    question: "Do you make treats for events and parties?",
    answer: "Yes! We create custom cake pops for all types of events — birthdays, weddings, baby showers, graduations, corporate events, holidays, and more. We can accommodate small intimate gatherings to large celebrations with hundreds of guests.",
  },
  {
    question: "Can I request custom colors and themes?",
    answer: "Of course! We love bringing creative visions to life. Share your color palette, theme ideas, inspiration photos, or any other details, and we'll design cake pops that match perfectly. From unicorns to corporate logos — if you can dream it, we can make it.",
  },
  {
    question: "What flavors do you offer?",
    answer: "Our core flavors include rich chocolate, creamy vanilla, decadent red velvet, cookies & cream, and birthday cake. We also offer seasonal flavors like pumpkin spice, peppermint, and lemon. Custom flavor requests are welcome!",
  },
  {
    question: "Where are you located?",
    answer: `We're located at ${SITE_CONFIG.address}. You can find us easily using the "Get Directions" button on our website, which will open Google Maps with our exact location.`,
  },
  {
    question: "How do I contact you?",
    answer: `You can reach us through our contact form on this website, by email at ${SITE_CONFIG.email}, or by phone at ${SITE_CONFIG.phone}. We typically respond within 24 hours on business days.`,
  },
  {
    question: "Do you offer delivery?",
    answer: "Currently, we offer local pickup from our Delphos location. For large event orders, we may be able to arrange local delivery — please ask when placing your order. We carefully package all orders to ensure they arrive in perfect condition.",
  },
  {
    question: "What are your prices?",
    answer: "Pricing varies based on the design complexity, quantity, and customization. Our party boxes start at $18. For custom orders, please contact us with your details and we'll provide a personalized quote. We strive to offer premium quality at fair prices.",
  },
  {
    question: "Can I order for someone as a gift?",
    answer: "Yes! Cake pops make wonderful gifts. We offer beautiful gift boxes and can include a personalized message. They're perfect for birthdays, thank-yous, holidays, or just because. Ask us about our gift packaging options!",
  },
];

export default function FAQ() {
  return (
    <div>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            FAQ
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about ordering from Lorie's 'Licious Cakepops.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-2xl border border-border px-5 md:px-6 data-[state=open]:shadow-sm transition-shadow"
                >
                  <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-secondary/30 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Still Have Questions?
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            We're here to help! Reach out and we'll be happy to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full font-body">
              <Link to="/contact">
                Contact Us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full font-body">
              <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
                Find Us on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}