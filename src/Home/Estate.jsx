import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosPricetags } from 'react-icons/io';

const Estate = ({ estate }) => {
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={estate.image} alt="Shoes" /></figure>
            <div className="p-3 space-y-3">
                <h2 className="card-title">{estate.title}</h2>
                <p className='flex items-center gap-2'><CiLocationOn /> {estate.location}</p>
                <div className='flex flex-col justify-between border-y-2 p-3 space-y-2'>
                    {
                        estate.facilities.map((data, ind) => <p key={ind} className='flex items-center'><span><GoDotFill /></span> {data}</p>)
                    }
                </div>
                <div className='flex justify-between p-2'>
                    <p className='flex items-center gap-1'><span><FaExternalLinkSquareAlt /></span> {estate.area}</p>
                    <p className="flex items-center gap-1"><span><IoIosPricetags /></span> {estate.price}</p>
                </div>
                <div className="w-full">
                    <Link to={`/estateDetails/${estate.id}`}><button className="btn btn-primary w-full">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.node
}

export default Estate;