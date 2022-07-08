import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import backgroundImage from '../Asset/Images/particle-background.jpg'
import auth from '../firebase.init';
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                navigate("/students")

            })
            .catch((error) => {

                setError(error.message);
            });
    }

    return (
        <div className='hero h-[91vh]' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: "center" }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={e => handleLogin(e)} class="card-body">
                    <h1 className='text-4xl text-primary mb-6 text-center'>Sign in now</h1>
                    <div class="form-control">
                        <input type="email" placeholder="Your email" class="input input-bordered rounded-3xl mb-4" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <input type="password" placeholder="password" class="input input-bordered rounded-3xl mb-4" required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="">
                        <input type="checkbox" class="mb-4 mr-3" required /><span>I agree to the term of service</span>
                    </div>
                    {error ? <p className='text-center mb-8 text-lg text-red-700'>{error}</p> : ""}

                    <div class="form-control">
                        <button class="btn btn-primary rounded-3xl">Login</button>
                    </div>
                </form>
                <p className='text-center mb-8 text-lg'>Don't have any account? <Link to='/signup' className='text-primary font-bold'>SignUp</Link></p>
            </div>

        </div>
    );
};

export default Login;