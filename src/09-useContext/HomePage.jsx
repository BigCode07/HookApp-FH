import { useContext } from "react";
import { UserContent } from "./context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContent);
  return (
    <div>
      <h6>
        HomePage <small>{user?.name}</small>
      </h6>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "BigCode", email: "bigcode@gmail.com" })
        }
      >
        Establecer usuario
      </button>
    </div>
  );
};
