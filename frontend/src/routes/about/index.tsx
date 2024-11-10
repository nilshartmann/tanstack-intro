import { createFileRoute } from "@tanstack/react-router";

import ComplexChart from "./-ComplexChart.tsx";

export const Route = createFileRoute("/about/")({
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <div className={""}>
      <h1 className={"text-3xl text-pink-700"}>About us</h1>
      <p>lorem ipsum</p>

      {/*

      Large components with a huuuge amount of JavaScript:

      */}

      <ComplexChart />
    </div>
  );
}
