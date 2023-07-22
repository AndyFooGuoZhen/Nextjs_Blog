'use client';

import { useRef } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {

  require('dotenv').config();

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, 'template_4eyuq7x', e.target, 'Bp6tDHRacQYQOgn6S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div className="mx-auto md:text-start md:text md:max-w-6xl">
        <div className="mt-11 px-4 text-justify text-sm md:text-lg ">
            <div>
              <form onSubmit={sendEmail}>
                <input
                  
                  placeholder="Name"
                  name="user_name"
                  className="border-slate-300 border-2 w-full rounded-lg mb-8 p-1"/>
                  <input type="text"  />
                  <input
                  placeholder="Email"
                  name="user_email"
                  className="border-slate-300 border-2 w-full rounded-lg mb-8 p-1"/>
                  <input type="text"  />
                  <input
                  placeholder="Message"
                  name="message" 
                  className="border-slate-300 border-2 w-full rounded-lg mb-8 p-1"/>
                  
                  <input type="submit" value="Send" />
              </form>
            </div>
        </div>
      </div>
    );
  };
  
  export default Contact;