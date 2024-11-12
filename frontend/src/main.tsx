import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import { createQueryClient } from "./create-query-client.ts";
import { routeTree } from "./routeTree.gen.ts";
import SimpleDevTool from "./SimpleDevtool.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = createQueryClient();

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className={`font-barlow text-gray-900 antialiased`}>
    <QueryClientProvider client={queryClient}>
      <SimpleDevTool />
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </div>,
);
