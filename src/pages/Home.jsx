import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, Truck, BadgeDollarSign, Wrench } from "lucide-react";
import { Section, Container } from "../components/layout";
import { Heading, Paragraph, Button, ProductCard } from "../components/ui";

/**
 * Home Page
 * Main landing page with hero section and product grid
 */

// Sample product data - Replace with your actual data source
const featuredProducts = [
  {
    id: "1",
    title: "Modern Beige Armchair With Wooden Legs",
    price: "$150.00",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "2",
    title: "Solid Wood TV Stand With Storage Drawers",
    price: "$135.00",
    image: "https://images.unsplash.com/photo-1595514535215-ab1496a7dd76?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Wooden Frame Sofa Chair With Plush Cushion",
    price: "$270.00",
    originalPrice: "$280.00",
    discount: "-3%",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Premium Solid Wood Chair With Comfort Design",
    price: "$79.00",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1595514535215-ab1496a7dd76?auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Decorative Cactus Plant Pot For Indoor Display",
    price: "$37.00",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1416879598555-46aa1a3f6834?auto=format&fit=crop&q=80",
    isNew: true,
  },
  {
    id: "6",
    title: "Compact Mini Plant Pot For Desk Display",
    price: "$37.00",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
  },
  {
    id: "7",
    title: "Wooden Office Desk With Drawers Storage",
    price: "$140.00",
    originalPrice: "$145.00",
    discount: "-3%",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1595514535215-ab1496a7dd76?auto=format&fit=crop&q=80",
  },
  {
    id: "8",
    title: "Classic Wooden Nightstand With Dual Drawers",
    price: "$99.00",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />,
    text: "100% Secure Payment",
  },
  {
    icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />,
    text: "Free Installation",
  },
  {
    icon: <Truck className="w-8 h-8" strokeWidth={1.5} />,
    text: "Free Delivery Over $200",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8" strokeWidth={1.5} />,
    text: "30 Day Money Back",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Implement your cart logic here
    console.log("Added to cart:", product);
  };

  const handleAddToWishlist = (product) => {
    // Implement your wishlist logic here
    console.log("Added to wishlist:", product);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80')]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <Container className="relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-white/80 mb-4">
              New Arrivals
            </span>
            <Heading as="h1" size="xl" className="text-white mb-6">
              Timeless Elegance<br />Scandinavian Furniture
            </Heading>
            <Paragraph variant="lead" className="text-white/90 mb-8 max-w-lg">
              Discover our curated collection of premium furniture designed to transform your living spaces.
            </Paragraph>
            <div className="flex gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/collection")}
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => navigate("/about-Us")}
              >
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Ticker */}
      <section className="bg-[var(--color-title)] text-white py-4">
        <Container>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                {feature.icon}
                <span className="text-xs font-bold uppercase tracking-wide">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <Section
        subtitle="The Ultimate Furniture Edit"
        title="Exclusive Picks Elevate Your Space"
        description="Discover a curated selection of premium furniture designed to transform your home. From timeless elegance to modern sophistication."
        spacing="xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/collection")}
          >
            View All Products
          </Button>
        </div>
      </Section>

      {/* Categories Section */}
      <Section
        subtitle="Browse Categories"
        title="Shop By Room"
        background="surface"
        spacing="lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Living Room",
              image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
            },
            {
              title: "Bedroom",
              image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
            },
            {
              title: "Office",
              image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-[var(--border-radius-lg)] overflow-hidden cursor-pointer"
              onClick={() => navigate("/collection")}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-[var(--transition-slow)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-[var(--transition-normal)] group-hover:bg-black/40" />
              <div className="absolute bottom-6 left-6">
                <Heading as="h3" size="xs" className="text-white mb-2">
                  {category.title}
                </Heading>
                <span className="text-xs font-bold uppercase tracking-wide text-white/80 group-hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]">
                  Shop Now
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section
        background="dark"
        spacing="xl"
        className="text-center"
      >
        <div className="max-w-2xl mx-auto">
          <Heading as="h2" size="lg" className="text-white mb-6">
            Transform Your Space Today
          </Heading>
          <Paragraph variant="lead" className="text-gray-300 mb-8">
            Get free delivery on your first order over $200 and enjoy our 30-day money-back guarantee.
          </Paragraph>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/collection")}
          >
            Start Shopping
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Home;
