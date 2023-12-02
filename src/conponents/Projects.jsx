
export default function Projects() {
    return (
        <div className=" bg-slate-50">
            <div className="container py-20">
                <h2 className="sm:text-4xl text-2xl text-center font-semibold mb-2">Limited-Time Offer: Grab Fast!</h2>
                <span className="block w-36 h-1 bg-[#db2777]  mb-20 mx-auto"></span>
                <div className="border-b sm:pb-20 pb-10 lg:grid grid-cols-2 items-center flex flex-col-reverse gap-5 my-20">
                    <div>
                        <h2 className="sm:text-5xl text-2xl font-semibold">40% Discount All Readymade Products</h2>
                        <p className="sm:text-xl my-6">Visit our store or browse online to discover the array of readymade products available. Select your favorite items and add them to your cart.Use code <span className="font-semibold">{`"`}VICTORY40{`"`} </span> at checkout to enjoy an incredible 40% discount on your entire order. Revel in the joy of fantastic savings and the delight of owning high-quality products.  </p>
                        <a href="https://www.bangladeshisoftware.com/products">
                            <button className="text w-full bg-[#db2777] hover:bg-slate-800 px-6 py-3 rounded text-white sm:text-xl font-semibold">Limited Time Offer Order Now</button>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500536/Pos_Project_iafw5y.png" alt="" />
                </div>
                <div className="border-b sm:pb-20 lg:grid grid-cols-2  py-10 items-center flex flex-col gap-5 my-20">
                    <img src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701501909/Services_project_xtdwpc.png" alt="" />
                    <div>
                        <h2 className="sm:text-5xl text-2xl font-semibold">20% Discount All Services</h2>
                        <p className="sm:text-xl my-6"> Our team of seasoned professionals is dedicated to providing you with top-notch advice and support. Each service is customized to meet your unique needs and challenges. We understand the value of your time – expect efficient and timely customer service. When engaging with our team, mention code <span className="font-semibold">{`"`}THANKYOU20{`"`}</span> to apply the special 20% discount.</p>
                        <a href="https://www.bangladeshisoftware.com/services">
                            <button className="text  bg-[#db2777] hover:bg-slate-800 px-6 py-3 rounded text-white font-semibold">Get Offer</button>
                        </a>
                    </div>
                </div>
                <div className="lg:grid grid-cols-2 items-center flex flex-col-reverse gap-5 sm:my-20">
                    <div>
                        <h2 className="sm:text-5xl text-2xl font-semibold">Share Hosting 20%</h2>
                        <h2 className="sm:text-5xl text-2xl font-semibold sm:mt-4 text-blue-500">Business Hosting 30%</h2>
                        <h2 className="sm:text-5xl text-2xl font-semibold sm:mt-4  text-red-500">Unlimited Hosting 40%</h2>
                        <div className="my-5">
                            <p className="sm:text-xl my-2">Share Hosting - 20% OFF CouponCode is : <span className="font-semibold">SH_VICTORY20</span></p>
                            <p className="sm:text-xl my-2">Business Hosting - 30% OFF CouponCode is : <span className="font-semibold">BH_VICTORY30 </span></p>
                            <p className="sm:text-xl my-2">Unlimited Hosting - 40% OFF CouponCode is :<span className="font-semibold"> UH_VICTORY40</span></p>
                        </div>
                        <a href="https://www.bangladeshisoftware.com/hosting">
                            <button className="text bg-[#db2777] hover:bg-slate-800 px-6 py-3 rounded text-white font-semibold">Get Offer</button>
                        </a>
                    </div>
                    <img src="https://res.cloudinary.com/dav9mftpk/image/upload/v1701500535/Hosting_laptop_wx4k0i.png" alt="" />
                </div>
            </div>
        </div>
    )
}
