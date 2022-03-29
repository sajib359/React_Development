import React from 'react';

const Link = (props) => {
    const{name,link}=props.route;
    return (
        <div className=''>
            <li className='mr-20 text-2xl my-4 font-bold'><a href={link}>{name}</a> </li>
        </div>
    );
};

export default Link;