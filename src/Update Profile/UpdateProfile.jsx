import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import DocumentTitle from '../Title/Title'
const UpdateProfile = () => {
    DocumentTitle("Update Profile");
    const { user, setNamePhoto } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleUpdateProfile = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.photo.value;
        setNamePhoto(name, url)
            .then(res => {
                console.log("adfkjajk", res);
                swal("Good job!", "Profile Updated Successfully", "success");
                navigate("/profile")
            })
            .catch(error => {
                console.log(error);
            })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-10 px-10">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">Update Profile!</h1>
                </div>
                <div className="card shrink-0 w-full lg:w-[400px] max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleUpdateProfile}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user?.displayName} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder={user?.photoURL} name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" value={user?.email} disabled />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#cf827c] text-white text-xl font-medium">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;