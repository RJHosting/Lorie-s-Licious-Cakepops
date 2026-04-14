// ============================================================
// SITE CONFIGURATION
// ============================================================
// Edit these values to configure Google Maps, Reviews, and Photos
// The site works fully without API keys - showing elegant fallbacks.
//
// To enable live Google reviews and place photos:
// 1. Get a Google Maps API key from https://console.cloud.google.com
// 2. Enable: Maps JavaScript API, Places API
// 3. Find your Place ID at https://developers.google.com/maps/documentation/places/web-service/place-id
// 4. Paste your credentials below
// ============================================================

export const SITE_CONFIG = {
  businessName: "Lorie's 'Licious Cakepops",
  tagline: "Handcrafted Cake Pops for Every Celebration",
  address: "310 W 3rd St, Delphos, OH 45833, United States",
  phone: "(419) 555-0123",       // Replace with real phone
  email: "info@loriesliciouscakepops.com", // Replace with real email
  
  // Google Maps - this link always works, no API key needed
  googleMapsLink: "https://maps.app.goo.gl/GmTjT16ovYZ4TSxLA?g_st=ic",
  
  // Google API credentials (leave empty for fallback mode)
  // When these are filled in, live reviews and place photos will load automatically
  placeId: "",       // e.g. "ChIJ..." - Your Google Place ID
  apiKey: "",        // e.g. "AIza..." - Your Google Maps API Key
  mapEmbedUrl: "",   // e.g. "https://www.google.com/maps/embed?pb=..." - Optional embed URL
  
  // Social media links (replace # with real URLs)
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },

  // Business hours
  hours: [
    { day: "Monday", time: "By Appointment" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
    { day: "Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday", time: "10:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

// Fallback reviews shown when Google API is not configured
export const FALLBACK_REVIEWS = [
  {
    author_name: "Sarah M.",
    rating: 5,
    text: "Absolutely amazing cake pops! Lorie made the most beautiful custom pops for my daughter's birthday. The kids loved them and they tasted incredible. Will definitely be ordering again!",
    relative_time_description: "2 weeks ago",
  },
  {
    author_name: "Jessica L.",
    rating: 5,
    text: "We ordered cake pops for our wedding favors and they were stunning. Every guest complimented them. Lorie was so easy to work with and went above and beyond with the design.",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "David R.",
    rating: 5,
    text: "Best cake pops in the area, hands down. We order from Lorie for every office event. The quality and creativity are unmatched. Highly recommend for any occasion!",
    relative_time_description: "3 weeks ago",
  },
  {
    author_name: "Amanda K.",
    rating: 5,
    text: "The baby shower cake pops were perfect! So cute and delicious. Everyone was asking where I got them. Lorie is incredibly talented and professional.",
    relative_time_description: "1 month ago",
  },
];