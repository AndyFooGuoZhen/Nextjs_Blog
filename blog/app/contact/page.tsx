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
            position: toast.POSITION.BOTTOM_CENTER
        });
      }, (error) => {
        toast.error("Failed to send message!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      });
  };

    return (
      <div className="md:flex-row md:flex justify-around mb-5">

      {/* <div className="lg:flex-row lg:flex justify-around mb-5"> */}
          <div className="shadow-md p-6 rounded-3xl mb-10 md:w-3/6">
            <form className="flex flex-col items-center text-center "  onSubmit={sendEmail}>
              <h2 className="mb-5 font-bold text-2xl">Contact Form</h2>
              <input
                placeholder="Name"
                name="user_name"
                className="border-slate-200 border-2 w-full rounded-lg mb-8 p-1 "/>
                <input
                placeholder="Email"
                name="user_email"
                className="border-slate-200 border-2 w-full rounded-lg mb-8 p-1"/>
                <input
                placeholder="Subject"
                name="user_subject"
                className="border-slate-200 border-2 w-full rounded-lg mb-8 p-1"/>
                <textarea
                placeholder="Message"
                name="message" 
                className="border-slate-200 border-2 w-full rounded-lg mb-8 p-1 h-32"/>
                <input className="border-slate-200 border-2 w-3/12 rounded-lg p-2 hover:shadow-2xl hover:bg-slate-200 hover:ease-in-out duration-300 text-center" type="submit" value="Submit" />
                <ToastContainer />

            </form>
          </div>
          <div className="flex flex-col items-center md:items-start">

            <h1 className="text-gray-400">Phone</h1>
            <h1 className="mb-8">+1 5157157734</h1>
            <h1 className="text-gray-400">Email</h1>
            <div className="mb-8">
              <a className="hover:underline" href="mailto:andy.guozhen@gmail.com">andy.guozhen@gmail.com</a>
            </div>
            <h1 className="text-gray-400 ">Social</h1>
            <div className="flex flex-row">
              <a href="https://www.linkedin.com/in/andyfoo/" target="_blank">
                  <AiFillLinkedin className="  text-6xl text-black" />
                </a>
                <a href="https://github.com/AndyFooGuoZhen" target="_blank">
                  <AiFillGithub className=" text-6xl text-black" />
                </a>
            </div>

            </div>
      </div>
           
     
    );
  };
  
  export default Contact;