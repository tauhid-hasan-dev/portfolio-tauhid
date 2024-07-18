"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState(null);
  

  useEffect(() => {
    fetch("https://portfolio-backend-one-ivory.vercel.app/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.data);
      });
  }, []);

  const handleReadMore = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="container mx-auto p-4">
      {blogs?.map((post, index) => (
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
