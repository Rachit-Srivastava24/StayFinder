const sampleListings = [
  // 1. Cozy Beachfront Cottage
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_1",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },

  // 2. Modern Loft in Downtown
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_2",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },

  // 3. Mountain Retreat (Aspen)
  {
    title: "Mountain Retreat (Aspen)",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_3",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },

  // 4. Historic Villa in Tuscany
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_4",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },

  // 5. Secluded Treehouse Getaway
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_5",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },

  // 6. Beachfront Paradise
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_6",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },

  // 7. Rustic Cabin by the Lake
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_7",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },

  // 8. Luxury Penthouse with City Views (LA)
  {
    title: "Luxury Penthouse with City Views (LA)",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_8",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },

  // 9. Ski-In/Ski-Out Chalet
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_9",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },

  // 10. Safari Lodge in the Serengeti
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_10",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },

  // 11. Secluded Beach House in Costa Rica
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_11",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },

  // 12. Mountain Retreat (Bali)
  {
    title: "Mountain Retreat (Bali)",
    description: "Ideal for adventure seekers and nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_12",
    },
    price: 5211,
    location: "Bali",
    country: "Indonesia",
  },

  // FROM HERE NEW UPDATED LINKS START (13 → 39)

  // 13. Somewhere in the woods (Paris)
  {
    title: "Somewhere in the woods (Paris)",
    description: "A hidden gem perfect for relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_13",
    },
    price: 1386,
    location: "Paris",
    country: "France",
  },

  // 14. Historic Castle (New York)
  {
    title: "Historic Castle (New York)",
    description: "A unique and unforgettable experience.",
    image: {
      url: "https://images.unsplash.com/photo-1665192616288-5df1d7cef325?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing_image_14",
    },
    price: 752,
    location: "New York",
    country: "United States",
  },

  // 15. Urban Chic Apartment (Dubai)
  {
    title: "Urban Chic Apartment (Dubai)",
    description: "A perfect getaway with stunning views.",
    image: {
      url: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_15",
    },
    price: 8243,
    location: "Dubai",
    country: "UAE",
  },

  // 16. Floating Water Villa (Maldives)
  {
    title: "Floating Water Villa (Maldives)",
    description: "An adventure-filled stay awaits you.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_16",
    },
    price: 9353,
    location: "Maldives",
    country: "Maldives",
  },

  // 17. Mountain Retreat (Tokyo)
  {
    title: "Mountain Retreat (Tokyo)",
    description: "A romantic escape for couples.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_17",
    },
    price: 3595,
    location: "Tokyo",
    country: "Japan",
  },

  // 18. Sunny Beach House (London)
  {
    title: "Sunny Beach House (London)",
    description: "A hidden gem perfect for relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_18",
    },
    price: 2077,
    location: "London",
    country: "United Kingdom",
  },

  // 19. Hidden Gem Cottage (Rome)
  {
    title: "Hidden Gem Cottage (Rome)",
    description: "Experience luxury like never before.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_19",
    },
    price: 1954,
    location: "Rome",
    country: "Italy",
  },

  // 20. Floating Water Villa (Barcelona)
  {
    title: "Floating Water Villa (Barcelona)",
    description: "Enjoy spectacular sunrise and sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_20",
    },
    price: 4731,
    location: "Barcelona",
    country: "Spain",
  },

  // 21. Grand Palace Hotel (LA)
  {
    title: "Grand Palace Hotel (LA)",
    description: "Surrounded by the most stunning landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_21",
    },
    price: 5319,
    location: "Los Angeles",
    country: "United States",
  },

  // 22. Oceanfront Condo (Aspen)
  {
    title: "Oceanfront Condo (Aspen)",
    description: "Surrounded by the most stunning landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_22",
    },
    price: 6199,
    location: "Aspen",
    country: "United States",
  },

  // 23. Modern City Apartment (Santorini)
  {
    title: "Modern City Apartment (Santorini)",
    description: "A hidden gem perfect for relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_23",
    },
    price: 6942,
    location: "Santorini",
    country: "Greece",
  },

  // 24. Snowy Mountain Lodge
  {
    title: "Snowy Mountain Lodge",
    description: "A perfect getaway with stunning views.",
    image: {
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_24",
    },
    price: 3853,
    location: "Cape Town",
    country: "South Africa",
  },

  // 25. Floating Water Villa (Bangkok)
  {
    title: "Floating Water Villa (Bangkok)",
    description: "The best vacation spot for relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_25",
    },
    price: 999,
    location: "Bangkok",
    country: "Thailand",
  },

  // 26. Tropical Villa (Singapore)
  {
    title: "Tropical Villa (Singapore)",
    description: "A charming stay with modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_26",
    },
    price: 2478,
    location: "Singapore",
    country: "Singapore",
  },

  // 27. Private Island Escape
  {
    title: "Private Island Escape",
    description: "Surrounded by the most stunning landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_27",
    },
    price: 2279,
    location: "Amsterdam",
    country: "Netherlands",
  },

  // 28. Historic Castle (Rio)
  {
    title: "Historic Castle (Rio)",
    description: "Enjoy spectacular sunrise and sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1584191686280-0377f2bc8c23?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listing_image_28",
    },
    price: 7275,
    location: "Rio de Janeiro",
    country: "Brazil",
  },

  // 29. Hillside Bungalow
  {
    title: "Hillside Bungalow",
    description: "Enjoy spectacular sunrise and sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_29",
    },
    price: 6330,
    location: "Phuket",
    country: "Thailand",
  },

  // 30. Floating Water Villa (Sydney)
  {
    title: "Floating Water Villa (Sydney)",
    description: "Unplug and recharge in this peaceful getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_30",
    },
    price: 2379,
    location: "Sydney",
    country: "Australia",
  },

  // 31. Beach Hut Hideaway
  {
    title: "Beach Hut Hideaway",
    description: "Ideal for adventure seekers and nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_31",
    },
    price: 3536,
    location: "Vancouver",
    country: "Canada",
  },

  // 32. Jungle Treehouse (Bali)
  {
    title: "Jungle Treehouse (Bali)",
    description: "An adventure-filled stay awaits you.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_32",
    },
    price: 5898,
    location: "Bali",
    country: "Indonesia",
  },

  // 33. Desert Oasis (Paris)
  {
    title: "Desert Oasis (Paris)",
    description: "A charming stay with modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_33",
    },
    price: 8291,
    location: "Paris",
    country: "France",
  },

  // 34. Jungle Treehouse (New York)
  {
    title: "Jungle Treehouse (New York)",
    description: "Explore the beauty of the surroundings.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_34",
    },
    price: 5521,
    location: "New York",
    country: "United States",
  },

  // 35. Luxury Penthouse (Dubai)
  {
    title: "Luxury Penthouse (Dubai)",
    description: "Experience luxury like never before.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_35",
    },
    price: 722,
    location: "Dubai",
    country: "UAE",
  },

  // 36. Rustic Farmhouse (Maldives)
  {
    title: "Rustic Farmhouse (Maldives)",
    description: "A perfect mix of tradition and modern comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_36",
    },
    price: 6462,
    location: "Maldives",
    country: "Maldives",
  },

  // 37. Ski Resort Chalet (Tokyo)
  {
    title: "Ski Resort Chalet (Tokyo)",
    description: "Unplug and recharge in this peaceful getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_37",
    },
    price: 5892,
    location: "Tokyo",
    country: "Japan",
  },

  // 38. Modern City Apartment (London)
  {
    title: "Modern City Apartment (London)",
    description: "A perfect mix of tradition and modern comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_38",
    },
    price: 8018,
    location: "London",
    country: "United Kingdom",
  },

  // 39. Modern City Apartment (Rome)
  {
    title: "Modern City Apartment (Rome)",
    description: "Surrounded by the most stunning landscapes.",
    image: {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_39",
    },
    price: 4591,
    location: "Rome",
    country: "Italy",
  },

  // 40 & 41 (same as your original)
  {
    title: "Grand Palace Hotel (Barcelona)",
    description: "A unique and unforgettable experience.",
    image: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_40",
    },
    price: 3335,
    location: "Barcelona",
    country: "Spain",
  },

  {
    title: "Modern City Apartment (LA)",
    description: "A perfect getaway with stunning views.",
    image: {
      url: "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=800&q=60",
      filename: "listing_image_41",
    },
    price: 9268,
    location: "Los Angeles",
    country: "United States",
  },
];

module.exports = { data: sampleListings };
