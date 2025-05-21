import { useState } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import Select from 'react-select';

// Reusable Components
const InputField = ({ name, type = "text", placeholder, value, onChange, required = false }) => (
    <div className="flex flex-col gap-1.5">
        <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className="w-full p-3 bg-white border outline-none border-gray-200 rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-md text-black placeholder-gray-500"
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);


const SelectField = ({ name, options, value, onChange, required = false, placeholder }) => (
    <div className="flex flex-col gap-1.5">
        <select
            id={name}
            name={name}
            className={`w-full p-3 bg-white border outline-none border-gray-200 rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-md appearance-none ${value ? "text-black" : "text-gray-500"
                }`}
            value={value}
            onChange={onChange}
            required={required}
        >
            <option value="" disabled hidden>{placeholder}</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    </div>
);



const PhoneField = ({ name, value, onChange, required = false }) => (
    <div className="flex flex-col gap-1.5">
        <PhoneInput
            country={'in'}
            value={value}
            onChange={(phone) => onChange({ target: { name, value: phone } })}
            inputClass="!w-full !pl-12 !h-12 !bg-white !border !outline-none !border-gray-200 !rounded-xl transition-all duration-300 ease-in-out !shadow-sm hover:!shadow-md !text-black !placeholder-gray-500"
            buttonClass="!bg-white !border !border-gray-200 !rounded-l-xl !h-12 !w-12 !flex !items-center !justify-center"
            containerClass="relative"
            inputProps={{
                name,
                required,
                autoFocus: false,
                placeholder: "Enter phone number"
            }}
        />
    </div>
);


