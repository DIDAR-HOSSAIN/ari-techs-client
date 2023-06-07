import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../../hooks/useToken';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import GoogleLogin from '../SocialLogin/GoogleLogin';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth();

const Login = () => {
  const {logout, login} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail]= useState('');
  const [userEmail, setUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';
  if(token){
    navigate(from, {replace:true});
  }
// if (user?.emailVerified === false) {
//   return
// }

  // const handleLogin = event=>{
  //   setLoginError('');
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);

  //   login(email, password)
  //   .then(result =>{
  //     const user = result.user;
  //     console.log(user);
  //     setLoginUserEmail(email);
  //   })
  //   .catch(error=> {
  //     console.log(error.message)
  //     setLoginError(error.message);
  //   });
    
  // }

    //   const handleLogout = ()=>{
    //   logout()
    //   .then()
    //   .catch();
    // }

  const handleLogin = (event) => {
  setLoginError('');
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);

  login(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);

      if (user.emailVerified) {
        setLoginUserEmail(email);
        // Continue with the login process
      } else {
        // User email not verified, sign out the user
        logout();
        setLoginError('Email not verified. Please check your email and verify your account.');
      }
    })
    .catch((error) => {
      console.log(error.message)
      setLoginError(error.message);
    });
}

  
  const handleResetPasswordBlur = (e) => {
    const email = e.target.value;
    setUserEmail(email);
    console.log(email);
  }

  const handleForgetPassword = ()=>{
    sendPasswordResetEmail(auth, userEmail)
  .then(() => {
    alert('Please check your email for reset Password')
   
  })
  .catch((error) => {
    console.log(error);
    // ..
  });
  }

    return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="">
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input onBlur={handleResetPasswordBlur} name="email" type="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
            </div>
              <label className="label">
                <button className="text-secondary text-lg label-text-alt link link-hover" onClick={handleForgetPassword}>Forgot password?</button>
              </label>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
                </div>

                {
                  loginError && <p className='text-red-600'>{loginError}</p>
                }
        
            <p className='text-secondary'>New to Ari Techs Portal?<Link to ="/signup" className="label-text-alt link link-hover text-lg"> Create Account</Link></p>
          </div>
        </form>
          <div className="divider mt-0">OR</div>
        <GoogleLogin></GoogleLogin>
    </div>
      </div>
    </div>
    );
};

export default Login;