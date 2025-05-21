import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-white text-black text-sm py-4 md:py-10 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4 items-center">

                <h1 className="text-[60px] md:text-[200px] font-extrabold">ab media</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center">
                    {/* Logo + Overview */}
                    <div className="md:font-medium leading-relaxed">

                        A full service performance marketing agency in Gurugram, New Delhi, India. We have launched 50+ brands, captured 119k+ leads, and generated 137 million+ combined revenue for more than 50+ companies globally in the last 7 years.
                    </div>

                    {/* Locations */}
                    <div className="space-y-3 ">
                    
                        <div className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1" />
                            <p className="font-normal text-gray-600">WeWork Forum, DLF Cyber City Rd, DLF Phase 3, Sector 24, Gurugram, Haryana 122002</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <a className="font-normal text-gray-600 hover:underline" href="tel:+919999898297" >+91 99998 98297</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaEnvelope />
                            <a className="font-normal text-gray-600 hover:underline" href="mailto:grow@abmediaco.com" >grow@abmediaco.com</a>
                        </div>
                    </div>

                    {/* Social + Legal */}
                    <div className="flex flex-col gap-6 ">
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/abmediaco?mibextid=ZbWKwL" className=" p-2 rounded-full bg-gray-300"><FaFacebookF className="text-xl " /></a>
                            <a href="https://twitter.com/ab_media_co" className=" p-2 rounded-full bg-gray-300"><FaTwitter className="text-xl  " /></a>
                            <a href="https://www.youtube.com/channel/UCjZGhjcVFNp6GXela_esjew" className=" p-2 rounded-full bg-gray-300"><FaYoutube className="text-xl  " /></a>
                            <a href="https://www.linkedin.com/company/11technolab" className=" p-2 rounded-full bg-gray-300"><FaLinkedinIn className="text-xl  " /></a>
                            <a href="https://www.instagram.com/abmediac/" className=" p-2 rounded-full bg-gray-300"><FaInstagram className="text-xl  " /></a>
                        </div>
                        <div className="text-xs flex flex-wrap gap-2">
                            <a href="https://abmediaco.com/privacy-policy" className="hover:underline font-bold text-black">Privacy Policy</a>
                            <span>|</span>
                            <a href="https://abmediaco.com/privacy-policy" className="hover:underline font-bold text-black">Terms Of Use</a>
                        </div>
                        <div className="text-xs  font-bold text-black">
                            © Akshitbhasin Media Private Limited | All Rights Reserved
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
