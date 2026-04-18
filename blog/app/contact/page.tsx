'use client'
import emailjs from "@emailjs/browser"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_aa8omco', 'template_4eyuq7x', e.target, 'Bp6tDHRacQYQOgn6S')
      .then((result) => {
          toast.success('Message Sent!', {
            position: "bottom-center"
        });
      }, (error) => {
        toast.error("Failed to send message!", {
          position: "bottom-center"
        });
      });
  };

    const inputStyle = "w-full bg-[#e0e5ec] text-gray-800 rounded-xl mb-6 p-4 border border-transparent focus:outline-none shadow-[inset_3px_3px_6px_#b8c9d9,inset_-3px_-3px_6px_#ffffff] transition-all duration-300 placeholder-gray-400 font-medium";
    const buttonStyle = "text-gray-700 font-bold bg-[#e0e5ec] shadow-[6px_6px_12px_#b8c9d9,-6px_-6px_12px_#ffffff] active:shadow-[inset_2px_2px_5px_#b8c9d9,inset_-2px_-2px_5px_#ffffff] w-full md:w-48 rounded-xl py-4 hover:text-black transition-all duration-300 text-center cursor-pointer border-none mt-4";

    return (
      <div className="max-w-4xl mx-auto mb-12 px-4">
          <div className="bg-[#e0e5ec] shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff] p-8 md:p-12 rounded-[2.5rem]">
            <div className="grid md:grid-cols-5 gap-12">
                
                {/* Form Section */}
                <div className="md:col-span-3">
                    <h2 className="mb-8 font-bold text-3xl text-gray-800 tracking-tight">Send a message</h2>
                    <form onSubmit={sendEmail}>
                        <input placeholder="Name" name="user_name" required className={inputStyle}/>
                        <input placeholder="Email" name="user_email" required className={inputStyle}/>
                        <input placeholder="Subject" name="user_subject" required className={inputStyle}/>
                        <textarea placeholder="Message" name="message" required className={`${inputStyle} h-44 resize-none`}/>
                        <input className={buttonStyle} type="submit" value="Submit" />
                        <ToastContainer />
                    </form>
                </div>

                {/* Info Section */}
                <div className="md:col-span-2 flex flex-col justify-start pt-2">
                    <div className="mb-12">
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Get in touch</h3>
                        <a className="text-gray-800 font-bold text-xl hover:text-blue-600 transition-colors duration-300 break-all" href="mailto:andy.guozhen@gmail.com">
                            andy.guozhen@gmail.com
                        </a>
                    </div>

                    <div>
                        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-6">Social</h3>
                        <div className="flex flex-row gap-8">
                            <a href="https://www.linkedin.com/in/andyfoo/" target="_blank" className="group">
                                <AiFillLinkedin className="text-5xl text-gray-500 group-hover:text-[#0077b5] transition-all duration-300" />
                            </a>
                            <a href="https://github.com/AndyFooGuoZhen" target="_blank" className="group">
                                <AiFillGithub className="text-5xl text-gray-500 group-hover:text-black transition-all duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
          </div>
      </div>
    );
  };
  
  export default Contact;
