import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//...

const client = createClient({
  projectId: "z6ulhdx6",
  dataset: "production",
  apiVersion: "2025-01-20",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  console.log(source);
  return builder.image(source);
}

export default client;
