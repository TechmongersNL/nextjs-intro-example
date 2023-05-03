import { HTMLAttributes } from "react";
import tw from "tailwind-styled-components";

type ButtonProps = {
  $large?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const Button = tw.button<ButtonProps>`
  px-2 py-1
  bg-orange-500 dark:bg-orange-600
  hover:bg-orange-400 dark:hover:bg-orange-500
  text-white
  rounded-md
  border
  ${(button) => button.$large && `text-xl px-4 py-2`}
`;
