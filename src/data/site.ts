export const site = {
  name: 'VAKAMOO',
  tagline: 'A Fusion Restaurant',
  url: 'https://vakamoo.com',
  phone: '+1 410-5528019',
  email: 'info@vakamoo.com',
  address: '6300 Georgetown town Blvd. Suite 103',
  addressLine2: 'Eldersburg MD 21784',
  description:
    'Japanese & Caribbean Fusion — Two cultures. One Kitchen. Endless flavor. Perfect blend of Sushi and Sazón in Eldersburg, MD.',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61581319640379',
    instagram: 'https://www.instagram.com/vakamoo_/',
  },
  logo: '/media/logo.png',
  favicon: '/media/favicon.png',
  ogImage: '/media/hero.jpg',
  heroImage: '/media/hero.jpg',
  ctaBg: '/media/cta-bg.jpg',
  hiringBg: '/media/hiring-bg.png',
  comingSoonPopup: '/media/coming-soon-popup.jpg',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/menu/', label: 'Menu' },
  { href: '/about-us/', label: 'About Us' },
];

export const dishes = [
  {
    name: 'Mar y Tierra',
    price: '$60',
    image: '/media/dishes/mar-y-tierra.jpg',
    description:
      'The ultimate surf and turf experience. A juicy 10 oz grilled Churrasco steak, paired with tender sautéed shrimp and a succulent lobster tail, served over creamy yucca mash and seasonal vegetables. Finished with a generous drizzle of our signature Ninja Sauce.',
  },
  {
    name: 'Karol G Roll',
    price: '$17',
    image: '/media/dishes/karol-g-roll.jpg',
    description: 'Shrimp Tempura, Cream Cheese, Sweet Plantains, Guacamole & Ropa Vieja',
  },
  {
    name: 'El Final',
    price: '$16',
    image: '/media/dishes/el-final.jpg',
    description:
      "Chef Ninja’s signature tower of flavor: your choice of grilled chicken or steak, layered with sweet fried maduros, fresh avocado slices, and topped with vibrant passionfruit (chinola) sauce and pico de gallo.",
  },
];

export const gallery = Array.from({ length: 12 }, (_, i) => {
  const n = i + 1;
  return {
    full: `/media/gallery/${n}.jpg`,
    thumb: `/media/gallery/${n}-thumb.jpg`,
  };
});

export const faqs = [
  {
    q: 'What type of cuisine does Vakamoo Restaurant offer?',
    a: 'Vakamoo Restaurant serves a unique selection of flavorful dishes made with fresh ingredients and authentic recipes — Japanese and Caribbean fusion.',
  },
  {
    q: 'Do you offer dine-in, takeout, and delivery?',
    a: 'Yes. You can enjoy our food in the restaurant, order takeout, or have it delivered to your door.',
  },
  {
    q: 'Do you have options for special dietary needs?',
    a: 'We offer a variety of menu items and are happy to accommodate dietary preferences whenever possible.',
  },
  {
    q: 'Can I make a reservation?',
    a: 'Yes, reservations are welcome. Contact us to secure your table and enjoy a hassle-free dining experience.',
  },
  {
    q: 'Do you host private events or large groups?',
    a: 'Absolutely. We can accommodate celebrations, family gatherings, business meetings, and special occasions.',
  },
  {
    q: 'What are your hours of operation?',
    a: 'Our hours may vary by day. Please contact us or check our social media pages for the latest schedule and updates.',
  },
];

export const menuCategories = [
  { label: 'Appetizers', href: '/menu/?cat=appetizers' },
  { label: 'Sushi Aplatanao', href: '/menu/?cat=sushi-aplatanao' },
  { label: 'Ninja Platters', href: '/menu/?cat=ninja-platters' },
  { label: 'Traditional Rolls', href: '/menu/?cat=traditional-rolls' },
  { label: 'Main Courses', href: '/menu/?cat=main-courses' },
];

