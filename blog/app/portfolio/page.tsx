"use client"

import Image from "next/image";
import logo from "./Images/Iowa-State-Logo.png"
import stone from "./Images/stone-chen.png"
import iowadot from "./Images/Iowa-dot.png"
import portfolio from "./Images/Portfolio.jpeg"
import pokemon from "./Images/pokemon.png"
import picklyfe from "./Images/picklyfe.png"
import votememes from "./Images/votememes.png"
import duck from "./Images/duckGame.jpeg"
import todo from "./Images/todo.png"
import laptopml from "./Images/mllaptop.png"
import qci from "./Images/QCI.png"
import senior from "./Images/senior.png"

const Portfolio= () => {

    const cardStyle = "rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff] md:pb-7 transition-all duration-300";
    const buttonStyle = "text-gray-700 font-semibold rounded-xl px-4 py-2 bg-[#e0e5ec] shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff] hover:text-black transition-all duration-300 text-center text-sm border-none";
    const imageContainerStyle = "w-5/6 h-32 relative m-auto mt-6 flex flex-col justify-center items-center rounded-2xl overflow-hidden bg-white p-4 shadow-[inset_2px_2px_5px_#b8c9d9,inset_-2px_-2px_5px_#ffffff]";

    return (
      <div className="md:max-w-8xl text-center">
        <h1 className="text-gray-800 text-3xl md:text-4xl mb-12 font-bold tracking-tight">Professional Experience</h1>
          <div className="grid gap-8 gap-y-12 grid-cols-[repeat(auto-fit,minmax(275px,1fr))] mb-16 ">

          <div className={cardStyle}>
                <div className={imageContainerStyle}>
                    <Image src={qci} objectFit="contain" className="w-auto h-full" alt="QCI Logo" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Software developer</h5>
                    <p className="mb-3 font-medium text-gray-600">Full Stack Junior Developer at QCI </p>
                </div>
            </div>

            
            <div className={cardStyle}>
                <div className={imageContainerStyle}>
                    <Image src={logo} objectFit="contain" className="w-auto h-full" alt="Iowa State Logo" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Full stack software developer</h5>
                    <p className="mb-3 font-medium text-gray-600">Developer and maintainer for a virtual biochemistry lab software </p>
                </div>
            </div>

            <div className={cardStyle}>
                <div className={imageContainerStyle}>
                    <Image src={stone} objectFit="contain" className="w-auto h-full brightness-0 grayscale" alt="Stone Chen Logo" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Full stack software developer</h5>
                    <p className="mb-3 font-medium text-gray-600">Developed Linear Regression Analysis tools for Biochemistry researchers</p>
                    <a target="_blank" href="https://biochempy.bb.iastate.edu/" className="inline-block mt-2">
                        <button className={buttonStyle}>Web app</button>
                    </a>
                </div>
            </div>


            <div className={cardStyle}>
                <div className={imageContainerStyle}>
                    <Image src={iowadot} objectFit="contain" className="w-auto h-full" alt="Iowa DOT Logo" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Software Engineering Intern</h5>
                    <p className="mb-3 font-medium text-gray-600">Reconstructed PDF processing modules for issuing traffic permits</p>
                </div>
            </div>

        
        </div>

        <h1 className="text-gray-800 text-3xl md:text-4xl mb-12 font-bold tracking-tight">Projects</h1>

        <div className="grid gap-8 auto-rows-fr gap-y-12 grid-cols-[repeat(auto-fit,minmax(275px,1fr))] mb-10 ">

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={senior} objectFit="cover" className="w-full rounded-2xl aspect-[16/9] shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Senior Capstone Project</h5>
                <p className="mb-4 font-medium text-gray-600">Developed a mobile app used for intramural sports scheduling</p>
                <div className="flex justify-center gap-4">
                    <a target="_blank" href="https://seniord.cs.iastate.edu/2023-Dec-06/">
                        <button className={buttonStyle}>Details</button>
                    </a>
                    <a target="_blank" href="https://drive.google.com/file/d/1Rg5f_1W15oHPXnixDr_FqhOxk-evIPHS/view">
                        <button className={buttonStyle}>Demo</button>
                    </a>
                </div>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={portfolio} objectFit="cover" className="w-full rounded-2xl aspect-[16/9] shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Portfolio + Blog</h5>
                <p className="mb-4 font-medium text-gray-600">Used for portfolio purposes and uploading blogs</p>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={pokemon} objectFit="cover" className="w-full rounded-2xl aspect-[16/9] shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800"> Pokemon Game</h5>
                <p className="mb-4 font-medium text-gray-600">Developed a cli-based pokemon game <br></br>(Class project)</p>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/Pokemon_game">
                    <button className={buttonStyle}>Details</button>
                </a>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={picklyfe} className="w-full rounded-2xl aspect-[16/9] object-contain bg-white shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Picklyfe</h5>
                <p className="mb-4 font-medium text-gray-600">Decision based android game <br></br>(Class project)</p>
                <div className="flex justify-center gap-4">
                    <a target="_blank" href="https://github.com/AndyFooGuoZhen/PickLyfe">
                        <button className={buttonStyle}>Details</button>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/watch?v=Cqm9fOjT4_U">
                        <button className={buttonStyle}>Demo</button>
                    </a>
                </div>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={duck} className="w-full rounded-2xl aspect-[16/9] object-cover shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Quackpocalypse</h5>
                <p className="mb-4 font-medium text-gray-600">Developed chat functionality for a web-based game <br></br>(Class project)</p>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/Quackpocalypse">
                    <button className={buttonStyle}>Details</button>
                </a>
            </div>
        </div>

       
        <div className={cardStyle}>
            <div className="p-4">
                <Image src={votememes} className="w-full rounded-2xl aspect-[16/9] object-cover shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Votememes</h5>
                <p className="mb-4 font-medium text-gray-600">Web application for voting memes <br></br>(Hackathon project)</p>
                <a href ="https://github.com/benthecoder/VoteMemes" target="_blank">
                    <button className={buttonStyle}>Details</button>
                </a>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={todo} className="w-full rounded-2xl aspect-[16/9] object-cover shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Todo List</h5>
                <p className="mb-4 font-medium text-gray-600">Web application with Firebase CRUD <br></br>(Class project)</p>
                <a href="https://todo-list-firebase-cs363-hoxb.vercel.app/" target="_blank">
                    <button className={buttonStyle}>Web app</button>
                </a>
            </div>
        </div>

        <div className={cardStyle}>
            <div className="p-4">
                <Image src={laptopml} className="w-full rounded-2xl aspect-[16/9] object-cover shadow-[inset_2px_2px_5px_#a3b1c6,inset_-2px_-2px_5px_#ffffff]" alt="" />
            </div>
            <div className="p-6 pt-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">Laptop price predictor</h5>
                <p className="mb-4 font-medium text-gray-600">ML application for predicting laptop prices <br></br>(Personal project)</p>
                <div className="flex justify-center gap-4">
                    <a target="_blank" href="https://medium.com/analytics-vidhya/predicting-laptop-prices-using-ml-e60a0315b45a">
                        <button className={buttonStyle}>Article</button>
                    </a>
                    <a target="_blank" href="https://github.com/AndyFooGuoZhen/Laptop-Price-ML-Project-Deploy-">
                        <button className={buttonStyle}>Details</button>
                    </a>
                </div>
            </div>
        </div>


        </div>

      </div>
    );
  };
  
  export default Portfolio;
