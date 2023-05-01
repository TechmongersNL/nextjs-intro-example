// components/typography.tsx

import tw from "tailwind-styled-components";

export const Article = tw.article`
  max-w-3xl
  font-serif
  text-base
  leading-relaxed
`;

export const Heading1 = tw.h1`
  font-extrabold
  text-5xl
  mb-5
  font-sans
`;

export const Paragraph = tw.p`
  mb-2
`;

export const Intro = tw.p`
  font-sans
  text-xl
  leading-loose
  mb-4
  tracking-wide
  text-gray-700 dark:text-gray-400
`;

export const ImageWrapper = tw.figure`
  relative
  aspect-video
  mt-4
  mb-12
  shadow-md
`;

export const Caption = tw.figcaption`
  absolute
  -bottom-12
  font-thin
  text-gray-700 dark:text-gray-400
  text-center
  w-full
  mb-4
  line-clamp-1
`;

export const StyledLink = tw.a`
  font-semibold
  pointer-events-auto
  text-orange-600 dark:text-orange-500
  hover:underline hover:text-orange-400 dark:hover:text-orange-700
`;
