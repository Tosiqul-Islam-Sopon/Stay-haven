import image1 from "../../src/assets/images/1.jpg"
import image2 from "../../src/assets/images/2.jpg"
import image3 from "../../src/assets/images/3.jpg"
import image4 from "../../src/assets/images/4.jpg"

const Home = () => {
    return (
        <div>
            <div className="carousel w-full max-h-screen">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-white text-5xl font-bold">STAY HAVEN</p>
                            <p className="text-white text-3xl font-semibold">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-white text-5xl font-bold">STAY HAVEN</p>
                            <p className="text-white text-3xl font-semibold">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-white text-5xl font-bold">STAY HAVEN</p>
                            <p className="text-white text-3xl font-semibold">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={image4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-black text-5xl font-bold">STAY HAVEN</p>
                            <p className="text-black text-3xl font-semibold">Stay with us, feel Haven</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;