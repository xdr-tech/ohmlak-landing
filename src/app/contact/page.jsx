export default function Contact() {
  return (
    <main className="px-8">
      <p className="w-3/4 mx-auto p-4 border rounded-full text-center">
        Ohmlak's quote
      </p>

      <section className="flex flex-row gap-8">
        <img
          src="https://via.placeholder.com/500x500?text=Ohmlak"
          alt="mockup"
          className="aspect-square w-1/2 p-12 rounded-lg"
        />
        <div className="grow p-12">
          <form action="">
            <Input name="name" label="Full name" />
            <Input name="mobile" label="Mobile number" />
            <Input name="description" label="Description" />
            <input
              type="submit"
              value="Submit"
              className="w-full min-h-8 my-2 rounded-lg bg-gray-400 text-black"
            />
          </form>
        </div>
      </section>
    </main>
  );
}

function Input({ name, label }) {
  return (
    <div className="my-2">
      <label htmlFor={name} className="block">
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="w-full min-h-8 my-2 rounded-lg"
      />
    </div>
  );
}
