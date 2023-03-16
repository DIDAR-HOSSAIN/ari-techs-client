import React from 'react';

const GoogleLogin = () => {
     
    const handleGoogleSignIn = ()=>{
      
    }
    return (
        <div>
            <p className = 'text-center form-control mt-2' >
                <button onClick={handleGoogleSignIn} className='btn btn-outline mb-4'>Login with Google</button>
            </p>
        </div>
    );
};

export default GoogleLogin;