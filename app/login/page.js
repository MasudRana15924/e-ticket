'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Login() {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [agree, setAgree] = useState(false);
    //     const { token,loggeduser} = useSelector(
    //         (state) => state.userDetails
    //     );
    // const message=loggeduser.message
    const [users, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = users;
    const registerSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("email", email);
        myForm.set("password", password);
        // dispatch(createLogin(myForm));
        // if(token){
        //     toast.info('Login Succesfull'); 
        // }
    };
    const registerDataChange = (e) => {
        setUser({
            ...users,
            [e.target.name]: e.target.value
        });
    };
    // useEffect(() => {
    //     if (token) {

    //         // navigate('/');

    //     }else{
    //         toast.info(message); 
    //     }
    // }, [token, navigate,message]);
    return (
        <div className=" mt-16 lg:mt-48">

            {/* <div className="lg:w-2/4 mx-auto">
                    <div className="  p-8">

                        <form action="" className="space-y-6 py-6 " onSubmit={registerSubmit}>
                            <div>
                                <input
                                    className=" w-full py-3 px-6 border-2 border-gray-900 rounded-lg" 
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Email"
                                    required

                                />
                            </div>

                            <div className="flex flex-col items-end">
                                <input
                                   className=" w-full py-3 px-6 border-2 border-gray-900 rounded-lg" 
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange}
                                    placeholder="Enter Your Password"

                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="agree"
                                        name="agree"
                                        type="checkbox"
                                        className="h-4 w-4  focus:ring-violet-500 border 
                                         border-violet-900 rounded-lg"
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)}
                                        required
                                    />
                                    <label
                                        htmlFor="accept-terms"
                                        className="ml-2 block text-sm text-gray-900"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <Link href="/signup">

                                        <span className="text-sm tracking-wide text-violet-700 mt-5">Forgot password ?</span>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button className="w-full px-6 py-3 rounded-xl bg-violet-900 mb-5">
                                    <span className="font-semibold text-white text-lg">Login</span>
                                </button>

                                <span className="text-sm tracking-wide text-gray-400 mt-5">Dont have any account ?</span> <Link href="/signup"> <span className="text-violet-700">Create new account</span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div> */}

            <div class="w-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="px-8 py-12">
                    <div class="flex justify-center mx-auto">
                        {/* <Image class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" /> */}
                    </div>

                    <h3 class="mt-3 text-xl font-medium text-start text-gray-600 dark:text-gray-200">Welcome Back</h3>
                    <form>
                        <div class="w-full mt-4">
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                        </div>

                        <div class="w-full mt-4">
                            <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                        </div>

                        <div class="flex items-center justify-between mt-4">
                            <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                            <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-violet-500 rounded-lg hover:bg-violet-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>

                <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span class="text-sm text-gray-600 dark:text-gray-200">Dont have an account? </span>

                    <Link href="/signup" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Create an Account</Link>
                </div>
            </div>
        </div>
    )
}