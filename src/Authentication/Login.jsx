import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import DocumentTitle from '../Title/Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';

const Login = () => {
    DocumentTitle("Login");
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                swal("Error!", "Uppsss! Somethig went wrong", "error");
                console.log(error.errorMessage);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
                swal("Error!", "Uppsss! Somethig went wrong", "error");
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
                swal("Error!", "Uppsss! Somethig went wrong", "error");
            })
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="fade-up" className="animate__animated animate__backInUp hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-5 ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full lg:w-[400px] shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                                <span className="absolute bottom-4 right-3"
                                    onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <FaEye></FaEye>
                                            :
                                            <FaEyeSlash></FaEyeSlash>
                                    }
                                </span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-[#cf827c] text-white text-xl font-medium">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col gap-3 my-3 px-10">
                        <button onClick={handleGoogleLogin} className="btn bg-[#cf827c] text-white hover:text-black"><FaGoogle /> Login with google</button>
                        <button onClick={handleGithubLogin} className="btn hover:bg-[#5c9154] hover:text-white"><FaGithub /> Login with github</button>
                    </div>
                    <div className="px-10 mb-5">
                        <Link state={location?.state} to="/registration"><p>Don&apos;t have an account? <span className="underline text-green-400">Register</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;