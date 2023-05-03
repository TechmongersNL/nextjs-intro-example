import tw from "tailwind-styled-components";

type InputProps = {
  $hasError?: boolean;
};

export const Input = tw.input<InputProps>`
  shadow appearance-none
  w-full
  py-2 px-3
  border rounded
  text-slate-700 dark:text-slate-200
  leading-tight
  focus:outline-none focus:shadow-outline"

  ${({ $hasError }) =>
    $hasError
      ? "border-2 border-red-500"
      : "border-slate-700 dark:border-slate-200"}
`;
