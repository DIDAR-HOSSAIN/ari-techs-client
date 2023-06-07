import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useToken from '../../../../hooks/useToken';
import {AuthContext} from '../../contexts/AuthProvider/AuthProvider';

const GoogleLogin = () => {
  const {
    googleSignIn,
    updateUser
  } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: user.name
        }

        updateUser(userInfo)
          .then(() => {
            saveUserToDb(user.displayName, user.email);

          })

        const currentUser = {
          email: user.email
        }

        fetch('https://ari-techs-server.vercel.app/jwt', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('accessToken', data.token);
            navigate('/')

          });

      })
      .catch(err => console.error(err))
  }

  const saveUserToDb = (name, email) => {
    const user = {
      name,
      email
    };
    fetch('https://ari-techs-server.vercel.app/users', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        setCreatedUserEmail(email);

      })
  }

  return ( 
    <div>
    <p className = 'text-center form-control mt-2 btn btn-outline mb-4'>
    <button onClick = {handleGoogleSignIn}>
     Login with Google </button> 
    </p> 
    </div>
  );
};

export default GoogleLogin;