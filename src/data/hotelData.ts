export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePKR: number;
  pricePerNight: string;
  image: string;
  size: string;
  bedType: string;
  view: string;
  maxGuests: string;
  features: string[];
  detailedInclusions: string[];
  description: string;
}

export interface MenuItem {
  name: string;
  description: string;
  pricePKR: number;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  category: string;
  items: MenuItem[];
}

export interface ReviewItem {
  id: string;
  author: string;
  city: string;
  stayDate: string;
  roomType: string;
  rating: number;
  comment: string;
}

export const HOTEL_INFO = {
  name: "GRAND HOLIDAY HOTEL",
  subname: "FIZAGAT • MINGORA, SWAT",
  tagline: "Comfortable Riverside Stay in the Heart of Fizagat, Swat",
  address: "Main Bypass Road, Fizagat, Mingora, Swat, KPK, Pakistan",
  phonePrimary: "+92 300 588 6699",
  phoneLandline: "+92 946 712345",
  whatsappNumber: "+923005886699",
  whatsappDisplay: "+92 300 588 6699",
  email: "reservations@grandholidayswat.com",
  checkInTime: "02:00 PM",
  checkOutTime: "12:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fizagat+Mingora+Swat+Pakistan",
  coordinates: "34.7892° N, 72.3614° E",
};

export const ROOMS: RoomType[] = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    tagline: "Ideal for Couples & Solo Travelers",
    pricePKR: 6000,
    pricePerNight: "PKR 6,000",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
    size: "240 sq. ft",
    bedType: "1 King Bed",
    view: "Mountain & Valley View",
    maxGuests: "2 Adults",
    features: [
      "1 King Bed with Clean Linen",
      "24/7 Hot Water (Garam Paani)",
      "Free High-Speed Wi-Fi & LED TV"
    ],
    detailedInclusions: [
      "1 Comfortable King Bed with clean linen",
      "Attached private washroom with 24/7 hot water",
      "Flat screen LED TV with cable",
      "Free high-speed Wi-Fi access",
      "24/7 generator backup for electricity",
      "Daily room cleaning service"
    ],
    description: "Clean, comfortable room with king bed, attached bathroom with hot water, and free Wi-Fi."
  },
  {
    id: "executive-river",
    name: "Executive River View Room",
    tagline: "Ideal for Families & River View Lovers",
    pricePKR: 8500,
    pricePerNight: "PKR 8,500",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    size: "320 sq. ft",
    bedType: "1 King Bed",
    view: "Direct Swat River View",
    maxGuests: "2 Adults + 1 Child",
    features: [
      "Private Balcony with Swat River View",
      "Sitting Area & Flat Screen TV",
      "24/7 Hot Water & Power Backup"
    ],
    detailedInclusions: [
      "Private open balcony with direct views of the Swat River",
      "1 King Bed with comfortable mattress",
      "Sitting chairs with tea table",
      "Attached tiled washroom with hot water",
      "24/7 heavy generator power backup",
      "Direct room service from in-house kitchen"
    ],
    description: "Enjoy river breezes and views from your private balcony with 24/7 hot water and generator backup."
  },
  {
    id: "family-quad",
    name: "Family Quad Room (4 Bed)",
    tagline: "Ideal for Large Families & Groups",
    pricePKR: 11500,
    pricePerNight: "PKR 11,500",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    size: "450 sq. ft",
    bedType: "2 Double Beds",
    view: "River & Valley Vistas",
    maxGuests: "4 - 5 Guests",
    features: [
      "2 Double Beds (Sleeps 4 Comfortably)",
      "Attached Washroom & Dining Table",
      "24/7 Hot Water & Room Service"
    ],
    detailedInclusions: [
      "Two full double beds with clean blankets & pillows",
      "Spacious layout with ample luggage space",
      "Attached modern washroom with hot water",
      "Dining table for private family meals",
      "Flat screen LED TV with regional channels",
      "Dedicated room service for tea & dinner",
      "Uninterrupted generator power backup"
    ],
    description: "Spacious family room with two double beds accommodating 4-5 guests with attached bath and dining area."
  }
];

