import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Ori", age: 38 },
  { name: "Liad", age: 35 },
  { name: "Noa", age: 46 },
];
const UserRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

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
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};
export default UserRef;
