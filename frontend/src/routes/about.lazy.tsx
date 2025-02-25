import { createLazyFileRoute } from "@tanstack/react-router";
import AboutRoute from "../components/AboutRoute.tsx";

export const Route = createLazyFileRoute("/about")({
  component: AboutRoute,
});
