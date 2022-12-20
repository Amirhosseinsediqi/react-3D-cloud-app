import React from 'react'
import team from '../assets/team.webp'
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Team = () => {
    const [show, setShow] = useState(false)
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = () => setShow(!show)
    return (
        <div name='support' className='w-full'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={team} alt="team" />
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl p-5' ref={parent}>
                        <strong className="dropdown-label text-2xl" onClick={reveal}>Sales <i class="fa-solid fa-phone text-2xl pl-3"></i></strong>
                        {show &&
                            <div className='p-8'>
                                <p className='text-gray-600 text-xl leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                        }
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl p-5' ref={parent}>
                        <strong className="dropdown-label text-2xl" onClick={reveal}>Media Inquiries <i class="fa-solid fa-microchip text-2xl pl-3"></i></strong>
                        {show &&
                            <div className='p-8'>
                                <p className='text-gray-600 text-xl leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                        }
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl p-5' ref={parent}>
                        <strong className="dropdown-label text-2xl" onClick={reveal}>Technical Support <i class="fa-solid fa-headset text-2xl pl-3"></i></strong>
                        {show &&
                            <div className='p-8'>
                                <p className='text-gray-600 text-xl leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team