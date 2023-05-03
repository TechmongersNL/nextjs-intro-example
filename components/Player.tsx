import { useEffect, useState } from "react";

import { Button } from "./UI";
import tw from "tailwind-styled-components";

type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

type PlayerScoreProps = {
  $updated?: boolean;
};

const PlayerScore = tw.p<PlayerScoreProps>`
  w-16
  transition-colors
  duration-300
  ease-in-out

  ${(p) => (p.$updated ? "text-orange-400" : "text-black dark:text-slate-200")}
`;

const PlayerRow = tw.li`
  flex flex-row
  gap-2 items-center
  px-4 py-2
  border
  border-slate-200 dark:border-slate-400
  bg-white dark:bg-slate-700
  rounded-md
`;

export default function Player({ name, score, incrementScore }: Props) {
  const [$updated, isUpdated] = useState(true);

  useEffect(() => {
    isUpdated(true);
    setTimeout(() => isUpdated(false), 500);
  }, [score]);

  return (
    <PlayerRow>
      <PlayerScore $updated={$updated}>{score}</PlayerScore>
      <p className="font-xl flex-grow">{name}</p>
      <Button onClick={incrementScore}>+1</Button>
    </PlayerRow>
  );
}
