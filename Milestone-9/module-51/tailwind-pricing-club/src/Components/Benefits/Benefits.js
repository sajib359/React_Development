import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/solid'

const Benefits = (props) => {
    
    return (
        <p className='flex items-center mt-4'>
        <CheckCircleIcon className='w-5 h-5 mr-2 bg-green-500'></CheckCircleIcon>
        {props.benefit}
        </p>
    );
};

export default Benefits;