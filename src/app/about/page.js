export default function About() {
  return (
    <main className="px-8">
      <AboutCard
        title="Our Journey"
        description="Established in 2021, OhmLAK Enterprises has grown to become a leader in crafting smart and sustainable electrical solutions. We believe every space has the potential to drive success, and our work reflects a relentless dedication to quality, reliability and customer satisfaction."
        image="/assets/about/our-journey.jpeg"
        shadowColor="#7CB5FF"
      />
      <AboutCard
        title="Our Promise"
        description="From blueprint to reality, we're with you every step of the way—delivering tailored solutions that empower industries and redefine standards."
        image="/assets/about/our-promise.jpeg"
        orientation="right"
        shadowColor="#736C6C"
      />
      <AboutCard
        title="Mission"
        description="Delivering quality and satisfied service in the budget which is not only meets our clients the requirements but also makes them be regardful of the fact “Value for Decision”. we shall be shepherded by values of reliability, integrity, dedication,  commitment, and collaboration. Our aim is to sustain the growth and conserve social responsibility and green environment by adopting energy conservation methods and safety policies which attains the Indian standards. We focus on client satisfaction and complete the projects happy hearts to exceed their expectations."
        image="/assets/about/mission.jpeg"
        shadowColor="#075407"
      />
      <AboutCard
        title="Vision"
        description="To be the most sustainable Service provider in the discipline of Facility Creation and be identified for an unsurpassed standard of quality. We believe “Ur happiness and Satisfaction is our Success”"
        image="/assets/about/vision.jpeg"
        orientation="right"
        shadowColor="#150A4E"
      />
    </main>
  );
}

function AboutCard({
  title,
  description,
  image,
  orientation = "left",
  shadowColor,
}) {
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
