// Rich text content block types
export type ContentBlockType =
  | "paragraph"
  | "heading"
  | "subheading"
  | "image"
  | "images" // Multiple images in a row
  | "bullet-list"
  | "numbered-list"
  | "blockquote"
  | "highlight";

// Styled text segment - allows custom CSS for any text
export interface StyledText {
  text: string;
  className?: string; // Custom Tailwind/CSS classes
}

// List item can be a simple string OR an array of styled text segments
export type ListItem = string | StyledText[];

export interface ContentBlock {
  type: ContentBlockType;
  content?: string; // For paragraph, heading, subheading, blockquote, highlight
  contentStyled?: StyledText[]; // For styled paragraph content
  items?: ListItem[]; // For bullet-list and numbered-list (supports both string and styled)
  src?: string; // For single image
  alt?: string; // For single image
  images?: { src: string; alt?: string; caption?: string }[]; // For multiple images
  caption?: string; // For image caption
  className?: string; // Custom class for the block itself
}

// Legacy interface for backward compatibility
export interface ContentSection {
  heading?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  image?: string;
}

// New rich text content interface
export interface RichContentSection {
  blocks: ContentBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  commentCount: number;
  image: string;
  excerpt: string;
  category: string;
  fullContent: string;
  author?: string;
  contentSections?: ContentSection[];
  richContent?: ContentBlock[]; // New rich text content support
}

export interface Category {
  name: string;
  count: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "stronger-vyomalife-australian-industry",
    title: "A Stronger Vyomalife: Ready to Shine for the Australian Industry",
    date: "Sep 2, 2025",
    commentCount: 2,
    image: "/blog1.png",
    excerpt:
      "Vyomalife, China's largest agrochemical exporter, is set to expand its contribution to the Australian crop protection industry with a broader product portfolio, enhanced facilities, and a strengthened management and field team.",
    category: "Company News",
    fullContent:
      "Vyomalife, China's largest agrochemical exporter, is set to expand its contribution to the Australian crop protection industry with a broader product portfolio, enhanced facilities, and a strengthened management and field team. Our commitment to sustainable agriculture continues to drive innovation across all our product lines. We are investing heavily in research and development to bring cutting-edge solutions to Australian farmers.",
  },
  {
    slug: "vyomalife-ozcrop-integration",
    title:
      "Vyomalife expands in Australia with OzCrop integration and key leadership appointments",
    date: "Sep 2, 2025",
    commentCount: 2,
    image: "/OzCrop.png",
    excerpt:
      "With 9 state-of-the-art production facilities and 2 cutting-edge R&D centers worldwide, Rainbow delivers over 300 active ingredients to more than 100 countries, ensuring that our products consistently meet the highest quality standards and address the evolving needs of modern agriculture.",
    category: "Company News",
    fullContent:
      "With 9 state-of-the-art production facilities and 2 cutting-edge R&D centers worldwide, Rainbow delivers over 300 active ingredients to more than 100 countries, ensuring that our products consistently meet the highest quality standards and address the evolving needs of modern agriculture. This integration marks a significant milestone in our expansion strategy.",
  },
  {
    slug: "saving-planet-with-microbes",
    title: "Saving the planet with microbes",
    date: "Aug 28, 2025",
    commentCount: 5,
    image: "/blog3.png",
    excerpt:
      "Discover how microbes are revolutionizing sustainable agriculture and helping protect our planet through innovative biological solutions.",
    category: "Product Innovations",
    fullContent:
      "Microbes play a crucial role in sustainable agriculture. Our innovative microbial solutions help farmers reduce their environmental footprint while maintaining high productivity levels.",
  },
  {
    slug: "botrytis-cinerea-comprehensive-guide",
    title:
      "Botrytis Cinerea: A comprehensive guide to managing gray mold in agriculture",
    date: "Aug 25, 2025",
    commentCount: 3,
    image: "/blog4.png",
    excerpt:
      "A comprehensive guide to understanding and managing Botrytis Cinerea, commonly known as gray mold, in agricultural settings.",
    category: "Product Innovations",
    fullContent:
      "Botrytis Cinerea, or gray mold, is one of the most challenging fungal diseases in agriculture. This guide provides comprehensive strategies for managing this persistent problem.",
  },
  {
    slug: "dual-impact-industrialized-agriculture",
    title: "The dual impact of industrialized agriculture",
    date: "Aug 20, 2025",
    commentCount: 4,
    image: "/industry.png",
    excerpt:
      "Exploring the dual impact of industrialized agriculture on food production and environmental sustainability in the modern era.",
    category: "Company News",
    fullContent:
      "Industrialized agriculture has transformed food production globally. While it has enabled us to feed billions, we must also consider its environmental impact and work towards more sustainable solutions.",
  },
  {
    slug: "recommendations-aphid-control-wheat",
    title: "Recommendations for aphid control in wheat",
    date: "Aug 15, 2025",
    commentCount: 6,
    image: "/blog5.png",
    excerpt:
      "Expert recommendations for effective aphid control in wheat crops, including integrated pest management strategies.",
    category: "Product Innovations",
    fullContent:
      "Aphids can cause significant damage to wheat crops if left uncontrolled. Our expert recommendations provide effective strategies for managing these pests.",
  },
];

export const categories: Category[] = [
  { name: "Company News", count: 2 },
  { name: "Product Innovations", count: 1 },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug.toLowerCase());
};

export const getLatestPosts = (count: number = 3): BlogPost[] => {
  return blogPosts.slice(0, count);
};

export const getAdjacentPosts = (
  currentSlug: string
): { prevPost: BlogPost | null; nextPost: BlogPost | null } => {
  const currentIndex = blogPosts.findIndex(
    (post) => post.slug === currentSlug.toLowerCase()
  );
  return {
    prevPost: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    nextPost:
      currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
};
