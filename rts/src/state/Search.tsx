import { useState } from "react";

const users = [
  { name: "Ori", age: 38 },
  { name: "Liad", age: 35 },
  { name: "Noa", age: 46 },
];
const Search: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      <div>
        {user?.name}
        <br />
        {user?.age}
      </div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};
export default Search;
