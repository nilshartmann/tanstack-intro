import { createFileRoute } from "@tanstack/react-router";

import { addLogEvent } from "../../../../event-store.ts";

export const Route = createFileRoute("/books/$bookId/reviews")({
  beforeLoad({ params, context }) {
    addLogEvent(Route.id, `beforeLoad`);
    const { bookId } = params;

    // context.queryClient.ensureQueryData(reviewsForBookQueryOpts(bookId));
  },
});
