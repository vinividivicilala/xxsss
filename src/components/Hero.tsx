import Image from "next/image";
import WeatherApi from "./WeatherApi";
import hero from "../../public/me.jpeg";
import Email from "./icons/Email";
import Link from "next/link";
import GitHub from "./icons/GitHub";
import Linkedin from "./icons/Linkedin";
import Fiverr from "./icons/Fiverr";

const links = [
  { name: "Email", url: "mailto:fariardiansyah061@gmail.com", icon: <Email /> },
  { name: "Github", url: "", icon: <GitHub /> },
  {
    name: "Linkedin",
    url: "",
    icon: <Linkedin />,
  },
  {
    name: "Fiverr",
    url: "",
    icon: <Fiverr />,
  },
] as const;

export default function Hero() {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-3">Farid Ardiansyah</h1>
        <p className="max-w-[420px]">
          Hobi Teknologi, fokus pengembangan skill untuk masa depan lebih baik.
        </p>
        <WeatherApi />
        <div className="mt-2">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.url} target="_blank">
                  <div className="border rounded border-gray-200 w-max p-2 hover:bg-gray-100 duration-200">
                    {link.icon}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Image
          className="w-auto h-auto rounded-xl"
          src={hero}
          alt="hero"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
