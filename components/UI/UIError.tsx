"use client"; // Error components must be Client components

import { Button } from "./Button";
import { Heading1 } from "../typography";
import { useEffect } from "react";

export const UIError = ({
  title,
  error,
  reset,
}: {
  title: string;
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="bg-red-600/40 border border-red-600 rounded-md p-8">
      <Heading1>{title}</Heading1>
      <Button
        $large
        className="bg-red-500 hover:bg-red-400"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
};
