import { CiLocationOn } from "react-icons/ci";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useLoaderData, useParams } from "react-router-dom";
import { GrStatusGood } from "react-icons/gr";
import { IoIosPricetags } from "react-icons/io";

const EstateDetails = () => {
    const id = useParams();
    const estates = useLoaderData();

    const estate = estates.find(data => data.id === parseInt(id.id));

    return (
        <div className="card w-full bg-base-100 shadow-xl ">
            <figure><img src={estate.image} alt="Shoes" /></figure>
            <div className="p-2 lg:p-10 space-y-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold open_sans">{estate.name}</h1>
                <div className="space-y-3">
                    <div className="flex justify-between flex-col lg:flex-row gap-2">
                        <h2 className="text-xl lg:text-2xl font-semibold">{estate.title}</h2>
                        <p className='flex items-center gap-2'><CiLocationOn /> {estate.location}</p>
                    </div>
                    <p>{estate.description}</p>
                </div>
                <div className='flex justify-between p-5 border-y-2 flex-col lg:flex-row gap-2'>
                    {
                        estate.facilities.map((data, ind) => <p key={ind} className='flex items-center'><span><GoDotFill /></span> {data}</p>)
                    }
                </div>
                <div className='flex justify-between'>
                    <p className='flex items-center gap-1'><span><FaExternalLinkSquareAlt /></span> {estate.area}</p>
                    <p className="flex items-center gap-1"><span><IoIosPricetags /></span> {estate.price}</p>
                    <p className="flex items-center gap-1"><span><GrStatusGood /></span> {estate.status}</p>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;