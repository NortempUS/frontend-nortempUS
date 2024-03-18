"use client"
import Card from "@/app/ui/card/card"
import Link from "next/link"
import React, { useEffect, useState } from "react"
export default function Page() {
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      let localToken = ""
      if (typeof window !== "undefined") {
        localToken = localStorage.getItem("token")
      }
      try {
        const response = await fetch(
          "aaaaaaaaaaaaa.pythonanywhere.com/list-services",
          {
            headers: {
              "Content-Type": "/json",
            },
          }
        )
        const data = await response.json()
        console.log(data)
        setServices(data)
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-end items-center'>
        <Link
          href='/main/services/create-service'
          className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md content lg:w-[300px] text-center'
        >
          Crear Servicio
        </Link>
      </div>

      <div className='flex flex-col gap-2'>
        {isLoading ? (
          <div className='p-5'>Cargando...</div>
        ) : (
          services
            .filter(data => data.status === true)
            .map((data, index) => (
              <Card
                key={index}
                data={data}
                isMyCard={data.receiver === localStorage.getItem("user_id")}
              />
            ))
        )}
      </div>
    </div>
  )
}
