"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const localToken = localStorage.getItem("token");
      const user_id = localStorage.getItem("user_id");
      try {
        const response = await fetch(`http://127.0.0.1:8000/chats/${user_id}`, {
          headers: {
            "Content-Type": "/json",
            Authorization: `Token ${localToken}`,
          },
        });
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        chats.serializer.map((chat, index) =>
          chats.serializer.map((chat, index) => (
            <Link
              key={index}
              href={`/main/chats/${chat.id}`}
              className="relative flex items-center w-full h-48 flex-row rounded-md bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                alt="image"
                className="aspect-square rounded-full h-4/5 object-cover p-5"
              />
              <h1>{chats.lista_users[index]}</h1>
            </Link>
          ))
        )
      )}
    </div>
  );
}
