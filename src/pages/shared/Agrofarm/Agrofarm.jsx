import Logo from '../../../assets/logo.png';
const Agrofarm = () => {
    return (
        <div className='flex items-end'>
            <img className='mb-2' src={Logo} alt="" />
            <p className='text-3xl -ml-2 font-extrabold'>AgroFarm</p>

        </div>
    );
};

export default Agrofarm;