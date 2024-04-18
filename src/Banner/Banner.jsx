import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Banner.css"
import { Pagination, Navigation } from 'swiper/modules';
import slide_image_1 from "../../src/assets/images/1.jpg"
import slide_image_2 from "../../src/assets/images/2.jpg"
import slide_image_3 from "../../src/assets/images/3.jpg"
import slide_image_4 from "../../src/assets/images/4.jpg"


function Banner() {
    const bannerHeading = <>
        <div className=" text-white">
            <p className="text-white text-3xl lg:text-7xl font-bold">STAY <span className="text-[#cf827c]">HAVEN</span></p>
            <p className="text-white text-xl lg:text-3xl font-semibold text-center">Stay with us, feel Haven</p>
        </div>
    </>

    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_1})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_2})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_3})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full text-center py-32 md:py-56 flex flex-col bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${slide_image_4})` }}>
                        {
                            bannerHeading
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Banner;
