//nesse arquivo será colocado todas as funcoes para pegar os dados
import { ProjectProps } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects():Promise <ProjectProps[]> {
  const client = createClient({
    projectId: "ffhfjd06",
    dataset: "production",
    apiVersion: "2023-03-04",
  });
  return client.fetch(
    groq`*[_type=="project"]{
_id,
_createdAt,
name,
"slug": slug.current,
"image":image.asset->url,
url,
content
    }`
  );
}
