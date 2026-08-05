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

export const menuDisclaimer =
  'Before placing your order please inform your server if anyone in your party has a food allergy. Items marked *** are served raw, undercooked, or may contain raw or undercooked ingredients.';

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
          'A trio of crispy rice baskets with a kiss of sweet chili, filled with fresh guacamole and your choice of Ropa Vieja, Shrimp, or Shredded Chicken Teriyaki.',
      },
      {
        name: "Daddy’s Mofonguitos",
        price: '$16',
        description:
          'Crispy fried yucca baskets filled with your choice of Ropa Vieja, Shrimp, or Teriyaki Chicken — Caribbean crunch with bold Asian flavor.',
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
          'Grilled octopus marinated in garlic teriyaki, served with crispy papas bravas and a drizzle of bold chimichurri.',
      },
      {
        name: "Ninja’s Empanadas",
        price: '$16',
        description:
          'Two golden turnovers stuffed with savory ropa vieja and melty mozzarella, served with spicy-smooth sriracha mayo aioli.',
      },
      {
        name: 'Ceviche de Pulpo',
        price: '$18',
        description:
          'Ceviche of octopus, lime juice, peppers and onions, cilantro, served with plantain chips.',
        raw: true,
      },
      {
        name: 'Mofonguitos de Churrasco',
        price: '$16',
        description:
          'Crispy fried plantain baskets topped with creamy guacamole, tender skirt steak, and chimichurri.',
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
          'Fresh wild-caught tuna mixed with creamy avocado and sweet mango, finished with spicy mayo.',
        raw: true,
      },
      {
        name: 'Shrimp Tempura',
        price: '$13',
        description: 'Light and crispy shrimp tempura, served with our signature sweet chili dipping sauce.',
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
        name: 'Vaca Moo',
        price: '$20',
        description:
          'Chicken Tempura, Mozzarella, Bacon, Sweet Plantains, Deep Fried in Doritos, Guacamole & Ropa Vieja',
      },
      {
        name: 'Suchikito Roll',
        price: '$16',
        description: 'Chicken Tempura, Queso Frito, Sweet Plantains, Sweet Asian Beef',
      },
      {
        name: 'El Bukele Roll',
        price: '$16',
        description: 'Chicken Tempura, Cream Cheese, Sweet Plantains, Guacamole & Chicharrón',
      },
      {
        name: 'Uyyy Roll',
        price: '$18',
        description: 'Shrimp Tempura, Queso Frito, Avocado, Sweet Asian Beef',
      },
      {
        name: 'Catrachito Roll',
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
        name: 'Buddha Roll',
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
        name: 'Hana Roll',
        price: '$16',
        description: 'Tuna Tartar, Cucumber, Avocado, Mango, Jalapeño',
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
    id: 'main-courses',
    label: 'Main Courses',
    items: [
      {
        name: 'Ninja Mar y Tierra',
        price: '$60',
        description:
          'A juicy 10 oz grilled Churrasco steak, paired with tender sautéed shrimp and a lobster tail, served over creamy yucca mash and seasonal vegetables. Finished with Ninja Sauce.',
      },
      {
        name: "Ninja’s Churrasco",
        price: '$36',
        description:
          '10 oz grilled skirt steak, marinated and seared to perfection. Served with creamy yucca mash and seasonal vegetables.',
      },
      {
        name: 'Salmon in Paradise',
        price: '$38',
        description:
          'Grilled salmon paired with sautéed shrimp, served over mashed potatoes and vegetables with passion fruit sauce.',
      },
      {
        name: 'Pollo Ninja',
        price: '$26',
        description:
          'Grilled chicken breast topped with smoky creamy bacon sauce, served with a tower of crispy sweet maduros.',
      },
      {
        name: 'Pescado Samana',
        price: 'Market',
        description:
          'Whole crispy fried red snapper with golden tostones and a fresh house salad — inspired by Samaná.',
      },
      {
        name: 'Langosta Rellena',
        price: 'Market',
        description:
          'Whole lobster stuffed with mixed seafood, finished in coconut cream sauce. Served with yucca mash.',
      },
      {
        name: "Ninja’s Ribeye",
        price: '$55',
        description:
          '12 oz ribeye, seared and served with yucca mash, vegetables, and a bold Brugal rum demi-glace.',
      },
      {
        name: 'Ninja Fongo — Camarones / Churrasco',
        price: '$36',
        description: 'Signature mofongo with shrimp or skirt steak.',
      },
      {
        name: 'Ninja Fongo — Pollo',
        price: '$26',
        description: 'Signature mofongo with chicken.',
      },
      {
        name: 'Ninja Fongo — Marisco',
        price: '$38',
        description: 'Signature mofongo with seafood mix.',
      },
      {
        name: 'Chicken Teriyaki',
        price: '$26',
        description:
          'Tender grilled chicken glazed in house-made teriyaki, served with asparagus and sweet fried plantains.',
      },
      {
        name: 'Ninja Bento — Chicken Teriyaki',
        price: '$22',
        description: 'Latin-style fried rice with Chinese vegetables, sweet plantains, and eggs.',
      },
      {
        name: 'Ninja Bento — Beef Teriyaki',
        price: '$24',
        description: 'Latin-style fried rice with Chinese vegetables, sweet plantains, and eggs.',
      },
      {
        name: 'Ninja Bento — Shrimp Teriyaki',
        price: '$26',
        description: 'Latin-style fried rice with Chinese vegetables, sweet plantains, and eggs.',
      },
      {
        name: 'Fried Rice',
        price: '$15+',
        description: 'Plain $15 · Chicken +$6 · Shrimp +$8 · Churrasco +$8',
      },
      {
        name: 'Yakisoba',
        price: '$16+',
        description: 'Japanese stir-fried noodles. Add Chicken $6 · Shrimp $8 · Churrasco $8',
      },
      {
        name: 'Arroz con Marisco',
        price: '$35',
        description:
          'Spanish-style saffron rice loaded with calamari, shrimp, octopus, and mussels.',
      },
      {
        name: 'Bandeja La Parcerita',
        price: '$30',
        description:
          'Steak, white rice, red beans, maduro, avocado, chicharrón, fried egg & longaniza.',
      },
      {
        name: 'Bandeja La Domi',
        price: '$30',
        description: 'Braised beef, white rice, red beans, avocado, chicharrón & yucca fries.',
      },
      {
        name: 'Bandeja La Bori',
        price: '$30',
        description:
          'Pernil, grilled chicken, white rice, black beans, avocado, caramelized onions & tostones.',
      },
      {
        name: 'Bandeja La Chamita',
        price: '$30',
        description: 'Ropa Vieja, white rice, black beans, avocado, arepita, maduros & fried egg.',
      },
      {
        name: 'Sides',
        price: '$7',
        description:
          'Rice & Beans · Tostones · Maduros · Veggies · French Fries · Yucca Fries · Yucca Mash · Mashed Potatoes',
      },
    ],
  },
  {
    id: 'salads-soups',
    label: 'Salads & Soups',
    note: 'Salads served with Ninja Ginger Dressing or Balsamic Dressing.',
    items: [
      { name: 'Miso Soup', price: '$8' },
      { name: 'Dumpling Soup', price: '$12' },
      { name: 'Kani Salad', price: '$14' },
      { name: 'Wakame Salad', price: '$8' },
      {
        name: 'House Salad',
        price: '$12',
        description: 'Mixed greens, onions, peppers, carrots, dressed in Asian raspberry vinaigrette.',
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
];
