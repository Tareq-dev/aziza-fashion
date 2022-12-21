import React from 'react'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { BiCloset } from 'react-icons/bi';
import { GiSandsOfTime } from 'react-icons/gi';


function Speciality() {
    return (
        <div>
            <div className='text-center py-5'>
                <h1 className='text-3xl font-extrabold'>Our Speciality</h1>
                <p className='text-lg text-center mt-4'>Qui eu deserunt Qui eu deserun consequat est nulla sunt in enim quis cillum</p>
            </div>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 md:py-14 py-4 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-xl">
                                    <div className="flex flex-col items-center mb-3">
                                        <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                                            <GiSandsOfTime size={30} />
                                        </div>

                                    </div>
                                    <div className="flex-grow">
                                        <h1 className='text-2xl font-bold text-center py-2'>24/7 Services</h1>
                                        <p className="leading-relaxed text-base text-center">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-xl">
                                    <div className="flex flex-col items-center mb-3">
                                        <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                                        <MdOutlineProductionQuantityLimits size={30} />
                                        </div>

                                    </div>
                                    <div className="flex-grow">
                                        <h1 className='text-2xl font-bold text-center py-2'>Original Products</h1>
                                        <p className="leading-relaxed text-base text-center">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-xl">
                                    <div className="flex flex-col items-center mb-3">
                                        <div className="w-14 h-14 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white flex-shrink-0">
                                        <BiCloset size={30} />
                                        </div>

                                    </div>
                                    <div className="flex-grow">
                                        <h1 className='text-2xl font-bold text-center py-2'>More than offer</h1>
                                        <p className="leading-relaxed text-base text-center">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Speciality
