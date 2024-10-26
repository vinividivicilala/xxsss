import React from "react";
import Link from "next/link";
import { education } from "../cv.json";

interface Education {
  institution: string;
  url: string;
  area: string | { n1: string; n2: string };
  startDate: string;
  endDate: string;
}

export default function Education() {
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-xl font-bold">Education</h2>
        {education.map((edu: Education, index: number) => (
          <div key={index} className="mt-3">
            <div className="flex justify-between">
              <Link
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <h3 className="font-medium">{edu.institution}</h3>
              </Link>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
            <p className="mt-1">
              {typeof edu.area === "string" ? (
                <span>{edu.area}</span>
              ) : (
                <span>
                  {edu.area.n1}, {edu.area.n2}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
