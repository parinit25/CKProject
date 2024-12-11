import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (userData) => {
    try {
      const response = await fetch(
        "https://lobster-app-ddwng.ondigitalocean.app/user/login",
        {
          headers: {
            "Content-Type": "application/json",
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
          method: "POST",
          body: JSON.stringify(userData),
        }
      );
      const loginUserData = await response.json();
      if (loginUserData.status) {
        setUser(loginUserData);
        localStorage.setItem("user", JSON.stringify(loginUserData));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error.message);
      return false;
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
