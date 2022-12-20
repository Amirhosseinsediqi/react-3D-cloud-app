import React from 'react'

const Pricing = () => {
    return (
        <div name="pricing" className="w-full text-white pricing">
            <div className="w-full h-[1200px]  absolute mix-blend-overlay backgro"></div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8 text-slate-300">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold text-white py-8">The right price for your research</h3>
                    <p className="text-3xl">Lorem culpa cupidatat occaecat laboris enim consectetur. Aliqua sunt excepteur non sit amet ullamco. In anim qui eu magna minim. Tempor incididunt dolor est do ea adipisicing occaecat fugiat amet cupidatat.</p>
                </div>

                <div className="grid md:grid-cols-2">
                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                        <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Standard</span>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">$29<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                        </div>
                        <p className="text-2xl py-8 text-slate-500">Id pariatur non eu in non velit ea sunt qui tempor sint.</p>
                        <div className="text-2xl">
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <button className="w-full text-xl py-3 my-4">Get Started</button>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
                            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">PREMIUM</span>
                            <div>
                                <p className="text-6xl font-bold py-4 flex">$50<span className="text-xl text-slate-500 flex flex-col justify-end">/mo</span></p>
                            </div>
                            <p className="text-2xl py-8 text-slate-500">Id pariatur non eu in non velit ea sunt qui tempor sint.</p>
                            <div className="text-2xl">
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                            <p className="flex py-4"><i class="fa fa-check w-8 mr-5 text-green-600"></i>Lorem ipsum dolor sit amet.</p>
                                <button className="w-full text-xl py-3 my-4">Get Started</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing