import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import  schemas  from "./sanity/schemas";

const config = defineConfig({
  projectId: "ffhfjd06",
  dataset: "production",
  title: "Marcos Webseite",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
