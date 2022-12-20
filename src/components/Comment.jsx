import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

import person from '../assets/person.webp'
import Tobias_Moretti from '../assets/Tobias_Moretti.jpg'
import bgra from '../assets/bggra.jpg'
import person_6 from '../assets/person_6.jpg'

import person_2 from '../assets/person_2.jpg'
import person_3 from '../assets/person_3.jpg'
import person_4 from '../assets/person_4.jpg'
import person_5 from '../assets/person_5.jpg'
import person_7 from '../assets/person_7.jpg'
import person_8 from '../assets/person_8.jpg'
import person_9 from '../assets/person_9.jpg'
import person_10 from '../assets/person_10.jpg'
import person_11 from '../assets/person_11.jpg'



const Comment = () => {
    return (
        <div className='w-full h-screen relative'>
            <img className='w-full h-full object-cover' src={bgra} />

            <div className='absolute w-full h-full top-0 left-0'>

                <h1 className='size text-center text-white'>Comment's Poeple</h1>
                <div className='flex justify-between size-cube'>
                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        Autoplay={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl  text-black shadow-md w-96 cards">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden shadow-lg h-80">
                                    <img src={person} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl leading-snug text-black mb-2">
                                        Natalie Paisley
                                    </Typography>
                                    <Typography className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-white text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img src={Tobias_Moretti} alt="profile-picture" className='tobias' />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Tobias Moretti
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_7} alt="profile-picture"/>
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Atena
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_6} alt="profile-picture" className='tobias'/>
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Alexander
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Swiper>


                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        Autoplay={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_3} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Berelian
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_4} alt="profile-picture" className='tobias' />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Rashel
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_9} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Scott
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_5} alt="profile-picture" className='tobias'/>
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Solina
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Swiper>


                    <Swiper
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        Autoplay={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_2} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Kamelia
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_11} alt="profile-picture" className='tobias' />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Katrin
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_8} alt="profile-picture" />
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Goot
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96">
                                <CardHeader floated={false} className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg h-80">
                                    <img className='h-full w-full object-cover' src={person_10} alt="profile-picture" className='tobias'/>
                                </CardHeader>
                                <CardBody className="p-6 text-center">
                                    <Typography variant="h4" color="blue-gray" className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900 mb-2">
                                        Nadiya
                                    </Typography>
                                    <Typography color="blue" className="block antialiased font-sans text-base leading-relaxed bg-clip-text text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 font-medium" textGradient>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit eget elementum, morbi erat quis litora condimentum duis himenaeos.
                                    </Typography>
                                </CardBody>
                                <CardFooter className="p-6 flex justify-center gap-7 pt-2">
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Comment