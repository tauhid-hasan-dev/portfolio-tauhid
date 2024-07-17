"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();

  const blogPosts = [
    {
      id: "1",
      date: "July 17, 2024",
      headline: "How to use Tailwind CSS",
      content:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML...Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML...Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML...",
    },
    {
      id: "2",
      date: "July 16, 2024",
      headline: "Understanding React Hooks",
      content:
        "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8...",
    },
    // Add more blog posts here
  ];

  const handleReadMore = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      {blogPosts.map((post, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <h2 className="text-xl font-semibold">{post.headline}</h2>
          <p className="text-gray-600 text-sm">{post.date}</p>
          <p className="text-gray-400 mt-2">
            {post.content.substring(0, 150)}...
          </p>
          <button
            onClick={() => handleReadMore(post.id)}
            className="text-blue-500 hover:underline mt-2"
          >
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
