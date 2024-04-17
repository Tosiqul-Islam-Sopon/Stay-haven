import { GoDotFill } from "react-icons/go";
import DocumentTitle from '../Title/Title'
const Features = () => {
    DocumentTitle("Features");
    return (
        <div>
            <h1 className="text-3xl text-center border-b-2 font-semibold p-5">Experience the STAYHAVEN Advantages</h1>
            <p className="shadow-lg p-3 w-fit rounded-xl border border-gray-200 flex gap-2 items-center mt-3 font-medium text-xl ml-10"><span><GoDotFill /></span> Exclusive deals and discounts on select accommodations</p>
            <p className="shadow-lg p-3 w-fit rounded-xl border border-gray-200 flex gap-2 items-center mt-3 font-medium text-xl ml-10"><span><GoDotFill /></span> User-friendly interface for hassle-free booking</p>
            <p className="shadow-lg p-3 w-fit rounded-xl border border-gray-200 flex gap-2 items-center mt-3 font-medium text-xl ml-10"><span><GoDotFill /></span> 24/7 customer support for any inquiries or assistance</p>
            <p className="shadow-lg p-3 w-fit rounded-xl border border-gray-200 flex gap-2 items-center mt-3 font-medium text-xl ml-10"><span><GoDotFill /></span> Insider tips and recommendations for local attractions and activities</p>
            <p className="shadow-lg p-3 w-fit rounded-xl border border-gray-200 flex gap-2 items-center mt-3 font-medium text-xl ml-10"><span><GoDotFill /></span> Loyalty rewards program for frequent travelers</p>
        </div>
    );
};

export default Features;