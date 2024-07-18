"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  console.log(post);

  useEffect(() => {
    fetch(`https://portfolio-backend-one-ivory.vercel.app/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
      });
  }, [id]);

  console.log({ id });

  // Fetch the blog post details based on the ID
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

  /* const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }
 */
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">{post?.headline}</h1>
      <p className="text-gray-600 text-sm">{post?.date}</p>
      <p className="text-gray-400 mt-2">{post?.content}</p>
    </div>
  );
};

export default BlogDetail;
