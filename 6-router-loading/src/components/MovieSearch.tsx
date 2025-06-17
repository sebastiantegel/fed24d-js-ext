import { useState, type FormEvent } from "react";

type MovieSearchProps = {
  search: (text: string) => void;
};

export const MovieSearch = ({ search }: MovieSearchProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    search(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        required
        minLength={2}
      />
      <button>Sök</button>
    </form>
  );
};
