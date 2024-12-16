export default function About() {
  return (
    <main className="px-8">
      <AboutCard
        title="Headline"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/500x500?text=Ohmlak"
      />
      <AboutCard
        title="Headline"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/500x500?text=Ohmlak"
        orientation="right"
      />
      <AboutCard
        title="Headline"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/500x500?text=Ohmlak"
      />
      <AboutCard
        title="Headline"
        description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado.Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS, incluidos aquellos enviados de manera automatizada, por parte de la aplicación y sus afiliados al número proporcionado"
        image="https://via.placeholder.com/500x500?text=Ohmlak"
        orientation="right"
      />
    </main>
  );
}

function AboutCard({ title, description, image, orientation = "left" }) {
  return (
    <div
      className={`my-12 p-12 flex flex-row gap-12 justify-between items-center ${
        orientation === "left"
          ? "flex-row mr-0 ml-auto"
          : "flex-row-reverse mr-auto ml-0"
      }`}
    >
      <div className={`p-8 w-1/3 flex-grow `}>
        <img
          src={image}
          alt={title}
          className={`aspect-square ${
            orientation === "left"
              ? "rounded-tr-3xl shadow-[-30px_30px_0px_0px_white]"
              : "rounded-tl-3xl  shadow-[30px_30px_0px_0px_white]"
          }`}
        />
      </div>
      <div className="w-2/3 flex flex-col gap-4">
        <span className="text-2xl self-center">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
