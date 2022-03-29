import React from 'react';
import Options from '../Options/Options';


const SelectOption = () => {
    const options =[
        {id:1 , name: 'Free' , price:0.00 , benefits:[
                'Life time Free',
                'Unlimited Deals',
                'Localized deals',
                'Fantastic Deals',
                'Promo Deals'
        ]},
        {id:1 , name: 'Normal' , price:100.00 , benefits:[
            'Always Deals with normal',
            'Unlimited Deals',
            'Localized deals',
            'Fantastic Deals',
            'Promo Deals'
    ]},
        {id:1 , name: 'Premium' , price:1000.00 , benefits:[
            'Deals with premium',
            'Unlimited Deals',
            'Localized deals',
            'Fantastic Deals',
            'Promo Deals'
    ]},
    ]
    return (
        <div className='grid md:grid-cols-3  gap-3 rounded mt-10'>
            {
                options.map(option=> <Options 
                    key={option.id}
                    option={option}
                    ></Options>
                )}

                
        </div>
    );
};

export default SelectOption;