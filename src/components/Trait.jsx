import React from 'react'
import Typewriter from "typewriter-effect";
import card_img from '../assets/card_img.png'
import bgcloud from '../assets/bgcloud.jpg'
import bgra from '../assets/bggra.jpg'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";


const Trait = () => {
    return (
        <div className='w-full h-screen relative'>
            <img className='w-full h-full object-cover' src={bgra} />

            <div className='absolute w-full h-full top-0 left-0'>
                <div className='effect'>
                    <Typewriter

                    onInit={(typewriter)=>{
                        typewriter

                        .typeString("Easy.")
                        .pauseFor(500)
                        .typeString(" Quick.")
                        .pauseFor(500)
                        .typeString(" Secure.")
                        .pauseFor(500)
                        .typeString(" Fast.")
                        .pauseFor(500)
                        .typeString(" Relible.")
                        .start()
                        }}
                        />
                </div>
                <div className='effect_two'>
                        <Typewriter

                        onInit={(typewriter)=>{
                            typewriter

                            .pauseFor(8000)
                            .typeString("Features")
                            .pauseFor(200)
                            .typeString(" That")
                            .pauseFor(200)
                            .typeString(" Trun")
                            .pauseFor(200)
                            .typeString(" Efforts")
                            .pauseFor(200)
                            .typeString(" To")
                            .pauseFor(200)
                            .typeString(" Results")
                            .start()
                            }}
                            />
                </div>
                
                
                <div className='absolute pb-50 w-full h-full flex flex-col justify-center text-center text-white p-4'>
                    
                    {/* <h1>Strong Features Cloud</h1> */}
                </div>
                <div class="container absolute w-full h-full">
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Cloud Compute</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Block Strong</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div class="box">
                        <span></span>
                        <div class="content">
                            <h2>Dedicated Clound</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trait