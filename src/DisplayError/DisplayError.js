import React from 'react';
import { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const {logout} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogout = () => {
    logout()
    .then(()=>{
        navigate('/dashboard');
    })
    .catch(err=>console.log(err));
    }     
    return (
        <div>
            <p className='text-red-500'>Something went Wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please<button  onClick={handleLogout}>Sign out</button></h4>
        </div>
    );
};

export default DisplayError;