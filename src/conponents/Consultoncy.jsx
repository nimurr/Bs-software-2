import { FaFacebook } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GiTimeTrap } from "react-icons/gi";
import { GiWorld } from "react-icons/gi";
import { FaCodepen } from "react-icons/fa6";
import { IoShieldCheckmarkSharp } from "react-icons/io5";


export default function Consultoncy() {
    return (
        <div>
            <div className="container grid lg:grid-cols-2  items-center gap-10 my-20">
                <div className="flex flex-col justify-between h-full">
                    <h2 className="sm:text-4xl text-3xl font-semibold mb-6 leading-[1.3]">Unlimited Free Consultancy <br /> on <span className="text-blue-500 inline ">
                        <img src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500534/googleLogo_nvop32.png" className="inline w-20 sm:w-28 mr-2  h-auto" alt="" /> Meet or Zoom
                    </span></h2>
                    <div className="grid sm:grid-cols-2 gap-4 ">
                        <button className="border flex items-center hover:bg-slate-100  gap-3 p-3"><SiMessenger className="text-xl text-blue-500" /> Message Us</button>
                        <button className="border flex items-center hover:bg-slate-100  gap-3 p-3"><MdEmail className="text-xl text-yellow-500" /> Email Us</button>
                        <button className="border flex items-center hover:bg-slate-100  gap-3 p-3"><IoLogoWhatsapp className="text-xl text-green-600" /> Whatsapp</button>
                        <button className="border flex items-center hover:bg-slate-100  gap-3 p-3"><FaPhone className="text-xl text-blue-500" /> Hotline 01719182586
                        </button>
                        <a className="w-full" href="https://www.facebook.com/bangladeshisoftware">
                            <button className="hover:bg-slate-100 border w-full flex items-center  gap-3 p-3"><FaFacebook className="text-xl text-blue-500" /> Facebook Page</button>
                        </a>
                        <a href="https://www.youtube.com/@bangladeshisoftware" className="w-full">
                            <button className="border w-full flex items-center hover:bg-slate-100  gap-3 p-3"><FaYoutube className="text-xl text-red-500" /> Youtube Chanal</button>
                        </a>
                    </div>
                    <button className="bg-[#db2777] mt-3 sm:mt-0 hover:bg-slate-800 text-xl w-full py-3 px-6 rounded  text-white font-semibold ">Do{`'`}t Miss Out Get Free Consultant</button>
                </div>
                <div>
                    <div className="grid sm:grid-cols-2 gap-5 h-full">
                        <div className="flex flex-col items-center bg-slate-100 px-5 py-3 rounded">
                            <GiTimeTrap className="text-5xl  text-blue-500" />
                            <h2 className="text-5xl font-semibold my-4">5+</h2>
                            <p>Years Of Experience</p>
                        </div>
                        <div className="flex flex-col items-center bg-slate-100 px-5 py-3 rounded">
                            <GiWorld className="text-5xl  text-blue-500" />
                            <h2 className="text-5xl font-semibold my-4">10+</h2>
                            <p>Countries Served</p>
                        </div>
                        <div className="flex flex-col items-center bg-slate-100 px-5 py-3 rounded">
                            <FaCodepen className="text-5xl  text-blue-500" />
                            <h2 className="text-5xl font-semibold my-4">50+</h2>
                            <p>Software Engineer</p>
                        </div>
                        <div className="flex flex-col items-center bg-slate-100 px-5 py-3 rounded">
                            <IoShieldCheckmarkSharp className="text-5xl text-blue-500" />
                            <h2 className="text-5xl font-semibold my-4">350+</h2>
                            <p>Project Completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
