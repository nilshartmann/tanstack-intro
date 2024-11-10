import { BookmarkIcon } from "@heroicons/react/24/outline";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";

import { useRenderedLog } from "./use-rendered-log.ts";

type BookmarkButtonProps = {
  bookId: number;
};

// todo:
//   const BooksRoute = getRouteApi("/books/");

export default function BookmarkButton({ bookId }: BookmarkButtonProps) {
  useRenderedLog("BookmarkButton");
  const navigate = useNavigate();

  // todo: bbs
  const currentlySelectedBookId = -1;
  const isBookmarked = currentlySelectedBookId === bookId;

  const handleBookmarkClick = () => {
    // todo: navigate  bbh
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