export const chefBio = {
  name: 'Mitsuhisa Nishio',
  title: 'El Ninja',
  image: '/media/chef-el-ninja.png',
  paragraphs: [
    'Mitsuhisa Nishio, widely known as “El Ninja” or “Daddy Ninja,” is a celebrated chef specializing in Asian-Latin fusion cuisine. Born in the Dominican Republic to Japanese parents, he masterfully blends the flavors of his dual heritage, creating unique dishes like sushi topped with sweet plantains.',
    'His culinary journey began in New York, where he developed a menu for an Asian-Latin bar in 2003 and quickly gained recognition for his innovative approach. Over the years, he built a loyal following, earning fame for his signature creations and vibrant personality — known as “El Rey del Sushi Aplatanao.”',
  ],
};

export const aboutCopy = {
  paragraphs: [
    'Vaka-Moo is a locally owned restaurant that celebrates the rich flavors and vibrant culture of the Caribbean. Designed for those who crave something deliciously different, Vaka-Moo offers a unique and authentic culinary experience that transports you straight to the islands.',
    'Our guests can expect bold, savory dishes made from scratch daily, served in a welcoming, family-friendly, full-service setting. Located in the Baltimore, Howard, and Carroll County areas, Vaka-Moo brings the best of both worlds: incredible flavor at a great price.',
    'At Vaka-Moo, it’s not just a meal — it’s a taste of Japanese and Latin fusion.',
  ],
  pillars: [
    'Pure, additive-free & wholesome cooking',
    'Artful presentation with exceptional taste',
    'Locally harvested & sustainably sourced produce',
    'Cozy ambience designed for memorable dining',
  ],
};

export const team = [
  {
    name: 'Mitsuhisa Nishio',
    alias: '“El Ninja”',
    role: 'Head Chef',
    image: '/media/chef-el-ninja.png',
  },
  {
    name: 'Jose Gregorio Ávila',
    alias: '',
    role: 'Sous Chef',
    image: '/media/sous-chef.png',
  },
];

export const positions = [
  'Servers',
  'Bussers',
  'Host',
  'Cooks',
  'Sushi Chefs',
  'Dishwashers',
  'Other',
];

export const socialProof = {
  label: 'Loved by 10k+ food lovers.',
  years: { value: '20+', label: 'Years of experience' },
};

export const orderCta = {
  title: 'Experience premium flavors when you order right now.',
  body: 'Searching for a restaurant that values both taste and sustainability? Explore our eco-friendly dining options.',
  cta: 'Book a Table',
  href: '/contact-us/',
};

export const reviews = {
  eyebrow: 'Client Review',
  title: 'Hear from Our Satisfied Client.',
  items: [
    {
      quote:
        'Delicious food, warm ambiance, and excellent service. Every meal feels thoughtfully prepared, making each visit truly enjoyable.',
      name: 'David Carter',
      role: 'Customer',
    },
    {
      quote:
        'Fresh ingredients, rich flavors, and quick service. This restaurant delivers quality consistently and never disappoints in any way.',
      name: 'Michael Anderson',
      role: 'Customer',
    },
    {
      quote:
        'Beautifully presented dishes, balanced taste, and friendly staff. A perfect spot for anyone seeking premium dining experiences.',
      name: 'Ethan Miller',
      role: 'Customer',
    },
    {
      quote:
        'Amazing flavors, timely service, and impressive quality. Every order arrives fresh, making it my trusted go-to place.',
      name: 'James Wilson',
      role: 'Customer',
    },
    {
      quote:
        'Perfectly cooked meals, elegant presentation, and professional service. A reliable choice for enjoyable and memorable dining moments.',
      name: 'Robert Harris',
      role: 'Customer',
    },
  ],
};

export const whyChoose = {
  eyebrow: 'Why Choose Us',
  title: 'Why Our Restaurant Stands Above the Rest.',
  body: 'Our commitment to quality ingredients, exceptional service, and unique flavors sets us apart consistently.',
  points: [
    'Skilled & Passionate Chefs',
    'Unique & Delicious Flavors',
    'Exceptional Customer Service',
    'Innovative & Seasonal Menus',
    'Quick & Efficient Service',
  ],
  stats: [
    { value: '200+', label: 'Happy Clients' },
    { value: '250+', label: 'Positive Reviews' },
  ],
};
