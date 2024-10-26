import Link from "next/link";
import { projects } from "../cv.json";

interface Projects {
  name: string;
  description: string;
  madeWith: string[];
  url: string;
  beta?: boolean;
}
export default function Proyects() {
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-xl font-bold">Proyects</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {projects.map((project: Projects, index: number) => (
            <div
              className="border rounded-lg p-3 flex flex-col justify-between"
              key={index}
            >
              <div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold w-max hover:underline">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs rounded-md p-1 ${
                        project.beta ? "bg-red-200" : "bg-green-300"
                      }`}
                    >
                      {project.beta ? "beta" : ""}
                    </span>
                  </div>
                </Link>
                <p className="mt-1 text-[13px]">{project.description}</p>
              </div>
              <div>
                {project.madeWith && (
                  <ul className="grid grid-cols-2 gap-1 w-[120px] mt-2">
                    {project.madeWith.map((item, i) => (
                      <li
                        className="text-xs w-max p-1 rounded-md bg-neutral-200"
                        key={i}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
