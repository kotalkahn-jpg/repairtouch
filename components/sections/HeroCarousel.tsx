"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import { useState } from "react"

import SlideInLeft from "@/components/animations/SlideInLeft"
import SlideInRight from "@/components/animations/SlideInRight"

export default function HeroCarousel() {

  const [current, setCurrent] = useState(0)

  const slides = [
    {
      title: "Professional Device Repairs",
      description:
        "Expert repair services for phones, laptops and computers with fast turnaround and genuine parts.",
      button: "Book a Repair",
      image: "/repair.jpg",
    },
    {
      title: "Reliable Business IT Solutions",
      description:
        "Networking infrastructure, system setup and IT support for businesses.",
      button: "Business Solutions",
      image: "/business.jpg",
    },
    {
      title: "Quality IT Equipment Supply",
      description:
        "We supply laptops, networking equipment, accessories and more.",
      button: "Browse Products",
      image: "/quality.jpg",
    },
  ]

  return (
    <section className="relative w-full h-[95vh] text-white">

      <Carousel
        plugins={[
          Autoplay({
            delay: 4500,
          }),
        ]}
        className="w-full h-full"
      >

        <CarouselContent>

          {slides.map((slide, index) => (
            <CarouselItem key={index}>

              <div
                className="relative w-full h-[95vh] flex items-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* HERO CONTENT */}
                <div className="relative mx-auto max-w-7xl px-6 pt-32">

                  <SlideInLeft>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl leading-tight">
                      {slide.title}
                    </h1>
                  </SlideInLeft>

                  <SlideInLeft delay={0.2}>
                    <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-200">
                      {slide.description}
                    </p>
                  </SlideInLeft>

                  <SlideInRight delay={0.4}>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3">
                      {slide.button}
                    </Button>
                  </SlideInRight>

                </div>

              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

      </Carousel>


      {/* OVERLAPPING SERVICE CARDS */}

      <div className="absolute -bottom-24 right-10 w-[600px]">

        <div className="grid grid-cols-4 gap-4">

          <SlideInLeft delay={0.1}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">01</div>
              <h3 className="font-semibold text-sm">Device Repairs</h3>
              <p className="text-xs text-gray-600">
                Phones and laptops repaired fast.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight delay={0.2}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">02</div>
              <h3 className="font-semibold text-sm">Business IT</h3>
              <p className="text-xs text-gray-600">
                Networking and IT support.
              </p>
            </div>
          </SlideInRight>

          <SlideInLeft delay={0.3}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">03</div>
              <h3 className="font-semibold text-sm">IT Equipment</h3>
              <p className="text-xs text-gray-600">
                Laptops and accessories.
              </p>
            </div>
          </SlideInLeft>

          <SlideInRight delay={0.4}>
            <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold text-blue-700 mb-1">04</div>
              <h3 className="font-semibold text-sm">Maintenance</h3>
              <p className="text-xs text-gray-600">
                Preventive system maintenance.
              </p>
            </div>
          </SlideInRight>

        </div>

      </div>

    </section>
  )
}