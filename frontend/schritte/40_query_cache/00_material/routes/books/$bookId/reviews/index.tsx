import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { bookByIdQueryOpts } from "../../../../components/book-query.ts";
import { reviewsForBookQueryOpts } from "../../../../components/reviews-query.ts";

export const Route = createFileRoute("/books/$bookId/reviews/")({
  component: ReviewsRoute,
});

function ReviewsRoute() {
  const bookId = Route.useParams({
    select: (p) => p.bookId,
  });

  // todo:
  //   - book laden
  //    - Titel anzein

  const { data: reviews } = useSuspenseQuery(reviewsForBookQueryOpts(bookId));

  return (
    <div className={"flex-col space-y-4"}>
      <h3 className={"text-2xl font-medium text-fuchsia-700"}>
        Reviews for ????
      </h3>
      {reviews.map((c) => (
        <p key={c.id}>
          {c.comment} (by: {c.reviewer})
        </p>
      ))}
    </div>
  );
}
