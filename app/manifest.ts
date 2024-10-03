import { MetadataRoute } from "next";
import manifestObj from "@public/manifest.json";

export default function manifest(): MetadataRoute.Manifest {
  return manifestObj as MetadataRoute.Manifest;
}
