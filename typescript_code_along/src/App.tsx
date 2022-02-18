import { useState } from "react";
import "./App.css";
import { AddToList } from "./components/AddToList";
import { List } from "./components/List";

//Type definition -- like a schema for the object inside the Array of Objects that will go inside the state. inserted after useState!!
export interface isState {
  people: {
    name: string;
    age: number;
    url: string;
  }[];
}

function App() {
  //*People are objects in array and to start off its an empty arr
  const [people, setPeople] = useState<isState["people"]>([
    {
      name: "Liad Raz",
      age: 34,
      url: "",
    },
    {
      name: "Ori Altarace",
      age: 38,
      url: "",
    },
    {
      name: "John Doe",
      age: 80,
      url: "",
    },
  ]);

  // people.map((p) => {
  //   p.url;
  // });

  return (
    <div>
      <h1>People invited to the Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
