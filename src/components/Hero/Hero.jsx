import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1Img from '../../assets/freelance.png'
import slider2Img from '../../assets/slider2.png'
import slider3Img from '../../assets/slider3.png'
import groovyWalkAnimation from "../../animations/groovyWalk.json"
import { useLottie } from 'lottie-react';


const Hero = () => {

    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };
    const { View } = useLottie(options);

    return (
        <section className="bg-dark rounded-2xl shadow-2xl mt-4">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                className="w-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        {/* Text Section */}
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                Join as a Freelancer on <span className="text-violet-600">SkillHub</span>
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                Get started in minutes. Showcase your skills and get hired by top clients worldwide.
                                <br className="hidden md:inline lg:hidden" />
                                Fast onboarding, real opportunities.
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white"
                                >
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="flex items-center justify-center ml-0 lg:ml-24 p-6 mt-8 lg:mt-0 w-full lg:w-[50%]">
                            <img
                                src={slider1Img}
                                alt="Car 2"
                                className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                Work <span className="text-violet-600">Your Way</span>
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                Choose projects that match your skills and interests.
                                <br className="hidden md:inline lg:hidden" />
                                Flexible hours. Remote jobs. Full control.
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white "
                                >
                                    Open Now
                                </a>
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-300 "
                                >
                                    Explore Dashboard
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-center ml-0 lg:ml-24 p-6 mt-8 lg:mt-0 w-full lg:w-[50%]">
                            <img
                                src={slider2Img}
                                alt=""
                                className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl"
                            />
                            
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                                Build a Bright Career <span className="text-violet-600">with Us</span>
                            </h1>
                            <p className="mt-6 mb-8 text-lg sm:mb-12">
                                Choose from a variety of accounts for every need.
                                <br className="hidden md:inline lg:hidden" />
                                Success starts with the right platform.
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 text-white "
                                >
                                    Check Details
                                </a>
                                <a
                                    href="#"
                                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-300"
                                >
                                    Way to go
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center justify-center ml-0 lg:ml-24 p-6 mt-8 lg:mt-0 w-full lg:w-[50%]">
                            <img
                                src={slider3Img}
                                alt="Car 2"
                                className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>

    );
};

export default Hero;