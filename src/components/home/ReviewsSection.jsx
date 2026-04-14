import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, FALLBACK_REVIEWS } from "@/lib/siteConfig";
import ReviewCard from "@/components/shared/ReviewCard";
import SectionHeading from "@/components/shared/SectionHeading";

export default function ReviewsSection() {
  // In fallback mode, we show the placeholder reviews.
  // When Google API is configured, these would be replaced with live data.
  const reviews = FALLBACK_REVIEWS;
  const overallRating = 5.0;
  const totalReviews = reviews.length;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Customer Love"
          title="What Our Customers Say"
          description="Don't just take our word for it — hear from the people who have celebrated with our cake pops."
        />

        {/* Overall Rating */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-5 py-2.5 border border-border shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-body text-sm font-semibold text-foreground">{overallRating.toFixed(1)}</span>
            <span className="font-body text-xs text-muted-foreground">({totalReviews} reviews)</span>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="rounded-full font-body">
            <a href={SITE_CONFIG.googleMapsLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              See More Reviews on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}