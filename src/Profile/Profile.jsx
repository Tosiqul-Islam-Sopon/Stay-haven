import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="hero w-2/3 mx-auto rounded-lg bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user?.photoURL} className="w-[200px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                    <p className="py-2 text-xl"> <span className="font-bold">Email:</span> {user?.email}</p>
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;