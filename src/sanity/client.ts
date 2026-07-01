import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w4uswo5o",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: false,
});