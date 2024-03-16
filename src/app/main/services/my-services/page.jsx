"use client";
import Card from "../../../ui/card/card";
import CreateServiceButton from "../../../ui/createserviceform/createservicebutton";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const localToken = localStorage.getItem("token");
      const user_id = localStorage.getItem("user_id");

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/list-services-receiver/${user_id}`,
          {
            headers: {
              "Content-Type": "/json",
              Authorization: `Token ${localToken}`,
            },
          }
        );
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
