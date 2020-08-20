import { useState, useEffect } from "react";

import api from "../../services/api";
import history from "../../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin() {
    try {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      const response = await api.post("/auth", { email, password });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
      setAuthenticated(true);
    } catch (err) {
      alert("falha no login");
      history.push("/login");
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem("token");
    api.defaults.headers.authorization = undefined;
    history.push("/login");
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
