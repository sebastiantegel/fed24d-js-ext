import { useState, type FormEvent } from "react";

export const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    // Stoppa POST request från att göras.
    // Webbläsaren väntar på att vi som utvecklare skall göra klart
    e.preventDefault();

    console.log("Name:", name, " - Email:", email);

    // Spara datat i en databas någonstans...
    // { name, email } === { name: name, email: email } -> { name: "Sebastian", email: "test@test.com"}
    //fetch("...", { method: "POST", body: JSON.stringify({ name, email }) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
