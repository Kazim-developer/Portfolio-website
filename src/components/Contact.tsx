export default function Contact() {
  return (
    <div className="w-[80%] max-w-[1200px] mx-auto max-[550px]:w-[90%]">
      <h1 className="mb-[1em]">Contact</h1>
      <div className="contact flex gap-[2em] justify-center items-center">
        <a
          href="https://www.linkedin.com/in/muhammad-kazim-raza-885484233/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/linkedin.webp" alt="linkedin" loading="lazy" />
        </a>
        <a
          href="https://github.com/Kazim-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        ></a>
      </div>
    </div>
  );
}
