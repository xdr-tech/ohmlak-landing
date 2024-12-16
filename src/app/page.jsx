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
                    className="flex items-center justify-center p-6 min-h-96 bg-no-repeat"
                    style={{
                      background:
                        'url("https://via.placeholder.com/800x500?text=Ohmlak")',
                      backgroundPosition: "center",
                    }}
                  >
                    <Button>Contact us</Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <section className="p-8 flex flex-row gap-8 items-center">
        <div className="w-2/3">
          <h2 className="text-8xl">We work without</h2>
          <p className="text-2xl">
            Al proceder, das tu consentimiento para recibir llamadas, mensajes
            de WhatsApp o SMS, incluidos aquellos enviados de manera
            automatizada, por parte de la aplicación y sus afiliados al número
            proporcionado.Al proceder, das tu consentimiento para recibir
            llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de
            manera automatizada, por parte de la aplicación y sus afiliados al
            número proporcionado
          </p>
        </div>
        <div className="p-8 w-1/3 mr-[50px]">
          <img
            src="https://via.placeholder.com/800x500?text=Ohmlak"
            alt=""
            className="rounded-tl-3xl shadow-[50px_50px_0px_0px_white] aspect-square"
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
        <div class="grid grid-cols-3 gap-4 p-6">
          {/* <!-- First Row --> */}
          <div class="col-span-1 border p-4 rounded-lg">
            <h2 class="text-lg font-bold">Head Line</h2>
            <p>
              Al proceder, das tu consentimiento para recibir llamadas, mensajes
              de WhatsApp o SMS, incluidos aquellos enviados
            </p>
          </div>
          <div class="col-span-2 grid grid-cols-2 gap-4">
            <div class="border p-4 rounded-lg">
              <h2 class="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div class="border p-4 rounded-lg">
              <h2 class="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
          </div>

          {/* <!-- Second Row --> */}
          <div class="col-span-3 grid grid-cols-4 gap-4">
            <div class="col-span-2 border p-4 rounded-lg bg-gray-100">
              <h2 class="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div class="border p-4 rounded-lg">
              <h2 class="text-lg font-bold">Head Line</h2>
              <p>
                Al proceder, das tu consentimiento para recibir llamadas,
                mensajes de WhatsApp o SMS, incluidos aquellos enviados
              </p>
            </div>
            <div class="border p-4 rounded-lg">
              <h2 class="text-lg font-bold">Explore More</h2>
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
