import { FaRegCopy } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";


export default function Header() {

    // copy coponCode 
    const [copy, setCopy] = useState(false)
    const text = 'VICTORY45';

    const handleClickCoupon = () => {
        navigator.clipboard.writeText(text);
        setCopy(true)
        toast.success('CouponCode Copy Successfully!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const [minuite, setMunite] = useState(0)
    const [hours, setHours] = useState(0)
    const [secound, setSecound] = useState(0)
    const timer = () => {
        const currentDate = new Date();
        let localMunite = 60 - currentDate.getMinutes();
        let localSecound = 60 - currentDate.getSeconds();
        let localHours = 23 - currentDate.getHours();
        setMunite(localMunite)
        setHours(localHours)
        setSecound(localSecound)
    }
    useEffect(() => {
        setInterval(function () { timer() }, 1000);
    }, [])

    return (
        <div className=" headers_background bg-cover py-20">

    
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="container lg:grid grid-cols-2 items-center py-10 ">
                <div>
                    <h2 className="sm:text-5xl text-3xl font-bold leading-[1.2] text-gray-200">
                        Victory Day Get 45% <br /> Discount All Products
                    </h2>
                    <p className="my-4 text-gray-300">
                        Bangladeshi Software Provide Innovative Software Solutions
                    </p>
                    <div>
                        <button className="bg-[#db2777] hover:bg-slate-800 py-3 px-6 rounded-md text-gray-200 font-semibold mr-2">
                            Don{`'`}t  Miss Out
                        </button>
                        <button className="bg-[#2563eb] hover:bg-slate-800 py-3 mt-2 sm:mt-0 px-6 rounded-md text-gray-200 font-semibold ">
                            Limited Time Offer Grab Now
                            <FaChevronRight className="inline ml-2" />
                        </button>
                    </div>
                </div>
                <div className="lg:flex lg:items-center gap-10 ">
                    <div>
                        <div className="time_countdown text-[#fff] p-3 text-center sm:text-7xl text-3xl sm:w-80  rounded flex items-center gap-1 justify-center " >
                            <p className="time_countdown">{hours < 10 ? `0${hours}` : hours == 24 ? `00` : hours}</p>
                            :
                            <p className="time_countdown">{minuite < 10 ? `0${minuite}` : minuite == 60 ? `00` : minuite}</p>
                            :
                            <p className="time_countdown">{secound < 10 ? `0${secound} ` : secound == 60 ? `00` : secound}</p>
                        </div>
                        <div className="flex items-center sm:justify-center  gap-2">
                            <p className="sm:text-2xl text-xl  font-semibold lg:text-center  my-2 text-[#e4e4e4]">Time Left</p>
                            <button onClick={handleClickCoupon} className={`${!copy ? ' bg-[#2563eb]' : 'bg-[#db2777]'}  text-gray-200 py-1 px-6 flex  items-center gap-2 rounded w-26 text-xl lg:mx-auto `}>
                                VICTORY45 <FaRegCopy />
                            </button>
                        </div>
                    </div>
                    <div className="relative hidden lg:block w-5/12">
                        <img className="robot-ani w-48" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500534/Header_robot_abd6jp.png" alt="" />
                        <img className="absolute animate-zoom top-10 right-0" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500534/dot_n2wybm_cb6d1b.png" alt="" />
                        <img className="rocket-ani absolute right-0 bottom- w-20" src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500536/rocket_dktxwa_fawddr.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
