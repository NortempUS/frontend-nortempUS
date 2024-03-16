"use client";
import CreateServiceButton from "@/app/ui/createserviceform/createservicebutton";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [category, setCategory] = useState([]);
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const localToken = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/list-service/${params.id}`,
          {
            headers: {
              "Content-Type": "/json",
              Authorization: `Token ${localToken}`,
            },
          }
        );
        const data = await response.json();
        setService(data.serializer);
        setCategory(data.category_name);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-end items-center">
        <CreateServiceButton />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2 p-3 bg-white rounded-md mt-2">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="image"
          className="aspect-square rounded-full h-[200px] w-[200px] object-cover p-5"
        />
        <div className="pt-4 w-full gap-3">
          <h6 className="mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-600 antialiased">
            {category}
          </h6>
          <h4 className="mb-1 block font-sans text-md md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {service.title}
          </h4>
          <p className="mb-1 overflow-clip font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {service.description}
          </p>
          <div className="flex flex-col sm:flex-row items-end sm:justify-end">
            <p>{service.date}</p>
          </div>
        </div>
        <form>
          <input className="hidden" id="status" name="status"></input>
          <input
            type="submit"
            value="Cerrar Solicitud"
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md content text-center cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
