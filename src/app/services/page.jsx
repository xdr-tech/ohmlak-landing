import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="px-8">
      <ServiceCard
        title="Industrial HT / LT - Electrification"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/800x500?text=Ohmlak"
      />

      <ServiceCard
        title="Interior fit-out Electrification"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/800x500?text=Ohmlak"
        orientation="right"
      />

      <ServiceCard
        title="Networking"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/800x500?text=Ohmlak"
      />

      <ServiceCard
        title="MEP work"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/800x500?text=Ohmlak"
        orientation="right"
      />
    </main>
  );
}

function ServiceCard({ title, description, image, orientation = "left" }) {
  return (
    <div
      className={`my-12 p-12 flex flex-row gap-12 justify-between items-center border rounded-2xl w-10/12 ${
        orientation === "left"
          ? "flex-row mr-0 ml-auto"
          : "flex-row-reverse mr-auto ml-0"
      }`}
    >
      <div
        className={`w-1/3 flex-grow ${
          orientation === "left" ? "-ml-24" : "-mr-24"
        }`}
      >
        <img src={image} alt={title} className="aspect-square rounded-2xl" />
      </div>
      <div className="w-2/3 flex flex-col gap-8">
        <span className="text-2xl">{title}</span>
        <p>{description}</p>
        <div
          className={`inline-flex items-center gap-4 group ${
            orientation === "left" ? "self-end" : "self-start"
          }`}
        >
          <Link href="/contact" className="px-4 py-2 border rounded-full">
            Contact now
          </Link>
          <Link
            href="/contact"
            className="p-2 border rounded-full transition-transform group-hover:-rotate-45"
          >
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
