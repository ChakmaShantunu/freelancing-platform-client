import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../PrivateRoute/AuthProvider';

const Register = () => {

    const navigate = useNavigate();

    const { handleSignUp, setUser, updateUser } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name, email, photo, password);

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (regex.test(password)) {
            alert("valid password")
        }
        else {
            alert("Password must contain at least one capital letter, one smaller and a number")
        }

        if (!name || !email || !password) {
            alert("Please fill in all fields")
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters")
            return;
        }

        handleSignUp(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                    navigate('/');
                })
                    .catch(error => {
                        console.log(error);
                        setUser(user)
                    })

            })
            .catch(error => {
                console.log(error);

            })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl my-12">
            <h3 className="text-2xl font-bold text-center pt-8">Register now!</h3>
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset space-y-2 py-4">
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