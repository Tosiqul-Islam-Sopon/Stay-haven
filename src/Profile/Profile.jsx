import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import DocumentTitle from '../Title/Title'

const Profile = () => {
    DocumentTitle("Profile");
    const { user } = useContext(AuthContext);
    return (
        <div className="w-3/4 mx-auto rounded-lg bg-base-200">
            <div className="flex flex-col lg:flex-row gap-5 p-5">
                <div className="flex-1 flex justify-center items-center">
                    <img src={user?.photoURL} className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                    <p className="py-2 text-xl"> <span className="font-bold">Email:</span> {user?.email}</p>
                    <p className="py-2 break-words"> <span className="font-bold">Photo URL:</span> {user?.photoURL}</p>
                    <Link to="/updateProfile"><button className="btn btn-primary">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;