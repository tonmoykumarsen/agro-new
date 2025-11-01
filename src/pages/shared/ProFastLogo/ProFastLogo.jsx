import React from 'react';
import Logo from '../../../assets/logo.png';
const ProFastLogo = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={Logo} alt="" />
            <p className='text-3xl -ml-2 font-extrabold'>ProFast</p>

        </div>
    );
};

export default ProFastLogo;