"use client";

import AddPlayerForm from "./AddPlayerForm";
import { Button } from "../UI";
import { Heading1 } from "../typography";
import Player from "./Player";
import SelectBox from "../UI/SelectBox";
import tw from "tailwind-styled-components";
import { useState } from "react";

type PlayerObj = { id: number; name: string; score: number };

const initialPlayers: PlayerObj[] = [
  { id: 1, name: "Violeta", score: 11 },
  { id: 2, name: "Eszter", score: 14 },
  { id: 3, name: "Jeroen v2", score: 4 },
  { id: 4, name: "Lisa", score: 42 },
];

function compareBy(sortKey: SortKey) {
  switch (sortKey) {
    case "name":
      return compareByName;
    case "score":
      return compareByScore;
    default:
      console.warn("Can't sort by", sortKey);
      return;
  }
}

function compareByScore(playerA: PlayerObj, playerB: PlayerObj) {
  return playerB.score - playerA.score;
}

function compareByName(playerA: PlayerObj, playerB: PlayerObj) {
  return playerA.name.localeCompare(playerB.name);
}

function getLastId(players: PlayerObj[]) {
  return players.reduce((curr, next) => {
    if (next.id > curr.id) return next;
    return curr;
  }).id;
}

type SortKey = "score" | "name";

const Actions = tw.p`
  flex flex-row gap-2 items-center
`;

export default function Scoreboard() {
  const [sortBy, setSortBy] = useState<SortKey>("score");
  const [players, setPlayers] = useState<PlayerObj[]>(initialPlayers);

  const playersSorted = [...players].sort(compareBy(sortBy));

  const incrementScore = (id: number) => () => {
    setPlayers(
      players.map((player) =>
        id === player.id ? { ...player, score: player.score + 1 } : player
      )
    );
  };

  const addPlayer = (name: string) => {
    setPlayers([...players, { id: getLastId(players) + 1, name, score: 0 }]);
  };

  const reset = () => {
    setPlayers(players.map((player) => ({ ...player, score: 0 })));
    setSortBy("name");
  };

  return (
    <div className="flex flex-col py-8 px-4 max-w-5xl mx-auto gap-2 bg-slate-200 dark:bg-slate-950">
      <Heading1>Scoreboard</Heading1>
      <Actions>
        Sort order:{" "}
        <SelectBox<SortKey>
          options={[
            { value: "score", label: "Sort by score" },
            { value: "name", label: "Sort by name" },
          ]}
          onChange={setSortBy}
          value={sortBy}
        />
        <Button onClick={reset}>Reset</Button>
      </Actions>

      <p>Player&apos;s scores:</p>
      <ul>
        {playersSorted.map((player) => (
          <Player
            key={player.id}
            {...player}
            incrementScore={incrementScore(player.id)}
          />
        ))}
      </ul>

      <AddPlayerForm onSubmit={addPlayer} />
    </div>
  );
}
