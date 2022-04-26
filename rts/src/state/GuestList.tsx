import { useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>gUESTlIST</h3>
      <ul>
        {guests.map((name) => {
          return <li>{name}</li>;
        })}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>aAD GuEsT </button>
    </div>
  );
};
