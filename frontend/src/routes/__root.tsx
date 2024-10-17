import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import React from "react";

type DemoRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<DemoRouterContext>()({
  component: RootLayout,
  beforeLoad: async () => {
    // addLogEvent(Route.id, "beforeLoad");
  },
});

function RootLayout() {
  return (
    <div className={"container mx-auto mt-8"}>
      <header className={"flex-col p-2"}>
        <div className={"flex items-center justify-between bg-fuchsia-700 p-2"}>
          <h1 className={"font-anton text-3xl text-violet-50 hover:underline"}>
            <Link to="/books"> Books and Routing!</Link>
          </h1>
          <Link className={"text-violet-50 hover:underline"} to={"/about"}>
            About us
          </Link>
        </div>
      </header>
      <main className={"flex space-x-8 p-4 font-barlow text-gray-900"}>
        <div className={"w-full"}>
          <Outlet />
        </div>

        {/*<BookOfTheMonth bookId={"1"} />*/}
      </main>
      {/*<TanStackRouterDevtools />*/}
    </div>
  );
}
