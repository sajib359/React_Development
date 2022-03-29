import React from 'react';

const Options = (props) => {
    const {name , price} = props.option;
    return (
        <div className='bg-white rounded-lg p-4'>
            <h3 className='bg-sky-300 py-3 rounded-xl font-bold text-2xl'>Package: {name}</h3>
            <p className='mt-4'>
            <span className='font-bold text-5xl'>{price}</span>
            <span className='text-bold text-2xl text-gray-500'>/Month</span>
            </p>
            

        </div>
    );
};

export default Options;