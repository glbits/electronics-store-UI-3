
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'l1',
    name: 'Lumix Pro Smart LED (B22)',
    category: 'Lighting',
    description: 'High-intensity smart LED bulb with 16 million colors. Designed with the standard B22 bayonet cap common in Indian households.',
    price: 699,
    image: 'https://img.tatacliq.com/images/i7/437Wx649H/MP000000010166188_437Wx649H_202112201805451.jpeg',
    features: ['ISI Certified', 'Voice Controlled (Hindi/English)', 'B22 Bayonet Cap'],
    specs: { 'Wattage': '9W', 'Lumens': '900lm', 'Voltage Range': '150V - 300V' },
    featured: true
  },
  {
    id: 'f1',
    name: 'AeroGlide High-Speed Fan',
    category: 'Fans',
    description: '100% pure copper motor with anti-rust powder coating. Designed for high air delivery even during peak Indian summers.',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1658989131447-301042cb9e33?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Double Ball Bearing', 'High Speed 400 RPM', 'Inverter Compatible'],
    specs: { 'Sweep': '1200mm', 'Air Delivery': '230 CMM', 'Power': '72W' },
    featured: true
  },
  {
    id: 'w1',
    name: 'TitanCore Fire-Retardant Wire',
    category: 'Wiring',
    description: 'ISI marked flame-retardant (FR) multi-strand copper wires. Ensuring safety for heavy load Indian appliances like ACs and Geysers.',
    price: 1850,
    image: 'https://media.istockphoto.com/id/1181288496/photo/inter-continental-internet-cable-cut-off-underwater-cable-showing-inside-isolated-on-white-3d.jpg?s=2048x2048&w=is&k=20&c=op2M2lz-nBsCE6ppGBJLyRYUlyHie0g-kaHka6Q6_hs=',
    features: ['99.9% Electrolytic Copper', 'Flame Retardant PVC', 'Anti-Termite Coating'],
    specs: { 'Gauge': '2.5 sq mm', 'Length': '90m Coil', 'Standard': 'IS 694' }
  },
  {
    id: 'c1',
    name: 'Sentinel 4K Pro CCTV Kit',
    category: 'CCTV',
    description: 'Full HD surveillance with night vision. Ideal for securing Indian bungalows and commercial shops with remote mobile viewing.',
    price: 12500,
    image: 'https://media.istockphoto.com/id/948491822/photo/milano-italy-22-june-2017-security-cctv-camera-or-surveillance-system-in-office-building-in.jpg?s=2048x2048&w=is&k=20&c=H3moxETpwod3ASDIvrpQ9CXiqmuWPkS_GXqfPAsaxcg=',
    features: ['Color Night Vision', 'Audio Recording', 'Weatherproof IP67'],
    specs: { 'Resolution': '4MP UHD', 'Channels': '4 Channel DVR', 'Storage': '1TB HDD Included' },
    featured: true
  },
  {
    id: 'sw1',
    name: 'Aura Glass Modular Switch',
    category: 'Switches',
    description: 'Elegant tempered glass touch switches. Fits perfectly into standard Indian modular metal boxes.',
    price: 1250,
    image: 'https://plus.unsplash.com/premium_photo-1745600338356-bda3325e8173?q=80&w=843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Scratch Resistant Glass', 'LED Indicator', 'Shockproof Design'],
    specs: { 'Rating': '6A / 16A', 'Modules': '2 Module Size', 'Color': 'Arctic White' }
  },
  {
    id: 's1',
    name: 'SmartPlug Pro (Type D)',
    category: 'Smart Home',
    description: '16A Smart plug for heavy appliances like geysers and ACs. Features the standard 3-pin Type D Indian plug.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1763543033943-d5c2ff70aadd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Surge Protection', 'Energy Monitoring', 'Siri/Alexa Compatible'],
    specs: { 'Max Load': '16A', 'Pin Type': 'Standard Indian 3-Pin', 'WiFi': '2.4GHz' }
  },
  {
    id: 'f2',
    name: 'StormForce Exhaust Fan',
    category: 'Fans',
    description: 'Heavy-duty metallic exhaust fan for kitchens and bathrooms. High suction capacity to handle Indian cooking fumes.',
    price: 1800,
    image: 'https://plus.unsplash.com/premium_photo-1677172408819-a493426f6e10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Bird Guard Included', 'Metallic Blades', 'High Suction'],
    specs: { 'Size': '225mm (9 inch)', 'Speed': '1350 RPM', 'Body': 'Steel' }
  },
  {
    id: 'l2',
    name: 'Heritage Festive Filament',
    category: 'Lighting',
    description: 'Warm amber glow Edison bulbs. Perfect for Diwali decor, restaurants, and boutique Indian homes.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1577889230500-1fdf53117fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Aesthetic Design', 'E27 Base', 'Dimmable'],
    specs: { 'Wattage': '4W LED', 'Color Temp': '2200K', 'Life': '15,000 hrs' }
  }
];

export const CATEGORIES: string[] = ['All', 'Lighting', 'Fans', 'Wiring', 'Industrial', 'Smart Home', 'CCTV', 'Switches', 'Accessories'];

export const GALLERY_ITEMS = [
  { url: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop', title: 'Luxury Apartment, Mumbai', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop', title: 'Textile Factory, Surat', category: 'Industrial' },
  { url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop', title: 'Tech Park Installation, Bangalore', category: 'Industrial' },
  { url: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop', title: 'Smart Villa, Pune', category: 'Smart Home' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', title: 'Designer Kitchen, Delhi', category: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1595113316349-9fa404641880?q=80&w=800&auto=format&fit=crop', title: 'Retail Mall Security, Hyderabad', category: 'CCTV' }
];
