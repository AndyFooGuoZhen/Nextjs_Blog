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
          <div className="shadow-md p-6 rounded-3xl mb-10 md:w-3/6 nm-concave-slate-700">
            <form className="flex flex-col items-center text-center "  onSubmit={sendEmail}>
              <h2 className="mb-5 font-bold text-2xl text-slate-300">Contact Form</h2>
              <input
                placeholder="Name"
                name="user_name"
                className=" w-full nm-convex-slate-700  text-white rounded-lg mb-8 p-2 "/>
                <input
                placeholder="Email"
                name="user_email"
                className=" w-full nm-convex-slate-700 text-white rounded-lg mb-8 p-2"/>
                <input
                placeholder="Subject"
                name="user_subject"
                className=" w-full nm-convex-slate-700 text-white rounded-lg mb-8 p-2"/>
                <textarea
                placeholder="Message"
                name="message" 
                className=" w-full nm-convex-slate-700 text-white rounded-lg mb-8 p-1 h-32"/>
                <input className="text-slate-300 font-semibold border-2 nm-convex-slate-700-xl w-3/12 rounded-lg p-1 hover:shadow-2xl hover:ease-in-out duration-300 text-center" type="submit" value="Submit" />
                <ToastContainer />

            </form>
          </div>
          <div className="flex flex-col items-center md:items-start">

            <h1 className="text-slate-200">Phone</h1>
            <h1 className="mb-8 text-white">+1 5157157734</h1>
            <h1 className="text-slate-200">Email</h1>
            <div className="mb-8">
              <a className="hover:underline text-white" href="mailto:andy.guozhen@gmail.com">andy.guozhen@gmail.com</a>
            </div>
            <h1 className="text-slate-200 ">Social</h1>
            <div className="flex flex-row">
              <a href="https://www.linkedin.com/in/andyfoo/" target="_blank">
                  <AiFillLinkedin className="  text-6xl text-white" />
                </a>
                <a href="https://github.com/AndyFooGuoZhen" target="_blank">
                  <AiFillGithub className=" text-6xl text-white" />
                </a>
            </div>

            </div>
      </div>
           
     
    );
  };
  
  export default Contact;