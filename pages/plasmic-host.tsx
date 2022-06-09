import { NextPage } from "next";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../utils/plasmic-init";

const PlasmicHost: NextPage = () => {
  return PLASMIC && <PlasmicCanvasHost />;
};

export default PlasmicHost;
