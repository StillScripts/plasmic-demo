import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

const id = process.env.PROJECTID || "";
const token = process.env.APITOKEN || "";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: id, // ID of a project you are using
      token: token, // API token for that project
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
