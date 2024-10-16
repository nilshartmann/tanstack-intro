import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: RootRoute });

function RootRoute() {
  return (
    <div className={"container mx-auto mt-20 flex justify-center"}>
      <Link
        className={
          "rounded border border-fuchsia-700 bg-fuchsia-300 p-4 font-anton text-3xl shadow-lg hover:bg-fuchsia-700 hover:text-fuchsia-50 hover:shadow-fuchsia-300"
        }
        to={"/books"}
      >
        Get books!
      </Link>
    </div>
  );
}
