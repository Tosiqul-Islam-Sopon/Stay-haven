import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Registration = () => {
    const { createUser, setNamePhoto, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const validatePassword = (password) => {
        if (password.length < 6) {
            swal("Error!", "Password must contain at least 6 character!", "error");
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            swal("Error!", "Password must contain a capital letter!", "error");
            return false;
        }
        if (!/[a-z]/.test(password)) {
            swal("Error!", "Password must contain a small letter!", "error");
            return false;
        }
        return true;
    };

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (validatePassword(password)) {
            createUser(email, password)
                .then(result => {
                    console.log(result);
                    setNamePhoto(name, url)
                        .then(res => {
                            console.log(res);
                            swal("Good job!", "Registration Successfully", "success");
                            navigate(location?.state ? location.state : "/");
                        })
                        .catch(error => {
                            console.log(error);
                        })
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                swal("Good job!", "Registration Successfully", "success");
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                swal("Good job!", "Registration Successfully", "success");
                console.log(result);
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-10 px-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="flex flex-col gap-3 my-3 px-10">
                        <button onClick={handleGoogleLogin} className="btn"><FaGoogle /> Register with google</button>
                        <button onClick={handleGithubLogin} className="btn"><FaGithub /> Register with github</button>
                    </div>
                    <div className="px-10 mb-5">
                        <Link to="/login"><p>Already have an account? <span className="underline text-green-400">Login</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;