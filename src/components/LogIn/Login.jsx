import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../PrivateRoute/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { handleSignIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const formData = new FormData(form);
        // const newUser = Object.fromEntries(formData.entries());
        // console.log(newUser);
        console.log(email, password)

        handleSignIn(email, password)
            .then(result => {
                const currentUser = result.user;
                currentUser.reload().then(() => {
                    console.log(currentUser.displayName, currentUser.photoURL);
                    toast.success("Logged in Successful")
                    navigate(location?.state || '/')
                })
            })
            .catch(error => {
                console.log(error.code);
                if(error.code === "auth/invalid-credential"){
                    toast.error("You have entered email or wrong password")
                } else if(error.code === "auth/user-not-found"){
                    toast.error("User not found")
                } else {
                    toast.error("Login Error:" + error.message)
                }
            })
    }

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                console.log(result.user)
                toast.success("Logged in successful")
                navigate(location?.state || '/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12 outline-1">
            <h3 className="text-2xl font-bold text-center pt-8">Login now!</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset space-y-2 py-4">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><button className="link link-hover">Forgot password?</button></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>

                <p>New to this website? Please <Link className='underline' to='/register'>Register</Link></p>
                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-base-100 text-base-content border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default Login;