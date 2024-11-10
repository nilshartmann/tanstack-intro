import { Link } from "@tanstack/react-router";

export default function ReviewLink() {
  // todo: from="/books/$bookId"
  //         to="/books/$bookId/reviews"

  return (
    <Link className={"text-fuchsia-700 underline hover:text-fuchsia-400"}>
      Reviews
    </Link>
  );
}
