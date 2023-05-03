import { Heading1 } from "@/components/typography";
// app/page.tsx
import Scoreboard from "@/components/Scoreboard";

export default function Home() {
  return (
    <main>
      <Heading1>Scoreboard</Heading1>
      <Scoreboard />
    </main>
  );
}
