import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "z6ulhdx6",
  dataset: "production",
  useCDN: "true",
});
