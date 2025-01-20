import { useContext } from "react";
import { UserContent } from "./context/UserContext.jsx";
export const LoginPage = () => {
  const { hola, user } = useContext(UserContent);
  console.log(hola, user);

  return (
    <div>
      <h6>LoginPage</h6>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
};
