import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];
const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [Name, setName] = useState("");
  const [User, setUser] = useState<
    | {
        name: string;
        age: number;
      }
    | undefined
  >();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const clickHandler = () => {
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === Name.toLowerCase();
    });
    console.log(foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search Details:</h3>
      <input
        ref={inputRef}
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={clickHandler}>Search User</button>
      <div>
        {User ? (
          <>
            <p>Name: {User.name}</p>
            <p>Age: {User.age}</p>
          </>
        ) : (
          <>Not Found</>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
