import icon1 from "../../assets/images/icon1.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";
import icon4 from "../../assets/images/icon4.svg";

import g1 from "../../assets/images/gallery1.webp";
import g2 from "../../assets/images/gellery2.webp";
import g3 from "../../assets/images/gallery3.webp";
import g4 from "../../assets/images/gallery4.webp";
import g5 from "../../assets/images/gallery5.webp";

export const Project_Details = [
  {
    id: "proj_001",
    name: "Aurelia",
    location: "Kharadi, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: g1,
        caption: "Tower exterior",
      },
      {
        id: g2,
        url: g2,
        caption: "Amenities",
      },
      {
        id: g3,
        url: g3,
        caption: "Aerial view",
      },
      {
        id: g4,
        url: g3,
        caption: "Entrance view",
      },
      {
        id: g5,
        url: g5,
        caption: "Clubhouse",
      },
    ],

    overview: {
      image: g2,
      heading: "VTP Aurelia – A Landmark Taking Shape in New Kharadi",
      description:
        "With its tall, ornate towers, delicately arched windows, majestic promenades and serene courtyards, this landmark is more than a home, it is a return to grace. Here, classical charm meets wide open spaces, and everyday life takes on the cadence of calmness. Welcome to a lifestyle designed to inspire every moment, every day.At VTP Aurelia, we bring you elegant 2 & 3 Bed Residences just minutes away from EON IT Park & WTC, in New Kharadi, Pune.",
    },

    highlights: [
      {
        icon: icon1,
        title: "4 Towers",
        description: "Of 36 Storeys Each",
      },
      {
        icon: icon2,
        title: "European Design",
        description: "With Modern Aesthetics",
      },
      {
        icon: icon3,
        title: "Near To",
        description: "EON IT Park & WTC",
      },
      {
        icon: icon4,
        title: "Next To",
        description: "BAIF Forest",
      },
      {
        icon: icon1,
        title: "Majestic Amenities",
        description: "For All Age Group",
      },
      {
        icon: icon2,
        title: "100%",
        description: "Privacy & Open Views",
      },
      {
        icon: icon3,
        title: "Lush",
        description: "Greenery & Open Spaces",
      },
      {
        icon: icon4,
        title: "Township Living",
        description: "With 8000+ Families",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 680,
        carpetAreaMax: 780,
        unit: "sq.ft.",
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1050,
        carpetAreaMax: 1250,
        unit: "sq.ft.",
      },
    ],

    amenities: [
      {
        id: "g1",
        name: "Swimming Pool",
        image: g5,
      },
      {
        id: "g1",
        name: "Gymnasium",
        image: g2,
      },
      {
        id: "g1",
        name: "Kids Play Area",
        image: g4,
      },
      {
        id: "g1",
        name: "Clubhouse",
        image: g1,
      },
    ],
  },

  {
    id: "proj_002",
    name: "Monarque by VTP Luxe",
    location: "Hinjawadi, Pune",
    status: "New Launch",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Monarque+Tower",
        caption: "Tower render",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Monarque+Living",
        caption: "Living room",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Monarque+Balcony",
        caption: "Private balcony",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Monarque+Rooftop",
        caption: "Rooftop lounge",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Monarque+by+VTP+Luxe+Overview",
      heading: "Reign in absolute luxury",
      description:
        "Monarque by VTP Luxe is an ultra-premium residential landmark in Hinjawadi, designed for those who command the finest things in life. Featuring bespoke interiors, panoramic views of the Sahyadri hills, and an unmatched suite of amenities, Monarque sets a new benchmark for luxury in Pune's IT capital.",
    },

    highlights: [
      {
        icon: "star",
        title: "Smart Home Ready",
        description: "Alexa & Google Home compatible automation in every unit.",
      },
      {
        icon: "car",
        title: "EV Charging",
        description: "Dedicated EV charging bays in the basement parking.",
      },
      {
        icon: "wifi",
        title: "High-Speed Internet",
        description: "1 Gbps fibre pre-wired to every apartment.",
      },
      {
        icon: "key",
        title: "Concierge Service",
        description: "24×7 concierge for residents.",
      },
    ],

    unitPlans: [
      {
        configuration: "3 BHK",
        carpetAreaMin: 1600,
        carpetAreaMax: 1900,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 2200,
        carpetAreaMax: 2600,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "PENTHOUSE",
        carpetAreaMin: 3800,
        carpetAreaMax: 4000,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Infinity Pool",
        image: "https://placehold.co/400x300?text=Infinity+Pool",
      },
      {
        id: "a2",
        name: "Private Theatre",
        image: "https://placehold.co/400x300?text=Theatre",
      },
      {
        id: "a3",
        name: "Spa & Wellness",
        image: "https://placehold.co/400x300?text=Spa",
      },
      {
        id: "a4",
        name: "Rooftop Lounge",
        image: "https://placehold.co/400x300?text=Rooftop",
      },
      {
        id: "a5",
        name: "Business Centre",
        image: "https://placehold.co/400x300?text=Business",
      },
      {
        id: "a6",
        name: "Wine Cellar",
        image: "https://placehold.co/400x300?text=Wine+Cellar",
      },
    ],
  },

  {
    id: "proj_003",
    name: "VTP VOLARE",
    location: "Hinjawadi, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Volare+Exterior",
        caption: "Front elevation",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Volare+Lobby",
        caption: "Grand lobby",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Volare+Clubhouse",
        caption: "Clubhouse",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Volare+Terrace",
        caption: "Sky terrace",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=VTP+Volare+Overview",
      heading: "Soar to new heights",
      description:
        "VTP Volare is a thoughtfully planned residential community in Hinjawadi, the technology heartbeat of Pune. Offering spacious homes with modern finishes, green surroundings, and seamless connectivity to Rajiv Gandhi Infotech Park, Volare is the ideal home for working professionals and growing families alike.",
    },

    highlights: [
      {
        icon: "shield",
        title: "Vastu Compliant",
        description: "All units designed as per Vastu Shastra principles.",
      },
      {
        icon: "leaf",
        title: "Green Building",
        description: "IGBC certified with 40% open green spaces.",
      },
      {
        icon: "bolt",
        title: "24×7 Power Backup",
        description: "100% power backup for all common areas and apartments.",
      },
      {
        icon: "sun",
        title: "Solar Powered",
        description: "Common areas powered by rooftop solar panels.",
      },
    ],

    unitPlans: [
      {
        configuration: "1 BHK",
        carpetAreaMin: 420,
        carpetAreaMax: 480,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "2 BHK",
        carpetAreaMin: 690,
        carpetAreaMax: 820,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1050,
        carpetAreaMax: 1200,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a2",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
      {
        id: "a3",
        name: "Kids Play Area",
        image: "https://placehold.co/400x300?text=Kids+Play",
      },
      {
        id: "a4",
        name: "Jogging Track",
        image: "https://placehold.co/400x300?text=Track",
      },
      {
        id: "a5",
        name: "Co-working Space",
        image: "https://placehold.co/400x300?text=Cowork",
      },
      {
        id: "a6",
        name: "Amphitheatre",
        image: "https://placehold.co/400x300?text=Amphitheatre",
      },
    ],
  },

  {
    id: "proj_004",
    name: "EARTH 1 BY VTP LUXE",
    location: "Mahalunge, Pune",
    status: "Ready to Move",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Earth1+Facade",
        caption: "Tower facade",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Earth1+Garden",
        caption: "Landscape garden",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Earth1+Interior",
        caption: "Sample interior",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Earth1+Pool",
        caption: "Swimming pool",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Earth+1+by+VTP+Luxe+Overview",
      heading: "Grounded in luxury, elevated by nature",
      description:
        "EARTH 1 by VTP Luxe is a rare fusion of natural living and contemporary luxury in Mahalunge. Drawing inspiration from the earth's organic palette, the project features biophilic design principles, sprawling green podiums, and premium residences that create a perfect harmony between indoors and the outdoors.",
    },

    highlights: [
      {
        icon: "tree",
        title: "60% Open Space",
        description: "Sprawling landscape with native trees and gardens.",
      },
      {
        icon: "shield",
        title: "Gated Community",
        description: "3-tier security with CCTV surveillance 24×7.",
      },
      {
        icon: "drop",
        title: "Rainwater Harvesting",
        description: "On-site rainwater harvesting and water recycling plant.",
      },
      {
        icon: "recycle",
        title: "Zero Waste",
        description: "On-site organic waste converter and recycling.",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 750,
        carpetAreaMax: 870,
        unit: "sq.ft.",
        price: 8500000,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1150,
        carpetAreaMax: 1380,
        unit: "sq.ft.",
        price: 12500000,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 1800,
        carpetAreaMax: 2100,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Yoga Deck",
        image: "https://placehold.co/400x300?text=Yoga",
      },
      {
        id: "a2",
        name: "Zen Garden",
        image: "https://placehold.co/400x300?text=Zen+Garden",
      },
      {
        id: "a3",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a4",
        name: "Cycling Track",
        image: "https://placehold.co/400x300?text=Cycling",
      },
      {
        id: "a5",
        name: "Pet Park",
        image: "https://placehold.co/400x300?text=Pet+Park",
      },
      {
        id: "a6",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
    ],
  },

  {
    id: "proj_005",
    name: "CIELO by VTP Luxe",
    location: "Bavdhan, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Cielo+Tower",
        caption: "Tower render",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Cielo+Living",
        caption: "Living room",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Cielo+Kitchen",
        caption: "Modular kitchen",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Cielo+Balcony",
        caption: "Private balcony",
      },
      {
        id: "g5",
        url: "https://placehold.co/800x500?text=Cielo+Rooftop",
        caption: "Rooftop lounge",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Cielo+by+VTP+Luxe+Overview",
      heading: "Touch the sky from Bavdhan",
      description:
        "CIELO by VTP Luxe commands the breathtaking hillscape of Bavdhan, offering residences perched high with sweeping views of the Mula-Mutha river valley and the Western Ghats. A seamless blend of Italian-inspired architecture and Pune's serene topography, Cielo is a sky-high sanctuary for the privileged few.",
    },

    highlights: [
      {
        icon: "star",
        title: "Smart Home Ready",
        description: "Alexa & Google Home compatible automation in every unit.",
      },
      {
        icon: "wifi",
        title: "High-Speed Internet",
        description: "1 Gbps fibre pre-wired to every apartment.",
      },
      {
        icon: "car",
        title: "EV Charging",
        description: "Dedicated EV charging bays in the basement parking.",
      },
      {
        icon: "shield",
        title: "Gated Community",
        description: "3-tier security with CCTV surveillance 24×7.",
      },
    ],

    unitPlans: [
      {
        configuration: "3 BHK",
        carpetAreaMin: 1500,
        carpetAreaMax: 1800,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 2100,
        carpetAreaMax: 2500,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "DUPLEX",
        carpetAreaMin: 2800,
        carpetAreaMax: 3200,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "PENTHOUSE",
        carpetAreaMin: 4000,
        carpetAreaMax: 4500,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Infinity Pool",
        image: "https://placehold.co/400x300?text=Infinity+Pool",
      },
      {
        id: "a2",
        name: "Spa & Wellness",
        image: "https://placehold.co/400x300?text=Spa",
      },
      {
        id: "a3",
        name: "Rooftop Lounge",
        image: "https://placehold.co/400x300?text=Rooftop",
      },
      {
        id: "a4",
        name: "Private Theatre",
        image: "https://placehold.co/400x300?text=Theatre",
      },
      {
        id: "a5",
        name: "Business Centre",
        image: "https://placehold.co/400x300?text=Business",
      },
      {
        id: "a6",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
    ],
  },

  {
    id: "proj_006",
    name: "FLAMANTE BY VTP LUXE",
    location: "Kharadi, Pune",
    status: "New Launch",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Flamante+Exterior",
        caption: "Front elevation",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Flamante+Lobby",
        caption: "Grand lobby",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Flamante+Living",
        caption: "Living room",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Flamante+Pool",
        caption: "Rooftop pool",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Flamante+by+VTP+Luxe+Overview",
      heading: "Passion crafted into architecture",
      description:
        "FLAMANTE by VTP Luxe is a dazzling ultra-luxury address in Kharadi — Pune's most dynamic real estate micro-market. With bold Spanish-inspired architecture, double-height lobbies, and residences finished with the finest imported materials, Flamante is a statement of passion and precision.",
    },

    highlights: [
      {
        icon: "star",
        title: "Smart Home Ready",
        description: "Alexa & Google Home compatible automation in every unit.",
      },
      {
        icon: "car",
        title: "EV Charging",
        description: "Dedicated EV charging bays in the basement parking.",
      },
      {
        icon: "key",
        title: "Concierge Service",
        description: "24×7 concierge for residents.",
      },
      {
        icon: "bolt",
        title: "24×7 Power Backup",
        description: "100% power backup for all common areas and apartments.",
      },
    ],

    unitPlans: [
      {
        configuration: "3 BHK",
        carpetAreaMin: 1700,
        carpetAreaMax: 2000,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 2300,
        carpetAreaMax: 2700,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "PENTHOUSE",
        carpetAreaMin: 4100,
        carpetAreaMax: 4500,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Rooftop Pool",
        image: "https://placehold.co/400x300?text=Rooftop+Pool",
      },
      {
        id: "a2",
        name: "Private Theatre",
        image: "https://placehold.co/400x300?text=Theatre",
      },
      {
        id: "a3",
        name: "Spa & Wellness",
        image: "https://placehold.co/400x300?text=Spa",
      },
      {
        id: "a4",
        name: "Business Centre",
        image: "https://placehold.co/400x300?text=Business",
      },
      {
        id: "a5",
        name: "Wine Cellar",
        image: "https://placehold.co/400x300?text=Wine+Cellar",
      },
      {
        id: "a6",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
    ],
  },

  {
    id: "proj_007",
    name: "VTP DOLCE VITA",
    location: "New Kharadi, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Dolce+Vita+Exterior",
        caption: "Tower exterior",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Dolce+Vita+Lobby",
        caption: "Grand lobby",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Dolce+Vita+Clubhouse",
        caption: "Clubhouse",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Dolce+Vita+Garden",
        caption: "Landscape garden",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=VTP+Dolce+Vita+Overview",
      heading: "The sweet life, reimagined",
      description:
        "VTP Dolce Vita brings the warmth of Italian living philosophy to New Kharadi. With vibrant community spaces, Mediterranean-inspired landscaping, and thoughtfully planned residences, Dolce Vita is designed for those who believe life is to be savoured — every single day.",
    },

    highlights: [
      {
        icon: "leaf",
        title: "Green Building",
        description: "IGBC certified with 42% open green spaces.",
      },
      {
        icon: "shield",
        title: "Vastu Compliant",
        description: "All units designed as per Vastu Shastra principles.",
      },
      {
        icon: "drop",
        title: "Rainwater Harvesting",
        description: "On-site rainwater harvesting and water recycling plant.",
      },
      {
        icon: "bolt",
        title: "24×7 Power Backup",
        description: "100% power backup for all common areas and apartments.",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 700,
        carpetAreaMax: 820,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1080,
        carpetAreaMax: 1280,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "3.5 BHK",
        carpetAreaMin: 1400,
        carpetAreaMax: 1550,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 1750,
        carpetAreaMax: 2000,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a2",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
      {
        id: "a3",
        name: "Amphitheatre",
        image: "https://placehold.co/400x300?text=Amphitheatre",
      },
      {
        id: "a4",
        name: "Kids Play Area",
        image: "https://placehold.co/400x300?text=Kids+Play",
      },
      {
        id: "a5",
        name: "Jogging Track",
        image: "https://placehold.co/400x300?text=Track",
      },
      {
        id: "a6",
        name: "Co-working Space",
        image: "https://placehold.co/400x300?text=Cowork",
      },
    ],
  },

  {
    id: "proj_008",
    name: "VTP EUPHORIA",
    location: "New Kharadi, Pune",
    status: "Ready to Move",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Euphoria+Facade",
        caption: "Tower facade",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Euphoria+Lobby",
        caption: "Grand lobby",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Euphoria+Clubhouse",
        caption: "Clubhouse",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Euphoria+Pool",
        caption: "Swimming pool",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=VTP+Euphoria+Overview",
      heading: "Feel it the moment you arrive",
      description:
        "VTP Euphoria is a ready-to-move premium residential community in New Kharadi, one of Pune's fastest-growing corridors. With meticulously designed homes, a fully operational clubhouse, and excellent social infrastructure nearby, Euphoria lets you start living your best life from day one.",
    },

    highlights: [
      {
        icon: "shield",
        title: "Gated Community",
        description: "3-tier security with CCTV surveillance 24×7.",
      },
      {
        icon: "bolt",
        title: "24×7 Power Backup",
        description: "100% power backup for all common areas and apartments.",
      },
      {
        icon: "leaf",
        title: "Green Building",
        description: "IGBC certified with 38% open green spaces.",
      },
      {
        icon: "drop",
        title: "Rainwater Harvesting",
        description: "On-site rainwater harvesting and water recycling plant.",
      },
    ],

    unitPlans: [
      {
        configuration: "2 BHK",
        carpetAreaMin: 660,
        carpetAreaMax: 790,
        unit: "sq.ft.",
        price: 7800000,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1020,
        carpetAreaMax: 1220,
        unit: "sq.ft.",
        price: 11000000,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 1600,
        carpetAreaMax: 1850,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a2",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
      {
        id: "a3",
        name: "Kids Play Area",
        image: "https://placehold.co/400x300?text=Kids+Play",
      },
      {
        id: "a4",
        name: "Multipurpose Hall",
        image: "https://placehold.co/400x300?text=Hall",
      },
      {
        id: "a5",
        name: "Jogging Track",
        image: "https://placehold.co/400x300?text=Track",
      },
      {
        id: "a6",
        name: "Landscaped Gardens",
        image: "https://placehold.co/400x300?text=Garden",
      },
    ],
  },

  {
    id: "proj_009",
    name: "VTP Codename Vibrance",
    location: "Baner Sus, Pune",
    status: "New Launch",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Vibrance+Render",
        caption: "Project render",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Vibrance+Amenity",
        caption: "Amenity deck",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Vibrance+Garden",
        caption: "Landscape garden",
      },
    ],

    overview: {
      image:
        "https://placehold.co/1200x600?text=VTP+Codename+Vibrance+Overview",
      heading: "A life full of colour and energy",
      description:
        "VTP Codename Vibrance is a vibrant new residential destination along the scenic Baner-Sus corridor. Designed to ignite every sense, the project offers colourful community spaces, wellness-focused amenities, and well-proportioned homes — all within easy reach of Baner's cafés, schools, and IT offices.",
    },

    highlights: [
      {
        icon: "leaf",
        title: "Green Building",
        description: "IGBC certified with 50% open green spaces.",
      },
      {
        icon: "sun",
        title: "Solar Powered",
        description: "Common areas powered by rooftop solar panels.",
      },
      {
        icon: "shield",
        title: "Vastu Compliant",
        description: "All units designed as per Vastu Shastra principles.",
      },
      {
        icon: "recycle",
        title: "Zero Waste",
        description: "On-site organic waste converter and recycling.",
      },
    ],

    unitPlans: [
      {
        configuration: "1 BHK",
        carpetAreaMin: 400,
        carpetAreaMax: 460,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "2 BHK",
        carpetAreaMin: 650,
        carpetAreaMax: 780,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "3 BHK",
        carpetAreaMin: 1000,
        carpetAreaMax: 1180,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Swimming Pool",
        image: "https://placehold.co/400x300?text=Pool",
      },
      {
        id: "a2",
        name: "Gymnasium",
        image: "https://placehold.co/400x300?text=Gym",
      },
      {
        id: "a3",
        name: "Yoga Deck",
        image: "https://placehold.co/400x300?text=Yoga",
      },
      {
        id: "a4",
        name: "Kids Play Area",
        image: "https://placehold.co/400x300?text=Kids+Play",
      },
      {
        id: "a5",
        name: "Jogging Track",
        image: "https://placehold.co/400x300?text=Track",
      },
      {
        id: "a6",
        name: "Multipurpose Hall",
        image: "https://placehold.co/400x300?text=Hall",
      },
    ],
  },

  {
    id: "proj_010",
    name: "Altamira by VTP Luxe",
    location: "Kharadi, Pune",
    status: "Under Construction",

    gallery: [
      {
        id: "g1",
        url: "https://placehold.co/800x500?text=Altamira+Tower",
        caption: "Tower render",
      },
      {
        id: "g2",
        url: "https://placehold.co/800x500?text=Altamira+Living",
        caption: "Living room",
      },
      {
        id: "g3",
        url: "https://placehold.co/800x500?text=Altamira+Kitchen",
        caption: "Modular kitchen",
      },
      {
        id: "g4",
        url: "https://placehold.co/800x500?text=Altamira+Balcony",
        caption: "Private balcony",
      },
      {
        id: "g5",
        url: "https://placehold.co/800x500?text=Altamira+Rooftop",
        caption: "Rooftop lounge",
      },
    ],

    overview: {
      image: "https://placehold.co/1200x600?text=Altamira+by+VTP+Luxe+Overview",
      heading: "Rise to the peak of refined living",
      description:
        "Altamira by VTP Luxe is a pinnacle of premium living in Kharadi. Inspired by the grandeur of ancient hilltop cities, Altamira offers sky-high residences with panoramic views, curated luxury amenities, and interiors finished with the world's finest materials — all in the heart of Pune's booming east.",
    },

    highlights: [
      {
        icon: "star",
        title: "Smart Home Ready",
        description: "Alexa & Google Home compatible automation in every unit.",
      },
      {
        icon: "car",
        title: "EV Charging",
        description: "Dedicated EV charging bays in the basement parking.",
      },
      {
        icon: "key",
        title: "Concierge Service",
        description: "24×7 concierge for residents.",
      },
      {
        icon: "wifi",
        title: "High-Speed Internet",
        description: "1 Gbps fibre pre-wired to every apartment.",
      },
    ],

    unitPlans: [
      {
        configuration: "3 BHK",
        carpetAreaMin: 1750,
        carpetAreaMax: 2050,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "4 BHK",
        carpetAreaMin: 2350,
        carpetAreaMax: 2750,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "SIMPLEX",
        carpetAreaMin: 2000,
        carpetAreaMax: 2200,
        unit: "sq.ft.",
        price: null,
      },
      {
        configuration: "PENTHOUSE",
        carpetAreaMin: 4300,
        carpetAreaMax: 4600,
        unit: "sq.ft.",
        price: null,
      },
    ],

    amenities: [
      {
        id: "a1",
        name: "Infinity Pool",
        image: "https://placehold.co/400x300?text=Infinity+Pool",
      },
      {
        id: "a2",
        name: "Private Theatre",
        image: "https://placehold.co/400x300?text=Theatre",
      },
      {
        id: "a3",
        name: "Spa & Wellness",
        image: "https://placehold.co/400x300?text=Spa",
      },
      {
        id: "a4",
        name: "Rooftop Lounge",
        image: "https://placehold.co/400x300?text=Rooftop",
      },
      {
        id: "a5",
        name: "Business Centre",
        image: "https://placehold.co/400x300?text=Business",
      },
      {
        id: "a6",
        name: "Wine Cellar",
        image: "https://placehold.co/400x300?text=Wine+Cellar",
      },
    ],
  },
];
