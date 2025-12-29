"use client";

import HeroSection from "@/components/common/HeroSection";
import Link from "next/link";
import { useState } from "react";
import {
  blogPosts,
  categories,
  getLatestPosts,
  BlogPost,
} from "@/lib/blogData";

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const latestPosts = blogPosts;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 4;
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <div
          key={i}
          onClick={() => handlePageChange(i)}
          className={`flex justify-center items-center min-w-[61px] h-[61px] cursor-pointer mb-[10px] rounded-full text-center ${
            i === currentPage ? "bg-[#EABE0D]" : "border-[1px] border-[#EABE0D]"
          }`}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return (
    <>
      <HeroSection
        backgroundImage="/bloghero.png"
        title={<>Our&nbsp;news</>}
        description="Stay updated with the latest news, insights, and achievements from our team. Discover how we're shaping the future of agroiculture with innovation and dedication."
        showExploreMore={true}
      />
      <div className=" bg-[#F6F7F1]">
        <div className="max-w-[1512px] mx-auto">
          <div className="flex gap-20 px-24 py-[110px]">
            {/* left side section */}
            <div className="flex flex-col gap-[50px]">
              {currentPosts.map((post: BlogPost) => (
                <div
                  key={post.slug}
                  className="flex flex-col gap-[30px] bg-white p-10"
                >
                  <div>
                    <p className="text-[#1F4E3D] text-[28px] leading-[35px] font-medium">
                      {post.title}
                    </p>
                    <p className="mt-[10px] text-[#0A0A0A]/40 text-[14px] leading-[130%] font-medium">
                      {post.date} • {post.commentCount} Comments
                    </p>
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full max-w-[816px] max-h-[400px]"
                  />
                  <div className="flex flex-col gap-[30px]">
                    <p className="text-[#0A0A0A]/60 text-[20px] leading-[150%] font-normal">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogDetail/${post.slug}`}
                      className="flex w-full text-[#0A0A0A] text-base font-semibold items-center gap-2 hover:text-[#1F4E3D] transition-colors"
                    >
                      Read More
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
                        className="lg:w-6 lg:h-6"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M13 18l6 -6" />
                        <path d="M13 6l6 6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="flex justify-between">
                <div
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`flex justify-center items-center min-w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center cursor-pointer ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 6l-6 6l6 6" />
                  </svg>
                </div>
                <div className="flex gap-5">{renderPageNumbers()}</div>
                <div
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`flex justify-center items-center min-w-[61px] h-[61px] bg-[#EABE0D] mb-[10px] rounded-full text-center cursor-pointer ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* right side section */}
            <div className="hidden lg:flex flex-col min-w-[344px]">
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

                {latestPosts.map((post) => (
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
                    <span className="text-[#0A0A0A]/60 text-base font-medium">
                      {post.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
