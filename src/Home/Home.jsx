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

const Home = () => {
    DocumentTitle("Home");
    const estates = useLoaderData();

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div data-aos="fade-left" className="animate__animated animate__backInRight carousel w-full max-h-screen ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-white text-3xl lg:text-5xl font-bold">STAY <span className="text-[#cf827c]">HAVEN</span></p>
                            <p className="text-white text-xl lg:text-3xl font-semibold text-center">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-white text-3xl lg:text-5xl font-bold">STAY <span className="text-[#cf827c]">HAVEN</span></p>
                            <p className="text-white text-xl lg:text-3xl font-semibold text-center">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-white text-3xl lg:text-5xl font-bold">STAY <span className="text-[#cf827c]">HAVEN</span></p>
                            <p className="text-white text-xl lg:text-3xl font-semibold text-center">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-white text-3xl lg:text-5xl font-bold">STAY <span className="text-[#cf827c]">HAVEN</span></p>
                            <p className="text-white text-xl lg:text-3xl font-semibold text-center">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
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