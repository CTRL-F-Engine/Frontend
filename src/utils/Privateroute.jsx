import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
export const Privateroute = ({ children }) => {
    const { isConnected } = useContext(AuthContext);

    
    return isConnected ? children : <Navigate to="/Home" />;
  }

  