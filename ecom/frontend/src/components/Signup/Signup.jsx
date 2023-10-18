import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [visible, SetVisible] = useState(false);//for password viisibility
    const [avatar, SetAvatar] = useState(null); //for profile pic

    const handleSubmit = () => { //for sending data to backend
        console.log("ffff");
    };

    const handleFileInputChange = (e) => {
       const file = e.target.files[0]; // Notice the capital 'F' in 'files'

        SetAvatar(file);
    }

    return (
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-800'>
                    Register as a new user
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-18'>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor='fullname' className='block text-sm font-medium text-gray-700'>
                                Fullname
                            </label>
                        </div>
                        <div className="mt-1">
                            <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                type="text" name="text" autoComplete='name' required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                                Email Address
                            </label>
                        </div>
                        <div className="mt-1">
                            <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                type="email" name="email" autoComplete='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                        </div>
                        <div className="mt-1 relative">
                            <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                                type={visible ? "text" : "password"} name="password" autoComplete='current-password' required
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                            {/*password visibility icon*/}
                            {
                                visible ? (
                                    <AiOutlineEye className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => SetVisible(false)} />
                                ) : (
                                    <AiOutlineEyeInvisible className='absolute right-2 top-2 cursor-pointer' size={25} onClick={() => SetVisible(true)} />
                                )
                            }
                        </div>
                        <div>
                            <label htmlFor="avatar" className='block text-sm font-medium text-gray-700'>

                            </label>
                            <div className='mt-2 flex items-center'>
                                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                    {/*if avatar not null show image*/ }
                                    {
                                        avatar ? 
                                            (
                                                <img src={URL.createObjectURL(avatar)} alt="avatar"
                                                    className="h-full w-full object-cover rounded-full" />
                                            ) : (
                                            <RxAvatar className="h-8 w-8"></RxAvatar>
                                        )
                                    }
                                </span>
                                <label htmlFor="file-input"
                                    className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-smtext-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                                        <span>Upload a file</span>
                                        <input type="file" name="avatar" id="file-input" accept='.jpg,.jpeg,.png'
                                        onChange={handleFileInputChange}
                                        className='sr-only' />

                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                                Register
                            </button>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Already have an account? </h4>
                            <Link to="/login" className="text-blue-600 pl-2">Login</Link>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4> Are you our gynecologist?</h4>
                            <Link to="/gynecologist-login" className="text-blue-600 pl-2">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
