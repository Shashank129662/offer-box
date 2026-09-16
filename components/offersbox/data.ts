export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why OffersBox", href: "#why" },
  { label: "FAQ", href: "#faq" },
]

export const trustedBrands = [
  { name: "Amazon", src: "/assets/brands/amazon.png" },
  { name: "Flipkart", src: "/assets/brands/flipkart.png" },
  { name: "Myntra", src: "/assets/brands/myntra.png" },
  { name: "Zomato", src: "/assets/brands/zomato.png" },
  { name: "MakeMyTrip", src: "/assets/brands/MakeMyTrip.png" },
  { name: "AJIO", src: "/assets/brands/ajio.png" },
  { name: "Reliance Digital", src: "/assets/brands/reliance.png" },
]

export type Category = {
  label: string
  icon: string
  tint: string
}

export const categories: Category[] = [
  { label: "Fashion", icon: "shopping-bag", tint: "#ff7a59" },
  { label: "Electronics", icon: "laptop", tint: "#3d5afe" },
  { label: "Travel", icon: "plane", tint: "#22b0ff" },
  { label: "Food & Dining", icon: "utensils", tint: "#ff9f43" },
  { label: "Beauty & Personal Care", icon: "sparkles", tint: "#ff5fa2" },
  { label: "Home & Living", icon: "sofa", tint: "#5b6bff" },
  { label: "Health & Wellness", icon: "heart-pulse", tint: "#ff5b7f" },
  { label: "More", icon: "grid", tint: "#8b93ff" },
]

export type Deal = {
  brand: string
  brandSrc: string
  image: string
  discount: string
  category: string
}

export const deals: Deal[] = [
  {
    brand: "Amazon",
    brandSrc: "/assets/brands/amazon.png",
    image: "/assets/products/close-up-futuristic-sneakers.jpg",
    discount: "Upto 70% Off",
    category: "On Electronics",
  },
  {
    brand: "Myntra",
    brandSrc: "/assets/brands/myntra.png",
    image: "/assets/products/minimalist-skin-care-product-presentation.jpg",
    discount: "Flat 50% Off",
    category: "On Top Fashion Brands",
  },
  {
    brand: "Zomato",
    brandSrc: "/assets/brands/zomato.png",
    image:
      "/assets/products/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese.jpg",
    discount: "Flat 60% Off",
    category: "On Food Orders",
  },
  {
    brand: "MakeMyTrip",
    brandSrc: "/assets/brands/MakeMyTrip.png",
    image:
      "/assets/products/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg",
    discount: "Upto 40% Off",
    category: "On Hotels & Flights",
  },
  {
    brand: "AJIO",
    brandSrc: "/assets/brands/ajio.png",
    image: "/assets/products/close-up-futuristic-sneakers.jpg",
    discount: "Min. 50% Off",
    category: "On Top Brands",
  },
]

export const whyFeatures = [
  { icon: "badge-check", title: "100% Verified", desc: "Safe & reliable offers" },
  { icon: "layers", title: "Wide Range", desc: "From top brands" },
  { icon: "hand-heart", title: "Handpicked Deals", desc: "Only the best, always" },
  { icon: "mouse-pointer-click", title: "Easy to Use", desc: "Find & use offers in seconds" },
  { icon: "calendar-clock", title: "Updated Daily", desc: "Never miss a new deal" },
  { icon: "piggy-bank", title: "Save More", desc: "Get the best value, always" },
]

export const steps = [
  {
    icon: "search",
    title: "Search",
    desc: "Find offers from your favourite brands",
  },
  {
    icon: "hand-pointer",
    title: "Choose",
    desc: "Pick the best deal that suits you",
  },
  {
    icon: "gift",
    title: "Save",
    desc: "Use the offer and enjoy great savings",
  },
]

export const testimonials = [
  {
    name: "Priya S.",
    avatar: "/assets/avatar/avatar-priya.jpg",
    quote:
      "Found amazing deals on my favourite brands. OffersBox has become my go-to!",
  },
  {
    name: "Rohan M.",
    avatar: "/assets/avatar/avatar-rohan.jpg",
    quote:
      "Super easy to use and the offers are genuinely useful. Highly recommended!",
  },
  {
    name: "Sneha K.",
    avatar: "/assets/avatar/avatar-sneha.jpg",
    quote: "I love how updated the offers are. Always find something new!",
  },
]
