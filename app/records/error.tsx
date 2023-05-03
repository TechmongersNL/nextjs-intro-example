"use client"; // Error components must be Client components

import { UIError } from "@/components/UI";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <UIError
      error={error}
      reset={reset}
      title="Something went wrong in /records!"
    />
  );
}
