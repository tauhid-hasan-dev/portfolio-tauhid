"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`https://portfolio-backend-one-ivory.vercel.app/api/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.data);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">{post?.headline}</h1>
      <p className="text-gray-600 text-sm">{post?.date}</p>
      <p className="text-gray-400 mt-2">{post?.content}</p>
    </div>
  );
};

export default BlogDetail;
