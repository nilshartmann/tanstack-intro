import { createLazyFileRoute } from "@tanstack/react-router";

import ComplexChart from "../../components/ComplexChart.tsx";

export const Route = createLazyFileRoute("/about/")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className={""}>
      <h1 className={"text-3xl text-pink-700"}>About us</h1>
      <p>lorem ipsum</p>
      <ComplexChart />
    </div>
  );
}
