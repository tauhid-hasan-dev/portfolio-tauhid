"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa"; // Import Font Awesome icon

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
        <div
          key={index}
          className="border-b border-gray-800 py-8 flex flex-col md:flex-row"
        >
          <div className="md:w-1/3 flex-shrink-0">
            <Image
              width={500}
              height={500}
              src={
                post.thumbnail ||
                "https://i.ibb.co/XtP4zT0/thumbnail-future-tech.png"
              }
              alt={post.headline}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-4 mt-4 md:mt-0">
            <h2 className="text-xl font-semibold">{post.headline}</h2>
            <p className="text-gray-600 text-sm">{post.date}</p>

            <div
              className="text-gray-400 mt-2"
              dangerouslySetInnerHTML={{
                __html: `${post.content.substring(0, 250)}...`,
              }}
            ></div>

            <div className="flex items-center justify-end mt-2">
              <button
                onClick={() => handleReadMore(post.id)}
                className="text-blue-500 hover:underline"
              >
                Read More
              </button>
              <FaArrowRight
                className="ml-2 text-blue-500 cursor-pointer"
                onClick={() => handleReadMore(post.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
