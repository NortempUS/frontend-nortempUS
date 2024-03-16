"use client";
import Card from "@/app/ui/card/card";
import React, { useEffect, useState } from "react";
import CreateServiceButton from "@/app/ui/createserviceform/createservicebutton";
export default function Page() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const localToken = localStorage.getItem("token");
      try {
        const response = await fetch("http://127.0.0.1:8000/list-services", {
          headers: {
            "Content-Type": "/json",
            Authorization: `Token ${localToken}`,
          },
        });
        const data = await response.json();
        setServices(data.serializer);
        setCategories(data.category_names);
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
      <CreateServiceButton />

      <div className="flex flex-col gap-2">
        {isLoading ? (
          <div className="p-5">Cargando...</div>
        ) : (
          categories.map((category, index) => (
            <Card key={index} data={services[index]} category={category} />
          ))
        )}
      </div>
    </div>
  );
}
