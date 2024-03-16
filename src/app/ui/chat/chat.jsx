"use client";
import InputChat from "@/app/ui/chat/inputchat";
import React, { useState, useEffect, Suspense } from "react";
import Message from "@/app/ui/chat/message";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/chat/chat/1", {
          headers: {
            "Content-Type": "/json",
            Authorization: "Token 58b9d7da94e15ed54a56a3e6755580f93b55b0b9",
          },
        });
        const data = await response.json();
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative bg-white h-screen rounded-md w-full">
      <div className="sticky bg-white top-[11rem] md:top-28 left-0 rounded-md">
        <div className="flex items-center justify-start gap-3">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="rounded-full h-[100px] w-[100px] object-cover p-5"
          />
          <h1 className="text-xl">José Antonio</h1>
        </div>
        <InputChat />
        <hr className="mx-4"></hr>
      </div>
      {isLoading ? (
        <div className="p-5">Cargando...</div>
      ) : (
        messages.map((data, index) => <Message key={index} message={data} />)
      )}
    </div>
  );
}
