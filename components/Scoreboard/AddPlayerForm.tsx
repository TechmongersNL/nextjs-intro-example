import { FormEvent, useState } from "react";

import { Button } from "../UI";
import { Input } from "../UI/Input";

type Props = {
  onSubmit: (name: string) => void;
};

export default function AddPlayerForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name?.length === 0) {
      setError(true);
      return;
    }

    onSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 items-start justify-start">
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setError(event.target.value.length === 0);
            setName(event.target.value);
          }}
          $hasError={error}
        />
        <Button className="flex-1" type="submit">
          Add Player
        </Button>
      </div>
    </form>
  );
}
