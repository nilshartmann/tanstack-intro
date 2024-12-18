import { BookmarkIcon } from "@heroicons/react/24/outline";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

import { useRenderedLog } from "./use-rendered-log.ts";

type BookmarkButtonProps = {
  bookId: number;
};

// todo:
//  - getRouteApi("/books");
//  - const selected = Route.useSearch(
//       select: (s) => s.selectedBookId
//    )
//  - navigate = useNavigate()
//    - to: "/books"
//    - search: { selectedBooksId: .... }
//
//  - const selected = Route.useSearch(
//       const isBookmarked = BooksRoute.useSearch({ select: (s) => s.selectedBookId === bookId, })
//    )

const BooksRoute = getRouteApi("/books/");

export default function BookmarkButton({ bookId }: BookmarkButtonProps) {
  useRenderedLog("BookmarkButton");
  const navigate = useNavigate();
  const isBookmarked = BooksRoute.useSearch({
    select: (s) => s.selectedBookId === bookId,
  });

  const handleBookmarkClick = () => {
    navigate({
      to: "/books",
      search: {
        selectedBookId: isBookmarked ? undefined : bookId,
      },
    });
  };

  return (
    <button
      className={
        "mt-4 flex items-center space-x-2 text-lg hover:cursor-pointer hover:underline"
      }
      onClick={handleBookmarkClick}
    >
      <BookmarkIcon
        className={twMerge(
          "h-8 w-8 stroke-fuchsia-700",
          isBookmarked && "fill-fuchsia-700",
        )}
      />
      Bookmark
    </button>
  );
}