export const AMENITIES = [
  {
    title: "24/7 Hot Water (Garam Paani)",
    subtitle: "Commercial Geysers",
    description: "Steaming hot water anytime for relaxing showers after mountain trips."
  },
  {
    title: "Heavy Generator Backup",
    subtitle: "100% Load-Shedding Free",
    description: "Continuous power for lights, TV, Wi-Fi, and mobile charging."
  },
  {
    title: "In-House Restaurant",
    subtitle: "Swat Trout Fish & BBQ",
    description: "Fresh Swat river trout, chicken karahi, and evening BBQ made fresh."
  },
  {
    title: "Secure On-Site Parking",
    subtitle: "Gated with 24/7 Guard",
    description: "Spacious private parking for cars and family SUVs right on-premises."
  },
  {
    title: "Free High-Speed Wi-Fi",
    subtitle: "All Rooms Covered",
    description: "Reliable internet in every room to stay connected with family."
  },
  {
    title: "2 Mins from Fizagat Park",
    subtitle: "Riverside Promenade",
    description: "Instant walk to the fresh riverbank breeze and park grounds."
  }
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "river-specialties",
    category: "Swat River Specialties",
    items: [
      {
        name: "Crispy Fried Swat River Trout",
        description: "Freshly caught local river trout fried with Swati spices, served with mint chutney and hot naan.",
        pricePKR: 1950,
        isPopular: true
      },
      {
        name: "Charcoal Grilled Trout Fish",
        description: "Whole fresh river trout grilled over wood embers with lemon butter and coriander.",
        pricePKR: 2150,
        isPopular: true
      }
    ]
  },
  {
    id: "karahi-bbq",
    category: "Karahi & Live BBQ",
    items: [
      {
        name: "Shinwari Chicken Karahi (1 KG)",
        description: "Cooked with fresh tomatoes, green chilies, and pure ghee. No artificial spices.",
        pricePKR: 1850,
        isPopular: true
      },
      {
        name: "Charcoal Chicken Malai Boti",
        description: "Tender boneless chicken morsels marinated in fresh cream and mild spices.",
        pricePKR: 1100,
        isPopular: true
      }
    ]
  },
  {
    id: "breakfast-tea",
    category: "Breakfast & Tea",
    items: [
      {
        name: "Swati Desi Breakfast",
        description: "Two crispy parathas, two eggs (fried/omelette), chana masala, and doodh patti chai.",
        pricePKR: 650,
        isPopular: true
      },
      {
        name: "Peshawari Cardamom Kahwa",
        description: "Green tea brewed with whole cardamom and rock sugar.",
        pricePKR: 180,
        isPopular: true
      }
    ]
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Kamran Aslam",
    city: "Lahore",
    stayDate: "September 2026",
    roomType: "Executive River View",
    rating: 5,
    comment: "Perfect location right in Fizagat. Swat River view from balcony was stunning and 24/7 hot water was always ready."
  },
  {
    id: "rev-2",
    author: "Dr. Tariq & Family",
    city: "Islamabad",
    stayDate: "August 2026",
    roomType: "Family Quad Room",
    rating: 5,
    comment: "Very safe for family, easy parking for our Prado, and the fresh river trout at the hotel restaurant was delicious."
  },
  {
    id: "rev-3",
    author: "Ayesha Malik",
    city: "Karachi",
    stayDate: "July 2026",
    roomType: "Deluxe Double Room",
    rating: 5,
    comment: "Clean rooms, quiet river breeze, and just a 2-minute walk to Fizagat Park. Excellent value for money."
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "Fizagat Park & River Walk",
    distance: "2 min walk (200m)",
    description: "Riverside recreational park with walking tracks."
  },
  {
    name: "Mingora Bazaar",
    distance: "8 min drive (3.2 km)",
    description: "Shopping hub for Swati shawls, gems, and crafts."
  },
  {
    name: "Swat Museum & Saidu Sharif",
    distance: "10 min drive (4.5 km)",
    description: "Ancient Gandhara archaeological heritage."
  },
  {
    name: "Malam Jabba Ski Resort",
    distance: "45 km (~1.5 hrs)",
    description: "Mountain chairlift, ski slope, and zip-line."
  },
  {
    name: "Kalam Valley",
    distance: "95 km (~3 hrs)",
    description: "Scenic pine forests and mountain streams."
  }
];

export function buildWhatsAppLink(params: {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  customMessage?: string;
}): string {
  const { roomName, checkIn, checkOut, guests, customMessage } = params;
  let text = "Hello Grand Holiday Hotel Fizagat, Swat!\n\n";

  if (customMessage) {
    text += customMessage;
  } else {
    text += "I would like to inquire about room rates & availability:\n";
    if (roomName) text += `• Room: ${roomName}\n`;
    if (checkIn) text += `• Check-in: ${checkIn}\n`;
    if (checkOut) text += `• Check-out: ${checkOut}\n`;
    if (guests) text += `• Guests: ${guests}\n`;
    text += "\nPlease share room availability and family discount. Thank you!";
  }

  const encoded = encodeURIComponent(text);
  return `https://wa.me/923005886699?text=${encoded}`;
}
