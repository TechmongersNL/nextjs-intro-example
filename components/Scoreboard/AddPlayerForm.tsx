import { Button } from "../UI";
import { Input } from "../UI/Input";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

type Props = {
  onSubmit: (name: string) => void;
};

export default function AddPlayerForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const doSubmit = ({ name }: FormValues) => {
    onSubmit(name);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(doSubmit)}>
      <div className="flex flex-col gap-2 items-start justify-start">
        <Input
          {...register("name", { required: true })}
          $hasError={!!errors.name}
        />
        <Button className="flex-1" type="submit">
          Add Player
        </Button>
      </div>
    </form>
  );
}
