// import { useEffect } from 'react';
// import axios from 'axios';

// const ProtectedRoute = ({ children }) => {
//     useEffect(() => {
//         axios.get('http://localhost:8080/verify', { withCredentials: true }).catch(() => {

//             window.location.href = 'http://localhost:3001/';
//         });
//     }, []);

//     return children;
// };

// export default ProtectedRoute;

import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    axios
      .get("https://gautamzerodhabackend.onrender.com/verify", {
        withCredentials: true,
      })
      .then(() => {
        setAuthorized(true);
      })
      .catch(() => {
        setAuthorized(false);
        // 🔴 cross-domain redirect (CORRECT)
        window.location.replace(
          "https://gautamzerodhafrontend.onrender.com/login"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ textAlign: "center", marginTop: "100px" }}>
        Checking authentication...
      </p>
    );
  }

  // 👇 important: render NOTHING if unauthorized (redirect already triggered)
  if (!authorized) return null;

  return children;
};

export default ProtectedRoute;
