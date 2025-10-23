interface SkillProps {
  skillName: string;
  path: string;
}

export default function Skill({ skillName, path }: SkillProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img
        src={path}
        alt={skillName}
        loading="lazy"
        className="w-[60px] h-[60px] transition-transform duration-300 hover:scale-110"
      />
      <h1 className="mt-[0.75em] text-base font-medium">{skillName}</h1>
    </div>
  );
}
