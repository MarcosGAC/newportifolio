"use client";
import { getProjects } from "@/sanity/schemas/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <h1>Meu projeto vem aqui</h1>

      {projects.map((project) => {
        return (
          <div key={project._id}>
            <h1>{project.name}</h1>
            <img src={project.image} />
          </div>
        );
      })}
    </main>
  );
}
