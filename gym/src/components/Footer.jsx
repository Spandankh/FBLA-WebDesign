import {FaInstagramSquare, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
    return(
        <div className='bg-[#222222] text-gray-300 font-equinox-sans max-w-auto mx-auto pt-3 pb-16 px-4 lg:grid-cols-3 gap-8'>
            <>
                <h1 className="w-full text-3xl font-bold text-white">WARIO</h1>
                <p className="py-4 ">text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text tetext text text text text</p>
                <div className='flex justify-between md:w-[75%] my-0.5'>
                <a href='https://twitter.com' target="_blank"><FaFacebookSquare size={30}/></a>
                    <a href='https://twitter.com' target="_blank"><FaInstagramSquare size={30}/></a>
                    <a href='https://twitter.com' target="_blank"><FaTwitterSquare size={30}/></a>
                    <a href='https://twitter.com' target="_blank"><FaInstagramSquare size={30}/></a>
                </div>
            </>
            <>
                <ul>
                    <li className='font-medium text-gray-400'>Home</li>
                    <li className='font-medium text-gray-400'>Mission</li>
                    <li className='font-medium text-gray-400'>Career</li>
                    <li className='font-medium text-gray-400'>Setting</li>

                </ul>
            </>
        </div>
    )
}

export default Footer