import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { addLogEvent } from "../event-store.ts";

type DemoRouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<DemoRouterContext>()({
  component: RootLayout,
  beforeLoad: async ({ context, location }) => {
    addLogEvent(Route.id, "beforeLoad");
  },
});

function RootLayout() {
  return (
    <div className={"container mx-auto mt-8"}>
      <header className={"flex-col p-2"}>
        <div className={"flex items-center justify-between bg-fuchsia-700 p-2"}>
          <h1 className={"font-anton text-3xl text-violet-50 hover:underline"}>
            <Link to="/"> Books and Routing!</Link>
          </h1>
          <Link className={"text-violet-50 hover:underline"} to={"/about"}>
            About us
          </Link>
        </div>
        <nav className={"flex justify-end space-x-4 bg-fuchsia-300 px-2 py-1"}>
          <Link
            className={"hover:text-violet-50 hover:underline"}
            to={"/books/$bookId"}
            params={{ bookId: "1" }}
          >
            Article one
          </Link>
          <div>|</div>
          <Link
            className={"hover:text-violet-50 hover:underline"}
            to={"/books/$bookId/comments"}
            params={{ bookId: "1" }}
          >
            Comments
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </div>
  );
}
