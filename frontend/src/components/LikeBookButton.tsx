import { useLikeMutation } from "./like-mutation.ts";

type LikeBookButtonProps = {
  bookId: number;
};

export function LikeBookButton({ bookId }: LikeBookButtonProps) {
  // todo: enable LikeButton in BookDetails

  // todo: get mutation useLikeMutation(bookId)

  const handleButtonClick = () => {
    // todo: run mutation
  };

  return (
    <button
      onClick={handleButtonClick}
      className={
        "ml-2 rounded border border-fuchsia-700 px-1.5 py-1 hover:bg-fuchsia-300"
      }
    >
      Like!
    </button>
  );
}
