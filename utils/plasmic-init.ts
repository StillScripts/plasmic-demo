import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { Button } from "../components";

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

PLASMIC.registerComponent(Button, {
  name: "Button1",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});
