import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { commentsForBookQueryOpts } from "../../-queries.ts";

export const Route = createFileRoute("/books/$bookId/comments/")({
  component: CommentsRoute,
});

function CommentsRoute() {
  const bookId = Route.useParams({
    select: (p) => p.bookId,
  });
  const { data: comments } = useSuspenseQuery(commentsForBookQueryOpts(bookId));

  return (
    <div>
      {comments.map((c) => (
        <p>{c.comment}</p>
      ))}
    </div>
  );
}
