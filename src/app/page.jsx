import * as React from "react";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Carousel className="p-8 w-full max-w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent
                    className="flex items-center justify-center p-6 min-h-96 bg-no-repeat aspect-video"
                    style={{
                      background:
                        'no-repeat center url("assets/hero-carousel-1.jpeg")',
                      backgroundSize: "cover",
                    }}
                  ></CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="text-center text-xl">
        <p className="mb-8">
          "Empowering Industries, Designing Futures, Keeping good it Hertz!."
        </p>
        <Link
          href="/contact"
          className="bg-[#1E56A0] text-white px-12 py-4 rounded-full"
        >
          Say Hello..!
        </Link>
      </div>

      <section className="p-8 flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full md:w-2/3">
          <h2 className="text-6xl">
            We
            <br />
            Work
            <br />
            With Dignity
          </h2>
          <p className="mt-8 text-xl">
            Al proceder, das tu consentimiento para recibir llamadas, mensajes
            de WhatsApp o SMS, incluidos aquellos enviados de manera
            automatizada, por parte de la aplicación y sus afiliados al número
            proporcionado.Al proceder, das tu consentimiento para recibir
            llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de
            manera automatizada, por parte de la aplicación y sus afiliados al
            número proporcionado
          </p>
        </div>
        <div className="p-8 w-full md:w-1/3 mr-[50px]">
          <img
            src="assets/home-quote.jpeg"
            alt=""
            className="rounded-tl-3xl shadow-[50px_50px_0px_0px_#1E56A0] aspect-square"
          />
        </div>
      </section>

      <hr className="my-12 text-right" />
      <hr className="my-12 w-3/4 text-right" />
      <hr className="my-12 w-2/4 text-right" />

      <section className="flex flex-col gap-4 p-8">
        <Link
          href="/services"
          className="px-8 py-2 text-2xl self-end border rounded-full"
        >
          Our services
        </Link>
        <ServiceLinkRow name="Industrial HT/LT - Electrification" />
        <ServiceLinkRow name="Interior fit-out Electrification" />
        <ServiceLinkRow name="Networking" />
        <ServiceLinkRow name="MEP work" />
      </section>

      <section className="p-8 mt-12 flex flex-col items-center">
        <span className="text-4xl font-bold">Our recent projects</span>
        <div className="grid grid-cols-3 gap-4 p-6">
          {/* <!-- First Row --> */}
          <div className="col-span-1 border p-4 rounded-lg">
            <h2 className="text-lg font-bold">Head Line</h2>
            <p>
              Al proceder, das tu consentimiento para recibir llamadas, mensajes
              de WhatsApp o SMS, incluidos aquellos enviados
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
          </div>

          {/* <!-- Second Row --> */}
          <div className="col-span-3 grid grid-cols-4 gap-4">
            <div className="col-span-2 border p-4 rounded-lg bg-gray-100">
              <h2 className="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h2 className="text-lg font-bold">Explore More</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceLinkRow({ name }) {
  return (
    <div className="px-24 py-4 flex flex-row justify-between items-center border rounded-2xl">
      <span className="text-2xl">{name}</span>
      <div className="inline-flex items-center gap-4 group">
        <Link href="/services" className="px-4 py-2 border rounded-full">
          Know more
        </Link>
        <Link
          href="/services"
          className="p-2 border rounded-full transition-transform group-hover:-rotate-45"
        >
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
