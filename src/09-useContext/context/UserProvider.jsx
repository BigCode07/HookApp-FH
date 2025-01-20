import { useState } from "react";
import { UserContent } from "./UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContent.Provider value={{ user, setUser }}>
      {children}
    </UserContent.Provider>
  );
}
