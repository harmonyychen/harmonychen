import type { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Harmony Chen — Technology, Product & Design",
  description:
    "Harmony Chen is a systems design engineering student building thoughtful products and communities.",
};

export default function Home() {
  return <Portfolio />;
}
