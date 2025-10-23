interface Props {
  title: string;
  description: string;
  path: string;
}

export default function Project({ title, description, path }: Props) {
  return (
    <div className="flex flex-col justify-between items-start bg-[var(--color-card)] p-[1em] rounded-[20px] hover:translate-y-[-5px] transition-transform duration-300">
      <div className="text-content">
        <h1 className="pb-[0.5em]">{title}</h1>
        <p className="pb-[1em]">{description}</p>
      </div>
      <a href={path} target="_blank" rel="noopener noreferrer">
        <button>Live App</button>
      </a>
    </div>
  );
}
