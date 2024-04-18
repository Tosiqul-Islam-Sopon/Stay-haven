import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import DocumentTitle from '../Title/Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';


const Profile = () => {
    DocumentTitle("Profile");
    const { user } = useContext(AuthContext);
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="fade-up" className="animate__animated animate__backInUp w-3/4 mx-auto rounded-lg bg-base-200 min-h-screen">
            <div className="flex flex-col gap-5 p-5">
                <div className="flex-1 flex justify-center items-center">
                    <img src={user?.photoURL} alt="No profile image" className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                    <p className="py-2 text-xl"> <span className="font-bold">Email:</span> {user?.email}</p>
                    <p className="py-2 break-words"> <span className="font-bold">Photo URL:</span> {user?.photoURL}</p>
                    <Link to="/updateProfile"><button className="btn bg-[#cf827c] text-white text-xl font-medium">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;