"use client";
import { getProjects } from "@/sanity/schemas/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="p-24 text-black">
      <h1>Meu projeto vem aqui</h1>
      <div className="flex flex-wrap gap-8 my-10">
        {projects.map((project) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="hover:scale-105 hover:border-blue-500 transition-all w-80 h-fit rounded-md border-[2px] border-gray-500 p-4 "
            >
              <img src={project.image} className="object-cover rounded-md min-h-[160px]" />

              <h1 className="bg-gradient-to-r from-indigo-700 to-sky-500 bg-clip-text text-transparent text-xl whitespace-nowrap overflow-hidden font-bold">{project.name}</h1>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
