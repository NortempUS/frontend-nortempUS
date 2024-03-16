"use client"
import CreateServiceButton from "@/app/ui/createserviceform/createservicebutton"
import Card from "../../../ui/card/card"
import React, { useEffect, useState } from "react"
export default function Page() {
  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const localToken = localStorage.getItem("token")
      const user_id = localStorage.getItem("user_id")

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/list-services-receiver/${user_id}`,
          {
            headers: {
              "Content-Type": "/json",
              Authorization: `Token ${localToken}`,
            },
          }
        )
        const data = await response.json()
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
      <CreateServiceButton />

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
