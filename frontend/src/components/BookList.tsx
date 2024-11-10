import React from "react";

import { IBookAbstract } from "./book-abstract-types.ts";
import BookmarkButton from "./BookmarkButton.tsx";
import { useRenderedLog } from "./use-rendered-log.ts";
import { Link } from "@tanstack/react-router";

type BookListProps = {
  books: IBookAbstract[];
};

export function BookList({ books }: BookListProps) {
  useRenderedLog("BookList");
  return (
    <div className={"space-y-8"}>
      {books.map((b) => {
        return (
          <div key={b.id} className={"rounded border bg-fuchsia-50 p-4 px-8"}>
            {/*

            todo:
              - make h2 a link to /books/:bookId
              - make sure, bookId has correct type! (String!)

              */}
            <Link>
              <h2
                className={
                  "cursor-pointer font-anton text-2xl decoration-2 underline-offset-4 hover:text-fuchsia-700 hover:underline"
                }
              >
                {b.title}
              </h2>
            </Link>
            <p>{b.likes} Likes</p>
            <BookmarkButton bookId={b.id} />
          </div>
        );
      })}
    </div>
  );
}
