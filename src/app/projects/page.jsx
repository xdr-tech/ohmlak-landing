export default function Projects() {
  return (
    <main className="px-8">
      <section className="my-24 flex flex-row flex-wrap gap-x-8 gap-y-16 justify-center">
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
        <ProjectCard
          title="Headline"
          description="Al proceder, das tu consentimiento para recibir llamadas, mensajes de WhatsApp o SMS"
          image="https://via.placeholder.com/500x500?text=Ohmlak"
        />
      </section>
    </main>
  );
}

function ProjectCard({ title, description, image }) {
  return (
    <div
      className={
        "p-4 min-w-[100px] max-w-[300px] flex flex-col gap-4 justify-between items-center bg-gray-500 rounded-2xl"
      }
    >
      <img
        src={image}
        alt={title}
        className="aspect-square -mt-12 rounded-2xl"
      />
      <span className="text-2xl self-center">{title}</span>
      <p>{description}</p>
    </div>
  );
}
