import React, { useState, useEffect, useContext } from "react";

import api from "../../services/api";

import { Context } from "../../Context/AuthContext";

interface User {
  id: number;
  name: string;
  website: string;
}

const Users: React.FC = () => {
  const { handleLogout } = useContext(Context);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/users");

      setUsers(data);
    })();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.website})
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </>
  );
};

export default Users;
