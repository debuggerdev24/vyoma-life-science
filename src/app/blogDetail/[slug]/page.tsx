import LogosSection from "@/components/common/LogosSection";
import {
  getBlogBySlug,
  blogPosts,
  categories,
  getAdjacentPosts,
} from "@/lib/blogData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Get dynamic prev/next posts
  const { prevPost, nextPost } = getAdjacentPosts(slug);
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border border-[#0000001A]">
        <div className="max-w-[1512px] mx-auto px-6 lg:px-24 py-2">
          <div className="flex items-center gap-2 text-sm text-[#0A0A0A]/60">
            <Link href="/home" className="hover:text-[#1F4E3D]">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1F4E3D]">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#0A0A0A]/40 truncate max-w-[300px]">
              {blog.title}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1512px] mx-auto px-6 lg:px-24 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 w-full">
            {/* Title Section */}
            <div className="mb-[20px] lg:mb-[30px]">
              <h1 className="text-[#1F4E3D] text-[24px] sm:text-[32px] lg:text-[40px] leading-[130%] lg:leading-[50px] font-medium mb-[10px]">
                {blog.title}
              </h1>
              <p className="text-[#0A0A0A]/40 text-[12px] lg:text-[14px] leading-[130%] font-medium">
                {blog.date} • {blog.author || "Vyomalife Admin"} •{" "}
                {blog.commentCount} Comments
              </p>
            </div>

            {/* Featured Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="max-w-full h-auto object-contain mb-6 lg:mb-8"
            />

            {/* Article Content */}
            <div>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%] font-normal">
                In the 1970s, approximately one-third of the population in
                developing countries suffered from hunger.
              </p>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%] font-normal mt-[14px]">
                This translated to hundreds of millions of individuals facing
                chronic undernourishment. Advancements during the Green
                Revolution—including high-yield crop varieties, chemical
                fertilizers, and pesticides—led to significant increases in food
                production, substantially reducing hunger worldwide. By 2015,
                the prevalence of undernourishment in developing regions had
                fallen to 12%. Our World in Data However, these productivity
                gains have come with considerable environmental costs:
              </p>
              <ul className="mt-[16px] lg:mt-[20px] gap-3">
                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Deforestation :{" "}
                    </span>
                    Agricultural expansion is responsible for 80% of global
                    deforestation. Carbon Brief In the Amazon alone, around 17%
                    of the forest has been lost in the last 50 years, primarily
                    due to conversion for cattle ranching. Fondo Mundial para la
                    Naturaleza
                  </span>
                </li>

                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Biodiversity Loss :{" "}
                    </span>
                    The global food system is the primary driver of biodiversity
                    loss, threatening 86% of species at risk of
                    extinction. PNUMA
                  </span>
                </li>

                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Greenhouse Gas Emissions :{" "}
                    </span>
                    Agriculture contributes up to 29% of global greenhouse gas
                    emissions, significantly impacting climate change. Carbon
                    Brief
                  </span>
                </li>
              </ul>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%] font-normal mt-[14px]">
                These environmental challenges underscore the urgent need to
                transition to sustainable, nature-positive agricultural
                practices that balance food security with ecological
                preservation.
              </p>

              <div className="mt-6 lg:mt-10 text-[18px] lg:text-[23px] font-medium leading-[28px]">
                Why sustainability is the next imperative
              </div>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%] font-normal mt-[14px]">
                Sustainability has become the backbone of transformation in
                agriculture, driven by the dual pressures of international
                regulations and consumer demand. At its core, a sustainable
                model starts with traceability, providing a transparent view of
                practices across the value chain. With tools like ucrop.it,
                agricultural producers can document and verify critical
                sustainability metrics such as:
              </p>
              <ul className="mt-[16px] lg:mt-[20px] gap-3">
                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Carbon Footprint :{" "}
                    </span>
                    Accounting for CO2 emissions across farming practices.
                  </span>
                </li>

                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Water Footprint :{" "}
                    </span>
                    Tracking efficient water use and conservation efforts.
                  </span>
                </li>

                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Sustainable Landscape :{" "}
                    </span>
                    Promoting deforestation-free production and biodiversity
                    protection.
                  </span>
                </li>

                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      EIQ (Environmental Impact Quotient) :{" "}
                    </span>
                    Assessing pesticide and fertilizer use.
                  </span>
                </li>
                <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                  <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                  <span>
                    <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                      Social and Economic Impact :{" "}
                    </span>
                    Measuring contributions to local communities.
                  </span>
                </li>
              </ul>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%] font-normal mt-[14px]">
                This transition, however, must be achieved at scale to make a
                global impact. Verified traceability solutions are the
                foundation for advancing sustainable food, fuel, fiber, and
                forest products while enabling compliance with emerging
                international standards like the EU’s deforestation regulations.
              </p>

              <img
                src="/indian-farmer.jpg"
                alt="indian-farmer"
                className="max-w-full h-auto mt-[20px] lg:mt-[30px]"
              />

              <div className="text-[18px] lg:text-[23px] leading-[28px] text-[#0A0A0A] font-medium mt-[20px] lg:mt-[30px]">
                ucrop.it’s role in achieving sustainability at scale
              </div>

              <div className="text-[14px] lg:text-[16px] leading-[150%] text-[#0A0A0A]/60 mt-[14px]">
                <p className="font-semibold">Data-Driven Impact :</p>
                <p>
                  ucrop.it has analyzed over 21 million acres for sustainability
                  metrics and verified over 9 million acres of crop-specific
                  traceability (e.g., corn, soybeans, and cotton) across 12
                  countries. By connecting1,500+ farmers with corporate
                  customers such as Nestlé and Boortmalt for example amongst
                  others, ucrop.it empowers stakeholders to co-claim verified
                  sustainable achievements across supply chains from field to
                  market on a proven basis.
                </p>
              </div>

              <div className="text-[14px] lg:text-[16px] leading-[150%] text-[#0A0A0A]/60 mt-[14px]">
                <p className="font-semibold">Data-Driven Impact :</p>
                <p>
                  ucrop.it has analyzed over 21 million acres for sustainability
                  metrics and verified over 9 million acres of crop-specific
                  traceability (e.g., corn, soybeans, and cotton) across 12
                  countries. By connecting1,500+ farmers with corporate
                  customers such as Nestlé and Boortmalt for example amongst
                  others, ucrop.it empowers stakeholders to co-claim verified
                  sustainable achievements across supply chains from field to
                  market on a proven basis. Ucropit- founded in 2018 by Diego
                  Hoter, Chief Executive Officer (CEO), Matías O´Keefe, Chief
                  Technology Officer (CTO) and Marcos Botta, Chief Innovation
                  Officer (CIO) in charge of the sustainable innovation process.
                  <br />
                  Ucropit- founded in 2018 by Diego Hoter, Chief Executive
                  Officer (CEO), Matías O´Keefe, Chief Technology Officer (CTO)
                  and Marcos Botta, Chief Innovation Officer (CIO) in charge of
                  the sustainable innovation process.
                </p>
              </div>

              <div className="text-[14px] lg:text-[16px] leading-[150%] text-[#0A0A0A]/60 mt-[14px]">
                <p className="font-semibold">Corporate Adoption :</p>
                <p>
                  With more than 80 corporate clients, ucrop.it integrates
                  sustainability metrics into the supply chains of CPGs,
                  biofuels, commodity processors traders, input providers,
                  financial institutions and textiles. Its blockchain-based
                  platform guarantees transparency, reliability, and
                  scalability.
                </p>
              </div>

              <div className="text-[14px] lg:text-[16px] leading-[150%] text-[#0A0A0A]/60 mt-[14px]">
                <p className="font-semibold">Corporate Adoption :</p>
                <ul className="gap-3">
                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                        Crop Story™ :{" "}
                      </span>
                      Enables full traceability from farm to market in 60 crops
                      types & more
                    </span>
                  </li>

                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                        Sustainable Metrics Dashboards :{" "}
                      </span>
                      Tracks progress on CO2 emissions, water use, biodiversity
                      and sustainable landscapes of agriculture production
                    </span>
                  </li>

                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      <span className="font-semibold text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                        QR Codes for Consumer Trust :{" "}
                      </span>
                      Connects end consumers with verified sustainable
                      practices.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-[14px] lg:text-[16px] leading-[150%] text-[#0A0A0A]/60 mt-[14px]">
                <p className="font-semibold">Value Proposition :</p>
                <ul className="gap-3">
                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      Farmers are rewarded with financial incentives for
                      adopting sustainable practices.
                    </span>
                  </li>

                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      Companies gain verified claims to align their brands with
                      sustainability goals.
                    </span>
                  </li>

                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      Companies can differentiate their products facing markets
                      and increase market share
                    </span>
                  </li>

                  <li className="flex gap-[10px] lg:gap-[12px] text-[#0A0A0A]/60 text-[14px] lg:text-[16px] leading-[150%]">
                    <span className="text-[#0A0A0A]/60 mt-[3px]">•</span>
                    <span>
                      Companies avoid greenwashing risks and liabilities
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-[#0A0A0A]/60 text-[14px] lg:text-[16px] font-normal leading-[150%] mt-[14px]">
                - Consumers trust traceable, sustainable products with
                evidence-backed claims.
              </p>
            </div>

            {/* Previous/Next Navigation */}
            <div className="flex justify-between items-center mt-8 lg:mt-[50px] pt-6 ">
              {prevPost ? (
                <Link
                  href={`/blogDetail/${prevPost.slug}`}
                  className="flex items-center gap-2 lg:gap-3 group"
                >
                  <div className="flex justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#EABE0D] rounded-full group-hover:bg-[#d4ab0c] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                  </div>
                  <span className="text-[#0A0A0A] font-semibold text-[16px] leading-[140%]">
                    Prev Post
                  </span>
                </Link>
              ) : (
                <div></div>
              )}
              {nextPost ? (
                <Link
                  href={`/blogDetail/${nextPost.slug}`}
                  className="flex items-center gap-2 lg:gap-3 group"
                >
                  <span className="text-[#0A0A0A] font-semibold text-[16px] leading-[140%]">
                    Next Post
                  </span>
                  <div className="flex justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-[#EABE0D] rounded-full group-hover:bg-[#d4ab0c] transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:flex flex-col w-[344px]">
            <div className="border-[#0000001A] border-b-[1px] text-[#0A0A0A] font-medium text-xl pb-[10px]">
              Categories
            </div>
            <div className="flex flex-col gap-[10px] text-[#0A0A0ACC] text-[18px] leading-[150%] font-normal mt-5">
              {categories.map((category) => (
                <p key={category.name}>
                  {category.name} - {category.count}
                </p>
              ))}
            </div>
            <div className="flex flex-col mt-[50px] gap-5">
              <div className="border-[#0000001A] border-b-[1px] pb-[10px] text-[#0A0A0A] font-medium text-xl">
                Latest posts
              </div>

              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogDetail/${post.slug}`}
                  className="flex gap-[15px] hover:opacity-80 transition-opacity"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[100px] h-[70px] object-cover"
                  />
                  <span className="text-[#0A0A0A]/60 text-base font-medium line-clamp-3">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <LogosSection />
    </div>
  );
}
