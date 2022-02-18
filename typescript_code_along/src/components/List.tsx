import { render } from "@testing-library/react";
import React from "react";

interface isProps {
  people: {
    name: string;
    age: number;
    url: string;
  }[];
}

//*here we let Typescript know that this is a functional component and that it will have the above interface as props
export const List: React.FC<isProps> = ({ people }) => {
  //*IN the instruction he mentioned to add the jsx.element after the () --HOWEVER when i hovered without it it still recognized that the function is returning a JSX element
  const renderList = (): JSX.Element[] => {
    return people.map((person, idx) => {
      return (
        <div key={idx}>
          {person.name}
          <br />
          {person.age}
        </div>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};
