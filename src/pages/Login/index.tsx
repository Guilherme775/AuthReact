import React, { useContext, useState } from "react";

import { Context } from "../../Context/AuthContext";

import history from "../../history";

const Login: React.FC = () => {
  const { handleLogin } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function saveItems() {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    handleLogin();
    history.push("/users");
  }

  return (
    <>
      <form onSubmit={saveItems}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="login" />
      </form>
    </>
  );
};

export default Login;
