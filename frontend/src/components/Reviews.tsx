import { useSuspenseQuery } from "@tanstack/react-query";
import { reviewsForBookQueryOpts } from "./reviews-query.ts";
import { bookByIdQueryOpts } from "./book-query.ts";

type ReviewsProps = {
  bookId: string | number;
};

export default function Reviews({ bookId }: ReviewsProps) {
  // todo:
  //   - load book with bookByIdQueryOpts and use bookTitle from book

  const result = useSuspenseQuery(bookByIdQueryOpts(String(bookId)));

  const { data: reviews } = useSuspenseQuery(
    reviewsForBookQueryOpts(String(bookId)),
  );

  return (
    <div className={"flex-col space-y-4"}>
      <h3 className={"text-2xl font-medium text-fuchsia-700"}>
        Reviews for book {result.data.title}
      </h3>
      {reviews.map((c) => (
        <p key={c.id}>
          {c.comment} (by: {c.reviewer})
        </p>
      ))}
    </div>
  );
}
