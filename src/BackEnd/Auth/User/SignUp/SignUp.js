import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';
import GoogleLogin from '../SocialLogin/GoogleLogin';

const Register = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
      navigate('/')
    }

    const handleRegister = event =>{
      setSignUpError('');
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User created successfully.')
            const userInfo = {
              displayName: name
            }
            updateUser(userInfo)
            .then(()=>{
              saveUserToDb(user.displayName, user.email);
              
            })  
            .catch(err => console.log(err));
        })
        .catch(error => {
          console.error(error)
          setSignUpError(error.message)
        });
    }

    const saveUserToDb = (name, email)=>{
      const user = {name, email};
      fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data=>{
        setCreatedUserEmail(email);

      })
    }



return (
  <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="">
      <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Sign Up!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        {
          signUpError && <p className='text-red-600'>{signUpError}</p>
        }
        <p className='text-secondary'>Already have an account?<a href="/login" className="label-text-alt link link-hover text-lg"> Please Login</a></p>
      </div>
    </form>
    <div className="divider mt-0">OR</div>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
</div>
    );
};

export default Register;