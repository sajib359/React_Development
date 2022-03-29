import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const Options = (props) => {
    const {name , price , benefits} = props.option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h3 className='bg-sky-300 py-3 rounded-xl font-bold text-2xl'>Package: {name}</h3>
            <p className='mt-4'>
            <span className='font-bold text-5xl'>{price}</span>
            <span className='text-bold text-2xl text-gray-500'>/Month</span>
            </p>
            <div>
                <h3 className='text-2xl font-bold text-left mt-4 mb-4'>Benefits :</h3>
                {
                    benefits.map(benefit=> <Benefits benefit={benefit}></Benefits>)
                }
               
            </div>

            <button className='w-full bg-green-300 rounded-lg py-3 mt-4 font-bold text-2xl text-white hover:text-blue-500 flex justify-center'>Buy Now <ArrowCircleRightIcon className='w-10 h-10'></ArrowCircleRightIcon></button>
            

        </div>
    );
};

export default Options;