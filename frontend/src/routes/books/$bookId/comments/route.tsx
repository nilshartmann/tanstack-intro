import { createFileRoute } from "@tanstack/react-router";

import { addLogEvent } from "../../../../event-store.ts";
import { commentsForBookQueryOpts } from "../../-queries.ts";

export const Route = createFileRoute("/books/$bookId/comments")({
  beforeLoad({ params, context }) {
    addLogEvent(Route.id, `beforeLoad`);
    const { bookId } = params;

    context.queryClient.ensureQueryData(commentsForBookQueryOpts(bookId));
  },
});
