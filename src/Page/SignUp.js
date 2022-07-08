import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import backgroundImage from '../Asset/Images/particle-background.jpg'
import auth from '../firebase.init';
import { useState } from 'react';
const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user);
                    navigate('/students')

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                });
        }
        else {
            setError("Password not match")
        }

    }


    return (
        <div className='hero h-[91vh]' style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundPosition: "center" }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={(e) => handleSubmit(e)} class="card-body">
                    <h1 className='text-4xl text-primary mb-6 text-center'>Sign up now</h1>
                    <div class="form-control">
                        <input type="email" placeholder="Your email" class="input input-bordered rounded-3xl mb-4" required onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <input type="password" placeholder="password" class="input input-bordered rounded-3xl mb-4" required onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div class="form-control">
                        <input type="password" placeholder="confirm password" class="input input-bordered rounded-3xl mb-4" required onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="checkbox" class="mb-4 mr-3" required /><span>I agree to the term of service</span>
                    </div>
                    {error ? <p className='text-center mb-8 text-lg text-red-700'>{error}</p> : ""}
                    <div class="form-control">
                        <button class="btn btn-primary rounded-3xl">SingUP</button>
                    </div>
                </form>
                <p className='text-center mb-8 text-lg'>Don't have any account? <Link to='/login' className='text-primary font-bold'>SignIn</Link></p>
            </div>

        </div>
    );
};

export default SignUp;