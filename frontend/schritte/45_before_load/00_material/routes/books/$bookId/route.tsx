import { createFileRoute } from "@tanstack/react-router";

import Pending from "../../../components/Pending.tsx";
import { addLogEvent } from "../../../event-store.ts";
import { bookByIdQueryOpts } from "../../../components/book-query.ts";
import { reviewsForBookQueryOpts } from "../../../components/reviews-query.ts";

export const Route = createFileRoute("/books/$bookId")({
  beforeLoad({ params, context }) {
    addLogEvent(Route.id, `beforeLoad`);
    const { bookId } = params;

    // todo:
    //     context.queryClient.ensureQueryData(bookByIdQueryOpts(bookId));
    //     context.queryClient.ensureQueryData(reviewsForBookQueryOpts(bookId));
  },
  pendingComponent: Pending,
});
