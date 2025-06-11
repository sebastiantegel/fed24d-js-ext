import { useState, type FormEvent } from "react";

type MovieSearchProps = {
  search: (searchText: string) => void;
};

export const MovieSearch = ({ search }: MovieSearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    search(searchText);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};
