import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-2xl font-bold text-center pt-8">Register now!</h3>
            <div className="card-body">
                <form className="fieldset space-y-2 py-4">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Your Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Photo-URL</label>
                    <input type="text" name='photo' className="input" placeholder="Photo-URL" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account? Please <Link className='underline' to='/log-in'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;