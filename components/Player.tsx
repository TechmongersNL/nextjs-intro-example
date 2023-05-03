// src/components/Player.tsx
type Props = {
  name: string;
  score: number;
  incrementScore: () => void;
};

export default function Player({ name, score, incrementScore }: Props) {
  return (
    <li className="Player">
      <p>
        {name} ({score})
      </p>
      <button onClick={incrementScore}>+1</button>
    </li>
  );
}
