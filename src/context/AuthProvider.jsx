import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../config/axios/instance";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [localUser, setLocalUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = () => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setLoading(false);
        return;
      }

      instance
        .get(`/users/wenet-profile`)
        .then((response) => {
          console.log(response.data)
          handleSetAuth(response.data);
          instance
            .get(`/users/profile/${auth.id}`)
            .then((response) => {
              setLocalUser(response.data);
            })
            .catch((error) => {
              console.log(error.response);
              localStorage.removeItem("access_token");
              navigate("/");
            });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.removeItem("access_token");
          setLoading(false);
          navigate("/");
        });
    };

    authenticate();
  }, [navigate]);

  const handleSetAuth = (value) => {
    setAuth(value);
  };

  return (
    <AuthContext.Provider
      value={{ auth, loading, setLoading, handleSetAuth, localUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
