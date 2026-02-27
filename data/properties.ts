export type PropertyStatus = 'Ready' | 'Under Construction' | 'New Launch';

export type PropertyType =
  | 'Luxury Apartment'
  | 'Signature Villa'
  | 'Penthouse Residence'
  | 'Smart Home'
  | 'Investment Property';

export interface Amenity {
  id: string;
  label: string;
}

export interface FloorPlan {
  id: string;
  label: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
}

export interface LocationHighlight {
  label: string;
  distance: string;
  type: 'Education' | 'Business' | 'Healthcare' | 'Leisure' | 'Connectivity';
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  headline: string;
  location: string;
  city: string;
  country: string;
  startingPrice: string;
  badge?: string;
  status: PropertyStatus;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: string;
  featured: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: Amenity[];
  floorPlans: FloorPlan[];
  locationHighlights: LocationHighlight[];
}

export const properties: Property[] = [
  {
    id: 'ae-skyline-residence',
    slug: 'aurum-skyline-residences-lower-parel',
    name: 'Aurum Skyline Residences',
    headline: 'Panoramic city views with hotel-inspired comforts.',
    location: 'Lower Parel, Mumbai',
    city: 'Mumbai',
    country: 'India',
    startingPrice: '₹7.8 Cr onwards',
    badge: 'Skyline Residences',
    status: 'Under Construction',
    type: 'Luxury Apartment',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,950 – 2,350 sq.ft.',
    featured: true,
    heroImage:
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    description:
      'Aurum Skyline Residences blends elevated city living with hotel-inspired amenities. Each residence is oriented to maximise light, ventilation, and skyline vistas, while maintaining a calm, understated interior palette.',
    highlights: [
      'Double-height arrival lobby with concierge',
      'Sunset-facing decks with panoramic views',
      'Residents’ lounge, library and private meeting suites',
      'Temperature-controlled infinity edge pool on the 38th level'
    ],
    amenities: [
      { id: 'skyline-views', label: 'Panoramic Skyline Views' },
      { id: 'concierge', label: '24/7 Concierge & Security' },
      { id: 'club', label: 'Residents’ Club & Lounge' },
      { id: 'wellness', label: 'Wellness & Spa Suites' },
      { id: 'parking', label: 'Valet & Multi-level Parking' },
      { id: 'smart', label: 'Smart Access & Home Automation' }
    ],
    floorPlans: [
      {
        id: 'skyline-3bhk',
        label: '3-Bed Residence with Deck',
        area: '1,950 sq.ft.',
        bedrooms: 3,
        bathrooms: 3
      },
      {
        id: 'skyline-3bhk-large',
        label: '3-Bed Corner Residence',
        area: '2,250 sq.ft.',
        bedrooms: 3,
        bathrooms: 3
      }
    ],
    locationHighlights: [
      {
        label: 'High Street Retail & Dining',
        distance: '5–10 mins',
        type: 'Leisure'
      },
      {
        label: 'BKC & Nariman Point Business Districts',
        distance: '20–30 mins',
        type: 'Business'
      },
      { label: 'International Airport (T2)', distance: '35 mins', type: 'Connectivity' },
      {
        label: 'Leading Hospitals & Specialist Clinics',
        distance: '10–15 mins',
        type: 'Healthcare'
      }
    ]
  },
  {
    id: 'ae-villa-collection',
    slug: 'aurum-villa-collection-alibaug',
    name: 'Aurum Villa Collection',
    headline: 'Low-density villas framed by landscape and light.',
    location: 'Alibaug Coast, Maharashtra',
    city: 'Alibaug',
    country: 'India',
    startingPrice: '₹5.4 Cr onwards',
    badge: 'Signature Villas',
    status: 'Ready',
    type: 'Signature Villa',
    bedrooms: 4,
    bathrooms: 5,
    area: '4,200 – 5,600 sq.ft.',
    featured: true,
    heroImage:
      'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    description:
      'The Aurum Villa Collection is designed for families that value privacy, landscape and a slower pace. Each home is set within a generous private plot, with indoor-outdoor living at the heart of the plan.',
    highlights: [
      'Low-density gated community with controlled access',
      'Lush landscape design with mature planting',
      'Double-height living spaces opening to gardens and pools',
      'Dedicated staff accommodation and service access'
    ],
    amenities: [
      { id: 'pool', label: 'Private Pool & Deck' },
      { id: 'landscape', label: 'Curated Landscape Design' },
      { id: 'clubhouse', label: 'Residents’ Pavilion & Clubhouse' },
      { id: 'security', label: 'Multi-layer Security' },
      { id: 'solar', label: 'Solar & Sustainability Features' },
      { id: 'water', label: 'Dedicated Water Management' }
    ],
    floorPlans: [
      {
        id: 'villa-4bhk',
        label: '4-Bed Courtyard Villa',
        area: '4,200 sq.ft.',
        bedrooms: 4,
        bathrooms: 5
      },
      {
        id: 'villa-5bhk',
        label: '5-Bed Estate Villa',
        area: '5,600 sq.ft.',
        bedrooms: 5,
        bathrooms: 6
      }
    ],
    locationHighlights: [
      {
        label: 'Mumbai Ferry & Ro-Ro Jetty',
        distance: '20 mins',
        type: 'Connectivity'
      },
      {
        label: 'Beachfront Dining & Clubs',
        distance: '10–15 mins',
        type: 'Leisure'
      },
      {
        label: 'International Schools (Panvel Belt)',
        distance: '45–60 mins',
        type: 'Education'
      }
    ]
  },
  {
    id: 'ae-penthouse-edit',
    slug: 'aurum-penthouse-edit-bandra',
    name: 'Aurum Penthouse Edit',
    headline: 'Limited-edition penthouses with sweeping sea views.',
    location: 'Bandra West, Mumbai',
    city: 'Mumbai',
    country: 'India',
    startingPrice: '₹12.5 Cr onwards',
    badge: 'Limited Release',
    status: 'New Launch',
    type: 'Penthouse Residence',
    bedrooms: 4,
    bathrooms: 5,
    area: '3,200 – 3,800 sq.ft.',
    featured: true,
    heroImage:
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/37347/office-night-view-night-view-office-high-rise-building.jpg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    description:
      'A curated penthouse collection for a small circle of homeowners who prioritise privacy, views and finish quality. Private terraces, thoughtful zoning and considered materiality come together to create timeless city homes.',
    highlights: [
      'Sea-facing terraces with plunge pool options',
      'Private lift lobby for select residences',
      'Separate entertaining and family zones',
      'Finishes curated with leading design studios'
    ],
    amenities: [
      { id: 'view', label: 'Arabian Sea Views' },
      { id: 'private-lobby', label: 'Private Lift Lobby' },
      { id: 'gym', label: 'Residents’ Fitness Studio' },
      { id: 'security2', label: 'Discreet Security Management' },
      { id: 'smart2', label: 'Integrated Smart Home Grid' }
    ],
    floorPlans: [
      {
        id: 'penthouse-4bhk',
        label: '4-Bed Duplex Penthouse',
        area: '3,600 sq.ft.',
        bedrooms: 4,
        bathrooms: 5
      }
    ],
    locationHighlights: [
      { label: 'Bandra–Worli Sea Link', distance: '10 mins', type: 'Connectivity' },
      {
        label: 'Fine Dining & Boutique Retail',
        distance: '5–10 mins',
        type: 'Leisure'
      },
      {
        label: 'Grade-A Commercial Offices (BKC)',
        distance: '20 mins',
        type: 'Business'
      }
    ]
  }
];

export const locations = Array.from(
  new Set(properties.map((p) => p.city))
).sort();

export const propertyTypes = Array.from(
  new Set(properties.map((p) => p.type))
).sort();

