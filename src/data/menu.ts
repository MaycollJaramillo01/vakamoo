export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  raw?: boolean;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategoriesFull: MenuCategory[] = [
  {
    id: 'appetizers',
    label: 'Appetizers',
    items: [
      {
        name: "Ninja’s Arepitas",
        price: '$16',
        description:
          'Golden crispy corn cakes topped with creamy guacamole and crumbled feta, finished with your choice of slow-braised Ropa Vieja or crispy pork Chicharrón.',
      },
      {
        name: 'La Yola',
        price: '$18',
        description:
          'Our signature sweet plantain canoe loaded with shrimp topped by our famous Ninja Sauce — a tropical fusion bite you won’t forget.',
      },
      {
        name: 'El Final',
        price: '$16',
        description:
          'Chef Ninja’s signature tower of flavor: your choice of grilled chicken or steak, layered with sweet fried maduros, fresh avocado slices, and topped with vibrant passionfruit (chinola) sauce and pico de gallo.',
      },
      {
        name: "Ninja’s Conconcitos",
        price: '$16',
        description:
          'A trio of crispy rice baskets with a kiss of sweet chili, filled with fresh guacamole and your choice of Ropa Vieja, Shrimp, or Shredded Chicken — small bites, big flavor.',
      },
      {
        name: 'Moo-Mofonguitos',
        price: '$16',
        description:
          'Crispy fried yucca baskets filled with your choice of Ropa Vieja, Shrimp, or Teriyaki Chicken, blending Caribbean crunch with bold Asian flavor.',
      },
      {
        name: 'Asian Chicharron',
        price: '$15',
        description: 'Asian-style fried pork belly drizzled with a sweet chilli glaze.',
      },
      {
        name: 'Gyoza',
        price: '$12',
        description: 'Japanese fried chicken dumplings.',
      },
      {
        name: 'Crispy Rice Cakes',
        price: '$16',
        description: 'Fried rice cakes accompanied by delicately seasoned tuna tartar.',
        raw: true,
      },
      {
        name: 'Pulpo a la Parrilla',
        price: '$24',
        description:
          'Grilled octopus marinated in garlic teriyaki, served with crispy papas bravas and a drizzle of bold chimichurri — smoky, tender, unforgettable.',
      },
      {
        name: "Ninja’s Ceviche",
        price: '$18',
        description:
          'Shrimps and white fish ceviche topped with fried seafood in a ceviche sauce, accompanied by malanga chips.',
        raw: true,
      },
      {
        name: 'Hamachi Jalapeño',
        price: '$18',
        description: 'Yellowtail, jalapeño, dressed in a housemade Latin yuzu sauce.',
      },
      {
        name: 'Tropical Tuna Tartar',
        price: '$18',
        description:
          'Fresh wild-caught tuna mixed with creamy avocado and sweet mango, finished with spicy mayo — a vibrant Latin-Asian fusion in every spoonful.',
        raw: true,
      },
      {
        name: 'Shrimp Tempura',
        price: '$13',
        description:
          'Light and crispy shrimp tempura, served with our signature sweet chili dipping sauce — a craveable crunchy starter.',
      },
      {
        name: 'Crispy Calamari',
        price: '$14',
        description: 'Tempura fried calamari rings with creamy chipotle aioli.',
      },
      {
        name: 'Edamame',
        price: '$8',
        description: 'Steamed sea salted or spicy green pea pods.',
      },
    ],
  },
  {
    id: 'sushi-aplatanao',
    label: 'Sushi Aplatanao',
    items: [
      {
        name: 'La Ceiba Roll',
        price: '$18',
        description: 'Shrimp Tempura, Cream Cheese, Sweet Plantains, Guacamole & Mixed Seafood',
      },
      {
        name: 'Maryland Roll',
        price: '$17',
        description: 'Shrimp Tempura, Cream Cheese, Sweet Plantains, Guacamole & Crab Meat',
      },
      {
        name: 'Roatan Island Roll',
        price: '$20',
        description:
          'Lobster Meat, Shrimp Tempura, Sweet Plantains, Avocado, Kani, Ninja Sauce with Guacamole & Chips',
      },
      {
        name: 'El Chapo Roll',
        price: '$20',
        description:
          'Chicken Tempura, Mozzarella, Bacon, Sweet Plantains, Deep Fried in Doritos, Guacamole & Ropa Vieja',
      },
      {
        name: 'El Bukele Roll',
        price: '$16',
        description: 'Chicken Tempura, Cream Cheese, Sweet Plantains, Guacamole & Chicharrón',
      },
      {
        name: "Chiqui's Roll",
        price: '$17',
        description: 'Salami, Queso Frito, Sweet Plantains, Guacamole, Sweet Asian Beef & Chimichurri',
      },
      {
        name: 'No Bulto Roll',
        price: '$17',
        description: 'Steak, Grilled Chicken, Cream Cheese, Sweet Plantains, Guacamole & Chimichurri',
      },
      {
        name: '504 Roll',
        price: '$16',
        description: 'Chicken Tempura, Cream Cheese, Sweet Plantains, Guacamole & Ropa Vieja',
      },
      {
        name: 'Karol G Roll',
        price: '$17',
        description: 'Shrimp Tempura, Cream Cheese, Sweet Plantains, Guacamole & Ropa Vieja',
      },
      {
        name: 'El Fokin Ninja Roll',
        price: '$16',
        description: 'Chicken Tempura, Bacon, Sweet Plantains, Guacamole & Shredded Chicken Teriyaki',
      },
      {
        name: 'El Ninjiviri',
        price: '$16',
        description: 'Shrimp Tempura, Queso Frito, Sweet Plantains, Ninja Sauce',
      },
      {
        name: 'Constanza Roll',
        price: '$14',
        description: 'Avocado, Cucumber, Sweet Plantains, Guacamole & Chimichurri',
      },
      {
        name: 'La Krunchi Roll',
        price: '$18',
        description: 'Shrimp Tempura, Sweet Plantains, Mozzarella Cheese, Bacon (Deep Fried), Ninja Sauce',
      },
      {
        name: 'New York Roll',
        price: '$15',
        description: 'Shrimp Tempura, Bacon, Cream Cheese, Sweet Plantains & Guacamole',
      },
      {
        name: 'El Domi Roll',
        price: '$14',
        description: 'Salami, Queso Frito & Sweet Plantains',
      },
      {
        name: 'Japanese Lover Roll',
        price: '$17',
        description: 'Churrasco, Bacon, Cream Cheese, Sweet Plantains, Guacamole & Chimichurri',
      },
      {
        name: 'Volcano Roll',
        price: '$17',
        description: 'Shrimp Tempura, Cream Cheese, Avocado, Spicy Kani',
      },
    ],
  },
  {
    id: 'ninja-platters',
    label: 'Ninja Platters',
    note: 'Chef selection — perfect for sharing.',
    items: [
      {
        name: 'Ninja Platter',
        price: '$100',
        description: '3 sushi + 5 appetizers (chef selection). Serves 3–5 people.',
      },
      {
        name: 'Ninja Platter Grande',
        price: '$140',
        description: '5 sushi + 6 appetizers (chef selection). Serves 5–7 people.',
      },
    ],
  },
  {
    id: 'traditional-rolls',
    label: 'Traditional Rolls',
    items: [
      {
        name: 'Kanagawa Roll',
        price: '$15',
        description: 'Kani Salad, Cucumber, Avocado, Wakame, Tobiko',
        raw: true,
      },
      {
        name: 'Eldersburg Roll',
        price: '$16',
        description: 'Shrimp Tempura, Avocado, Mango, Eel Sauce',
        raw: true,
      },
      {
        name: 'Terokomo Roll',
        price: '$17',
        description: 'Kani Salad, Avocado, Smoked Salmon, Tobiko',
        raw: true,
      },
      {
        name: 'Baltimore Roll',
        price: '$14',
        description: 'Kani, Cucumber, Cream Cheese, Sweet Plantains, Guacamole, Crab Meat',
        raw: true,
      },
      {
        name: 'Aloha Roll',
        price: '$16',
        description: 'Spicy Tuna, Kani, Avocado, Pineapple',
        raw: true,
      },
      {
        name: 'Samurai Roll',
        price: '$16',
        description: 'Salmon, Cucumber, Smoked Salmon, Avocado, Tobiko',
        raw: true,
      },
      {
        name: 'California',
        price: '$10',
        description: 'Kani, Avocado, Cucumber',
        raw: true,
      },
      { name: 'Spicy Tuna', price: '$12', raw: true },
      {
        name: 'Philadelphia',
        price: '$10',
        description: 'Salmon, Cucumber, Cream Cheese',
        raw: true,
      },
      { name: 'Spicy Salmon', price: '$10', raw: true },
      { name: 'Shrimp Tempura Roll', price: '$10' },
      {
        name: 'Rainbow Roll',
        price: '$16',
        description: 'Kani, Cucumber, Avocado, Tuna, Salmon',
        raw: true,
      },
      {
        name: 'Geisha Roll',
        price: '$18',
        description: 'Tuna, Salmon, Avocado (Deep Fried)',
        raw: true,
      },
    ],
  },
  {
    id: 'main-courses',
    label: 'Main Courses',
    items: [
      {
        name: 'Ninja Mar y Tierra',
        price: '$60',
        description:
          'The ultimate surf and turf experience. A juicy 10 oz grilled Churrasco steak, paired with tender sautéed shrimp and a succulent lobster tail, served over creamy yucca mash and seasonal vegetables. Finished with a generous drizzle of our signature Ninja Sauce.',
      },
      {
        name: "Ninja’s Churrasco",
        price: '$36',
        description:
          '10 oz of grilled skirt steak, marinated and seared to perfection. Served with creamy yucca mash and seasonal vegetables — a hearty, flavorful favorite.',
      },
      {
        name: 'Salmon in Paradise',
        price: '$38',
        description:
          'Succulent grilled salmon paired with sautéed shrimp, served over mashed potatoes and vegetables, all brought together by a vibrant passion fruit sauce.',
      },
      {
        name: 'Pollo Ninja',
        price: '$26',
        description:
          'Grilled chicken breast topped with a rich and smoky creamy bacon sauce, served with a tower of crispy sweet maduros — comfort food with a tropical twist.',
      },
      {
        name: 'Pescado Samana',
        price: 'Market Price',
        description:
          'A whole crispy fried red snapper, served traditional-style with golden tostones and a fresh house salad — inspired by the coastal kitchens of Samaná.',
      },
      {
        name: "Ninja’s Ribeye",
        price: '$55',
        description:
          'A 12 oz Ribeye Steak, expertly seared and served with yucca mash, vegetables, and a bold Brugal rum demi-glace — Dominican spirit meets steakhouse classic.',
      },
      {
        name: 'Grilled Salmon',
        price: '$30',
        description:
          'Fresh grilled salmon, served with mashed potatoes, sautéed vegetables, and drizzled with our signature passionfruit glaze.',
      },
      {
        name: 'Ninja Fongo — Camarones',
        price: '$30',
        description: 'Our signature taste — mofongo made your way, with shrimp.',
      },
      {
        name: 'Ninja Fongo — Churrasco',
        price: '$36',
        description: 'Our signature taste — mofongo made your way, with skirt steak.',
      },
      {
        name: 'Ninja Fongo — Pollo',
        price: '$26',
        description: 'Our signature taste — mofongo made your way, with chicken.',
      },
      {
        name: 'Ninja Fongo — Marisco',
        price: '$38',
        description: 'Our signature taste — mofongo made your way, with seafood mix.',
      },
      {
        name: 'Chicken Teriyaki',
        price: '$26',
        description:
          'Tender grilled chicken glazed in a rich, house-made teriyaki sauce, served alongside asparagus and sweet fried plantains for a perfect balance of sweet and umami-packed flavor.',
      },
      {
        name: 'Ninja Chofan',
        price: '$15+',
        description:
          'Latin-style fried rice with Chinese vegetables, sweet plantains, and eggs. Plain $15 · Chicken +$6 · Shrimp +$8 · Churrasco +$8',
      },
      {
        name: 'Yakisoba',
        price: '$16+',
        description:
          'Japanese stir-fried noodles with choice of Chicken +$6 · Shrimp +$8 · Churrasco +$8',
      },
    ],
  },
  {
    id: 'sides',
    label: 'Sides',
    items: [
      { name: 'Rice & Beans', price: '$7' },
      { name: 'Tostones', price: '$7' },
      { name: 'Maduros', price: '$7' },
      { name: 'Veggies', price: '$7' },
      { name: 'French Fries', price: '$7' },
      { name: 'Yucca Fries', price: '$7' },
      { name: 'Yucca Mash', price: '$7' },
      { name: 'Mashed Potatoes', price: '$7' },
    ],
  },
  {
    id: 'salads-soups',
    label: 'Salads & Soups',
    note: 'Salads served with our Ninja Ginger Dressing or Balsamic Dressing.',
    items: [
      { name: 'Miso Soup', price: '$8' },
      { name: 'Dumpling Soup', price: '$12' },
      { name: 'Kani Salad', price: '$14' },
      { name: 'Wakame Salad', price: '$8' },
      {
        name: 'House Salad',
        price: '$12',
        description:
          'Mixed greens, onions, peppers, carrots, dressed in Asian raspberry vinaigrette.',
      },
    ],
  },
  {
    id: 'kids',
    label: 'Kids',
    items: [
      {
        name: 'Pikachu Roll',
        price: '$10',
        description: 'Chicken Tempura, Bacon & Sweet Plantains',
      },
      { name: 'Chicken Fingers & French Fries', price: '$10' },
      { name: 'Hamburger & French Fries', price: '$10' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    note: 'To be decided.',
    items: [],
  },
  {
    id: 'beverages',
    label: 'Soft Drinks',
    items: [
      { name: 'Boba Morirsonando', price: '$8' },
      { name: 'Sodas', price: '$4' },
      { name: 'Cranberry Juice', price: '$3' },
      { name: 'Piña Colada', price: '$9' },
      { name: 'Apple Juice', price: '$3' },
      { name: 'Lemonade', price: '$7' },
      { name: 'Passionfruit', price: '$7' },
      { name: 'Strawberry Lemonade', price: '$7' },
      { name: 'Perrier Water 25 oz', price: '$10' },
      { name: 'Panna Water 33 oz', price: '$10' },
    ],
  },
];
