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

import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios
            .get('https://gautamzerodhabackend.onrender.com/verify', { withCredentials: true })
            .then(() => {
                setAuthorized(true);
            })
            .catch(() => {
                setAuthorized(false);

                window.location.href = 'https://gautamzerodhafrontend.onrender.com/login';
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p style={{ textAlign: 'center', marginTop: '100px' }}>Checking authentication...</p>;
    }

    if (!authorized) {
        return <> {alert('Unauthorized Access, Please login first to access the dashboard.')}</>;
    }

    return children;
};

export default ProtectedRoute;
