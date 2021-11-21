import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';


const Privateroute = (props) => {
  const { user, loading } = useContext(AuthContext)
  const { children, ...rest } = props
  if (loading) {
    return <div className='text-center h-screen flex justify-center items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    </div>
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default Privateroute;