import { useLoaderData } from "react-router-dom";
import image1 from "../../src/assets/images/1.jpg"
import image2 from "../../src/assets/images/2.jpg"
import image3 from "../../src/assets/images/3.jpg"
import image4 from "../../src/assets/images/4.jpg"
import Estate from "./Estate";
import DocumentTitle from '../Title/Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import 'animate.css';
import Banner from "../Banner/Banner";

const Home = () => {
    DocumentTitle("Home");
    const estates = useLoaderData();

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <Banner></Banner>
            <div data-aos="fade-up" className="animate__animated animate__backInUp p-2 lg:p-10 space-y-4 text-center">
                <h1 className="text-4xl font-bold text-center">Estates</h1>
                <p>Welcome to STAYHAVEN, where hospitality meets excellence. Discover a diverse selection of accommodations, from luxurious resorts to cozy lodges, tailored to every preference and budget. Your haven away from home awaits at STAYHAVEN, where personalized service and seamless booking ensure an unforgettable experience.</p>
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                {
                    estates.map(data => <Estate key={data.id} estate={data}></Estate>)
                }
            </div>
        </div>
    );
};

export default Home;