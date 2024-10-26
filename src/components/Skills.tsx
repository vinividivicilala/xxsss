import { skills } from "../cv.json";

interface Skills {
  name: string;
}

export default function Skills() {
  return (
    <section className="mt-10 mb-10">
      <div>
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="mt-3">
          <ul className=" inline-flex gap-2 flex-wrap">
            {skills.map((skill: Skills, index: number) => (
              <li
                className="text-sm font-medium p-1 rounded-md bg-neutral-200"
                key={index}
              >
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
