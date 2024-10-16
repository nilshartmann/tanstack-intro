type BookOfTheMonthProps = {
  bookId: string;
};

export function BookOfTheMonth({ bookId }: BookOfTheMonthProps) {
  // todo:
  const book: any = {};
  // bookByIdQuery verwenden, um Buch zu laden

  return (
    <div className={"rounded border border-fuchsia-400 p-4"}>
      <h1
        className={
          "mb-2 text-3xl font-medium italic tracking-wider text-fuchsia-700 underline"
        }
      >
        Book of the month
      </h1>
      <h1 className={"font-anton text-2xl font-medium text-fuchsia-700"}>
        {book.title}
      </h1>
      <p>{book.author}</p>
      <p>{book.likes} Likes</p>
    </div>
  );
}
