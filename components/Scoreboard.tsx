"use client";

import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";
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

type SortKey = "score" | "name";

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

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select
          onChange={(event) => {
            setSortBy(event.target.value as SortKey);
          }}
          value={sortBy}
        >
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>

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

      <AddPlayerForm />
    </div>
  );
}
