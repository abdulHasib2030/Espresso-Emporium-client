import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const SignIn = () => {
   const {signInUser}= useContext(AuthContext)
    const handleSignin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            const lastSignTime = result?.user?.metadata?.lastSignInTime;
            console.log(lastSignTime);
            const loginInfo = {email, lastSignTime}
            // const result = await 
            fetch('http://localhost:5000/users', {
                method: 'PATCH',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
        })
        .catch(err =>  {
            console.log(err.message);
        })
    }
    return (
        <div>
        <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Sign In now!</h1>
  <p className="py-6">
    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
    quasi. In deleniti eaque aut repudiandae et a id nisi.
  </p>
</div>
<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
  <form className="card-body" onSubmit={handleSignin}>
 
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name ="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Sign In</button>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default SignIn;