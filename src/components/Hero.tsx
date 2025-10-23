export default function Hero() {
  return (
    <section className="hero w-[80%] max-w-[1200px] mx-auto flex justify-between items-center gap-[1.5em] mb-[3em] max-[550px]:w-[90%]">
      <section className="text-content">
        <h1 className="mb-[0.5em]">Hello, I am Muhammad Kazim Raza</h1>
        <p className="mb-[1em]">
          Self-taught Frontend Developer crafting modern, responsive React
          applications, with a strong ambition to grow into a Full-Stack
          Developer.
        </p>
        <a href="./cv.pdf" rel="noopener noreferrer" download>
          <button>Download my CV</button>
        </a>
      </section>
      <img
        src="./images/laptop.webp"
        alt="laptop"
        loading="lazy"
        className="w-[40%] h-auto max-[720px]:hidden"
      />
    </section>
  );
}
