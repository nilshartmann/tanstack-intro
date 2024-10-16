import { createFileRoute } from "@tanstack/react-router";

import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import Pending from "../../../components/Pending.tsx";
import { reviewsForBookQueryOpts } from "../../../components/reviews-query.ts";
import { addLogEvent } from "../../../event-store.ts";

export const Route = createFileRoute("/books/$bookId")({
  beforeLoad({ params, context }) {
    addLogEvent(Route.id, `beforeLoad`);
    const { bookId } = params;

    // todo:
    //     context.queryClient.ensureQueryData(bookByIdQueryOpts(bookId));
    //     context.queryClient.ensureQueryData(reviewsForBookQueryOpts(bookId));

    context.queryClient.ensureQueryData(bookByIdQueryOpts(bookId));
    context.queryClient.ensureQueryData(reviewsForBookQueryOpts(bookId));
  },
  pendingComponent: Pending,
});