export default function EnhancedLeadForm() {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);


    const contentData = {
        heading: "See How We Can Get You More Revenue",
        servicesLine: "SEO | Content Marketing | Paid Media | CRO | Email | Social Media | Analytics | Programmatic | Strategy",
        points: [
            { title: "Strategy", desc: "orchestrate a marketing plan." },
            { title: "Paid Media", desc: "effective strategies with clear ROI." },
            { title: "SEO", desc: "unlock massive amounts of SEO traffic." },
            { title: "CRO", desc: "maximize website conversions and ROI." },
            { title: "Video Production", desc: "Create engaging videos that boost conversions." },
            { title: "Content Marketing", desc: "epic content that gets shared." },
            { title: "Email & Whatsapp Marketing", desc: "engagement and sales from your list." },
        ]
    };

    function getIcon(service) {
        const iconProps = "h-6 w-6";
        switch (service) {
            case "SEO":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                );
            case "Content Marketing":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                );
            case "Paid Media":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case "Email & Whatsapp Marketing":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                );
            case "CRO":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                );
            case "Video Production":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 4h-2a2 2 0 01-2-2V8a2 2 0 012-2h2m6 0v12m-6 0V6m6 0H9m0 12h6" />
                    </svg>
                );

            case "Strategy":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className={iconProps} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                );
            default:
                return null;
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const API_KEY = '430205a3-18ed-11f0-8b17-0200cd936042';
        const phone = formData.phone.replace(/^0+/, ''); // ✅ Remove leading zero


        try {

            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN/OTP1`);
            if (response.data.Status === 'Success') {
                setSessionId(response.data.Details);
                toast.success('OTP sent successfully!');
                setShowOTP(true);
            } else {
                toast.error('Failed to send OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            toast.error('Error sending OTP. Check console for details.');
        } finally {
            setIsSubmitting(false);
        }


    };



    const handleOTPVerify = async (e) => {
        e.preventDefault();

        if (!otp) {
            toast.error('Please enter OTP');
            return;
        }

        setIsVerifying(true);
        const API_KEY = '430205a3-18ed-11f0-8b17-0200cd936042';

        try {
            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`);
            if (response.data.Status === 'Success' && response.data.Details === 'OTP Matched') {
                await fetch("https://script.google.com/macros/s/AKfycbx6umiwSsdl5kCSYsrQiABD2SMJEVp4iSXn-mgbFndRbsRTxy19AVdelLKbPe6UrSR3/exec", {
                    method: "POST",
                    mode: 'no-cors',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
                toast.success('Registration Successful!');


                setRegistrationSuccess(true);
                setOtp('');
                setShowOTP(false);
                setFormData({});
                setIsSubmitting(false);

            } else {
                toast.error(response.data.Details || 'Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            const errorMessage = error.response?.data?.Details || 'Error verifying OTP. Please try again.';
            toast.error(errorMessage);
        } finally {
            setIsVerifying(false);
        }
    };

    // Function to resend OTP
    const handleResendOTP = async () => {
        const API_KEY = '430205a3-18ed-11f0-8b17-0200cd936042';
        const phone = formData.phone.replace(/^0+/, '');

        try {
            const response = await axios.get(`https://2factor.in/API/V1/${API_KEY}/SMS/${phone}/AUTOGEN/OTP1`);
            if (response.data.Status === 'Success') {
                setSessionId(response.data.Details);
                toast.success('OTP resent successfully!');
            } else {
                toast.error('Failed to resend OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error resending OTP:', error);
            toast.error('Error resending OTP. Check console for details.');
        }
    };

    return (
        <div id="book-a-call" className="min-h-screen bg-white flex flex-col items-center justify-center p-4 md:p-6 font-sans">
            <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-start">
                {/* Form Section */}
                <div className="bg-white p-4 md:p-10 rounded-2xl w-full shadow-xl flex flex-col gap-6 relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-full opacity-10"></div>
                    <h2 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight">Let's Grow Your Revenue</h2>
                    <p className="text-gray-600 text-center text-lg">Schedule your free consultation with our experts.</p>
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <InputField name="firstName" placeholder="Enter first name" value={formData.firstName || ""} onChange={handleChange} required />
                        <InputField name="lastName" placeholder="Enter last name" value={formData.lastName || ""} onChange={handleChange} required />
                        <InputField name="email" type="email" placeholder="Enter email address" value={formData.email || ""} onChange={handleChange} required />
                        <PhoneField name="phone" value={formData.phone || ""} onChange={handleChange} required />
                        <InputField name="website" type="url" placeholder="Enter website URL" value={formData.website || ""} onChange={handleChange} required />
                        <SelectField
                            name="budget"
                            value={formData.budget || ""}
                            onChange={handleChange}
                            required
                            placeholder="Select monthly marketing budget"
                            options={[
                                { value: "<75000", label: "Under ₹75,000" },
                                { value: "75000-150000", label: "₹75,000 to ₹1,50,000" },
                                { value: "150000-500000", label: "₹1,50,000 to ₹5,00,000" },
                                { value: "500000-1000000", label: "₹5,00,000 to ₹10,00,000" },
                                { value: "1000000-2500000", label: "₹10,00,000 to ₹25,00,000" },
                                { value: "2500000-5000000", label: "₹25,00,000 to ₹50,00,000" },
                                { value: "5000000-10000000", label: "₹50,00,000 to ₹1,00,00,000" },
                                { value: ">10000000", label: "Above ₹1 Crore" }
                            ]}

                        />
                        {/* <SelectField
                            name="teamSize"
                            value={formData.teamSize || ""}
                            onChange={handleChange}
                            required
                            placeholder="Select marketing team size"
                            options={[
                                { value: "none", label: "I don’t have a marketing team" },
                                { value: "1", label: "1 person" },
                                { value: "2-5", label: "2–5 people" },
                                { value: "6-10", label: "6–10 people" },
                                { value: "10+", label: "10+ people" },
                            ]}
                        /> */}

                        <div className="sm:col-span-1">
                            <Select
                                isMulti
                                name="services"
                                options={[
                                    { value: "Strategy", label: "Strategy" },
                                    { value: "Paid Media", label: "Paid Media" },
                                    { value: "SEO", label: "SEO" },
                                    { value: "CRO", label: "CRO" },
                                    { value: "Video Production", label: "Video Production" },
                                    { value: "Content Marketing", label: "Content Marketing" },
                                    { value: "Email & Whatsapp Marketing", label: "Email & Whatsapp Marketing" },
                                ]}
                                className="basic-multi-select w-full  bg-white border outline-none border-gray-200 rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-md appearance-none "
                                classNamePrefix="select"
                                value={formData.services || []}
                                onChange={(selectedOptions) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        services: selectedOptions,
                                    }))
                                }
                            />
                        </div>

                        <SelectField
                            name="territory"
                            value={formData.territory || ""}
                            onChange={handleChange}
                            required
                            placeholder="Select business territory"
                            options={[
                                { value: "local", label: "Local" },
                                { value: "regional", label: "Regional" },
                                { value: "national", label: "National" },
                                { value: "international", label: "International" },
                                { value: "none", label: "I don't have a business" },
                            ]}
                        />
                        <SelectField
                            name="traffic"
                            value={formData.traffic || ""}
                            onChange={handleChange}
                            required
                            placeholder="Select monthly organic traffic"
                            options={[
                                { value: "0-250", label: "0 to 250" },
                                { value: "251-500", label: "251 to 500" },
                                { value: "501-1000", label: "501 to 1,000" },
                                { value: "1001-10000", label: "1,001 to 10,000" },
                                { value: "10001-100000", label: "10,001 to 100,000" },
                                { value: "100001-1000000", label: "100,001 to 1M" },
                                { value: "1000000+", label: "1M+" },
                                { value: "unknown", label: "I don't know" },
                            ]}
                        />
                        {showOTP &&
                            <input
                                id="otp"
                                type="text"
                                placeholder="Enter 6-digit OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength="6"
                                autoFocus
                                className="w-full p-3 bg-white border outline-none  border-gray-200 rounded-xl  transition-all duration-300 ease-in-out shadow-sm hover:shadow-md placeholder-gray-500 placeholder-opacity-70"
                            />
                        }



                        <div className="sm:col-span-2 text-sm text-gray-500">
                            By clicking the button below, you consent for NP Digital and partners to use automated technology to contact you.{" "}
                            <span className="text-gray-900 font-medium hover:underline cursor-pointer">Privacy Policy</span>
                        </div>

                        {showOTP ?
                            (
                                <div className="flex flex-col gap-2 w-[100%] sm:col-span-2 mx-auto justify-center items-center">
                                    <div
                                        type="submit"
                                        disabled={isVerifying}
                                        onClick={handleOTPVerify}
                                        className="cursor-pointer   w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50"
                                    >
                                        {isVerifying ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                <span>Verifying...</span>
                                            </>
                                        ) : (
                                            <span>Verify And Continue</span>
                                        )}
                                    </div>

                                    <div
                                        type="button"
                                        onClick={handleResendOTP}
                                        className="text-sm text-[#276740]  cursor-pointer font-medium"
                                    >
                                        Resend OTP
                                    </div>
                                </div>

                            ) :
                            (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="sm:col-span-2 cursor-pointer w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 transform hover:scale-105 disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            <span>Processing...</span>
                                        </>
                                    ) : (
                                        <span>BOOK A FREE  CALL</span>
                                    )}
                                </button>

                            )}

                    </form>
                </div>

                {/* Content Section */}
                <div className="md:p-10">
                    <h3 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
                        See How We Can Get You{" "}
                        <span className="relative inline-block">
                            <span className="text-gray-700 border-b-4 border-gray-400">More</span>
                            {/* <span className="absolute left-0 right-0 h-1 mt-1 bg-gray-200 bottom-0 rounded-full"></span> */}
                        </span>{" "}
                        Revenue
                    </h3>
                    {/* <p className="text-gray-600 mb-8 text-lg">{contentData.servicesLine}</p> */}
                    <div className="space-y-8">
                        {contentData.points.map((point, index) => (
                            <div key={index} className="flex items-start space-x-4 group transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 group-hover:bg-gray-700 group-hover:text-white transition-all duration-300 ease-in-out shadow-sm">
                                    {getIcon(point.title)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg">{point.title}</h4>
                                    <p className="text-gray-600">We help you {point.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        style: {
                            background: '#22c55e',
                        },
                    },
                    error: {
                        style: {
                            background: '#ef4444',
                        },
                    },
                }}
            />
        </div>
    );
}