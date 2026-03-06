import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  Share2,
  HelpCircle,
  Package,
  Truck,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { Container, Section } from "../components/layout";
import { Heading, Paragraph, Button, ProductCard } from "../components/ui";

/**
 * ProductDetail Page
 * Template for individual product pages
 */

// Sample product data - Replace with your actual data fetching logic
const getProductById = (id) => ({
  id: id || "1",
  name: "Decorative Cactus Plant Pot For Indoor Display",
  price: "$37.00",
  description:
    "Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam vitae fermentum leo. Pellentesque bibendum dui eu mi tempor sodales. Integer gravida odio in sem laoreet tempus.",
  available: true,
  tags: ["Kitchen", "Indoor"],
  sku: "SKU-12345",
  categories: ["Living Room", "Kitchen", "Plant Pots"],
  colors: [
    { name: "White", value: "#ffffff" },
    { name: "Orange", value: "#f97316" },
    { name: "Teal", value: "#0d9488" },
  ],
  sizes: ["Small", "Medium", "Large"],
  images: [
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
  ],
});

// Related products
const relatedProducts = [
  {
    id: "2",
    title: "Modern Single Sofa Chair",
    price: "$200.00",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1506898667547-42e22a46e125?auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Solid Wood TV Stand",
    price: "$135.00",
    image: "https://images.unsplash.com/photo-1595514535215-ab1496a7dd76?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    title: "Modern Wooden Lounge Chair",
    price: "$155.00",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20d25b5?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    title: "Modern Low Profile Swivel Sofa",
    price: "$125.00",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80",
    hoverImage: "https://images.unsplash.com/photo-1595514535215-ab1496a7dd76?auto=format&fit=crop&q=80",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleAddToCart = () => {
    console.log("Add to cart:", {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const tabs = ["Description", "Delivery", "Reviews"];

  return (
    <div className="bg-[var(--color-background)]">
      <Container className="py-6">
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center gap-2 text-[var(--color-text-muted)]">
            <li>
              <Link
                to="/"
                className="hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
              >
                Home
              </Link>
            </li>
            <li className="text-[var(--color-border)]">/</li>
            <li>
              <Link
                to="/collection"
                className="hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]"
              >
                Products
              </Link>
            </li>
            <li className="text-[var(--color-border)]">/</li>
            <li className="text-[var(--color-title)] font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column: Images */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20 flex-shrink-0 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-16 md:w-full md:h-20 flex-shrink-0 bg-[var(--color-surface)] rounded-[var(--border-radius-md)] overflow-hidden border-2 transition-colors duration-[var(--transition-fast)] ${
                    selectedImage === idx
                      ? "border-[var(--color-hover)]"
                      : "border-transparent hover:border-[var(--color-border)]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain p-1"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square bg-[var(--color-surface)] rounded-[var(--border-radius-lg)] overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--color-surface)] transition-colors duration-[var(--transition-fast)]"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[var(--color-surface)] transition-colors duration-[var(--transition-fast)]"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Title */}
            <Heading as="h1" size="sm" className="mb-3">
              {product.name}
            </Heading>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-gray-300">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">(0 reviews)</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-bold text-[var(--color-title)] mb-4">
              {product.price}
            </div>

            {/* Description */}
            <Paragraph variant="default" className="mb-6">
              {product.description}
            </Paragraph>

            {/* Meta Info */}
            <div className="flex flex-col gap-2 mb-6 text-sm">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[var(--color-title)] w-20">Available:</span>
                {product.available ? (
                  <span className="text-[var(--color-success)] flex items-center gap-1">
                    In Stock <Check className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="text-[var(--color-error)]">Out of Stock</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[var(--color-title)] w-20">SKU:</span>
                <span className="text-[var(--color-text)]">{product.sku}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[var(--color-title)] w-20">Tags:</span>
                <span className="text-[var(--color-text)]">{product.tags.join(", ")}</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="text-sm font-bold text-[var(--color-title)] mb-3 block uppercase">
                Color: {selectedColor.name}
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-[var(--transition-fast)] ${
                      selectedColor.name === color.name
                        ? "ring-2 ring-offset-2 ring-[var(--color-title)]"
                        : "border-[var(--color-border)]"
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="text-sm font-bold text-[var(--color-title)] mb-3 block uppercase">
                Size: {selectedSize}
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 text-xs font-bold uppercase tracking-wide rounded-[var(--button-corner)] border transition-all duration-[var(--transition-fast)] ${
                      selectedSize === size
                        ? "bg-[var(--color-title)] text-white border-[var(--color-title)]"
                        : "bg-white text-[var(--color-title)] border-[var(--color-border)] hover:border-[var(--color-title)]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="flex gap-3 mb-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-[var(--color-border)] rounded-[var(--button-corner)] overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-12 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-title)] hover:bg-[var(--color-surface)] transition-colors duration-[var(--transition-fast)]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 h-12 flex items-center justify-center font-medium text-[var(--color-title)]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-12 flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-title)] hover:bg-[var(--color-surface)] transition-colors duration-[var(--transition-fast)]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <Button
                variant="secondary"
                size="md"
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Bag
              </Button>

              {/* Wishlist */}
              <button
                className="w-12 h-12 flex items-center justify-center bg-[var(--color-surface)] rounded-[var(--button-corner)] hover:bg-[var(--color-hover)] hover:text-[var(--color-button-text)] transition-colors duration-[var(--transition-fast)]"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Buy Now */}
            <Button
              variant="outline"
              size="md"
              fullWidth
              className="mb-6"
              onClick={() => navigate("/checkout")}
            >
              Buy It Now
            </Button>

            {/* Quick Links */}
            <div className="flex gap-6 border-b border-[var(--color-border)] pb-6 mb-6">
              <button className="flex items-center gap-2 text-sm font-bold text-[var(--color-title)] hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 text-sm font-bold text-[var(--color-title)] hover:text-[var(--color-hover)] transition-colors duration-[var(--transition-fast)]">
                <HelpCircle className="w-4 h-4" />
                Ask a Question
              </button>
            </div>

            {/* Shipping Info */}
            <div className="flex flex-col gap-3 text-sm text-[var(--color-text)]">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-[var(--color-text-muted)]" />
                <span>Orders ship within 5 to 10 business days.</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-[var(--color-text-muted)]" />
                <span>Free shipping to the US on orders over $200.</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Product Tabs */}
      <Section spacing="md" background="light">
        {/* Tab Headers */}
        <div className="flex gap-8 border-b border-[var(--color-border)] mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-bold transition-colors duration-[var(--transition-fast)] border-b-2 -mb-px ${
                activeTab === tab
                  ? "text-[var(--color-hover)] border-[var(--color-hover)]"
                  : "text-[var(--color-title)] border-transparent hover:text-[var(--color-text)]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-3xl">
          {activeTab === "Description" && (
            <div className="prose prose-sm">
              <Paragraph variant="default" className="mb-4">
                {product.description}
              </Paragraph>
              <Paragraph variant="default">
                Praesent nec diam eleifend, vestibulum justo aliquet, aliquam ipsum.
                Curabitur egestas, augue a pellentesque ornare, tellus velit pulvinar
                nisl, sit amet placerat enim sem vel elit.
              </Paragraph>
            </div>
          )}
          {activeTab === "Delivery" && (
            <Paragraph variant="default">
              We offer free standard delivery on all orders over $200. Standard
              delivery takes 5-10 business days. Express delivery options are
              available at checkout for an additional fee.
            </Paragraph>
          )}
          {activeTab === "Reviews" && (
            <Paragraph variant="muted">
              No reviews yet. Be the first to review this product.
            </Paragraph>
          )}
        </div>
      </Section>

      {/* Related Products */}
      <Section
        subtitle="You May Also Like"
        title="Related Products"
        spacing="lg"
        background="surface"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ProductDetail;
