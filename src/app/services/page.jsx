import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="px-8">
      <section className="py-32">
        <div
          className="bg-[#7CB5FF] px-8 py-16 w-6/12 inline-block float-left"
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0% 100%)",
          }}
        >
          <div>
            <h3 className="text-3xl">Our mission</h3>
            <p className="text-lg">
              is to enhance productivity and efficiency through thoughtfully
              designed interiors and robust electrical systems tailored to the
              unique demands of industrial environments. Backed by a skilled
              team and a passion for innovation, we transform visions into
              functional realities.
            </p>
          </div>
        </div>
        <div
          className="bg-[#C0DBFF] px-8 py-16 w-6/12 inline-block float-right"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 86%)",
          }}
        >
          <div>
            <h3 className="text-3xl text-right">OhmLAK Enterprise </h3>
            <p className="text-lg">
              is your trusted partner in Interior Fit out and industrial
              electrification. Since 2021, we've been committed to delivering
              excellence in every project, combining technical expertise with
              creative innovation to redefine industrial spaces.
            </p>
          </div>
        </div>
      </section>

      <ServiceCard
        title="Industrial HT / LT - Electrification"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="/assets/services/industrial-electrification.jpeg"
      />

      <ServiceCard
        title="Interior fit-out Electrification"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="/assets/services/interior-fit-out-electrification.jpeg"
        orientation="right"
      />

      <ServiceCard
        title="Networking"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="/assets/services/networking.jpeg"
      />

      <ServiceCard
        title="MEP work"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="/assets/services/mep-work.jpeg"
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
        className={`w-1/3 h-min aspect-square flex-grow  object-cover ${
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
