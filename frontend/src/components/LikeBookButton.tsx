import { useLikeMutation } from "./like-mutation.ts";

type LikeBookButtonProps = {
  bookId: number;
};

export function LikeBookButton({ bookId }: LikeBookButtonProps) {
  const mutation = useLikeMutation(bookId);

  return (
    <button
      onClick={() => mutation.mutate()}
      className={
        "ml-2 rounded border border-fuchsia-700 px-1.5 py-1 hover:bg-fuchsia-300"
      }
    >
      Like!
    </button>
  );
}
