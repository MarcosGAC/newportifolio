//nesse arquivo será colocado todas as funcoes para pegar os dados
import { ProjectProps } from "@/app/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export async function getProjects(): Promise<ProjectProps[]> {
  return createClient(clientConfig).fetch(
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

export async function getProject(slug: string): Promise<ProjectProps> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="project" && slug.current == $slug][0]{
_id,
_createdAt,  
name,
"slug": slug.current,
"image":image.asset->url,
url,
content
    }`,
    {
      slug,
    }
  );
}
