import { IBookDetails } from "./book-types.ts";
import { LikeBookButton } from "./LikeBookButton.tsx";
import ReviewLink from "./ReviewLink.tsx";
import Reviews from "./Reviews.tsx";

type BookDetailsProps = {
  book: IBookDetails;
};
export default function BookDetails({ book }: BookDetailsProps) {
  return (
    <article className={"flex-col space-y-2"}>
      <h1 className={"font-anton text-2xl font-medium text-fuchsia-700"}>
        {book.title}
      </h1>
      <p>{book.author.toUpperCase()}</p>
      <p>{book.summary}</p>
      <p>{book.likes} Likes</p>

      <Reviews bookId={book.id} />
      {/*

      todo: add <ReviewLink />

      */}
      {/*<ReviewLink />*/}

      {/*

      todo: add  <LikeBookButton bookId={book.id} />

      */}
      {/*<LikeBookButton bookId={book.id} />*/}
    </article>
  );
}
