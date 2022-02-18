import React, { useState } from "react";
//*instead of repeating the interface over and over just import it from the main app
import { isState as Props } from "../App";

interface isProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

export const AddToList: React.FC<isProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
  });

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  //*Void after parenthesis means that this function is not expected to return anything
  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([
      ...people,
      { name: input.name, age: Number(input.age), url: input.url },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={onHandleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        value={input.age}
        onChange={onHandleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Url"
        value={input.url}
        onChange={onHandleChange}
        name="url"
      />
      <button onClick={handleClick}>Add to List</button>
    </div>
  );
};
