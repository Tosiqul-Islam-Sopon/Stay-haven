import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import swal from "sweetalert";

const Login = () => {
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
            })
            .catch(error => {
                swal("Error!", { error }, "error");
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubLogin = () => {
        console.log("github login............");
        githubLogin()
            .then(result => {
                swal("Good job!", "Login Successfully", "success");
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-5 ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex flex-col gap-3 my-3 px-10">
                        <button onClick={handleGoogleLogin} className="btn"><FaGoogle /> Login with google</button>
                        <button onClick={handleGithubLogin} className="btn"><FaGithub /> Login with github</button>
                    </div>
                    <div className="px-10 mb-5">
                        <Link to="/registration"><p>Don&apos;t have an account? <span className="underline text-green-400">Register</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;