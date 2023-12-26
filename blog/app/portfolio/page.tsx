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

    return (
      <div className="md:max-w-8xl text-center">
        <h1 className="text-slate-300 text-3xl md:text-4xl mb-8 font-semibold">Professional Experience</h1>
          <div className="grid gap-5 gap-y-10 grid-cols-[repeat(auto-fit,minmax(275px,1fr))] mb-10 ">

          <div className="rounded-3xl nm-concave-slate-700 md:pb-7 shadow-white">
                <div className=" w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center items-center">
                    <Image src={qci} objectFit="contain" className="w-auto h-5/6" alt="" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Software developer</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Full Stack Junior Developer at QCI </p>
                   
                </div>
            </div>

            
            <div className="rounded-3xl nm-concave-slate-700 md:pb-7 shadow-white">
                <div className="w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center">
                    <Image src={logo} objectFit="cover" className="w-full" alt="" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Full stack software developer</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developer and maintainer for a virtual biochemistry lab software </p>
                   
                </div>
            </div>

            <div className="rounded-3xl nm-concave-slate-700 md:pb-7 shadow-white">
                <div className="w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center">
                    <Image src={stone} objectFit="cover" className="w-full" alt="" />
                </div>
                <div className="p-5 ">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Full stack software developer</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed Linear Regression Analysis tools for Biochemistry researchers</p>
                    <a target="_blank" href="https://biochempy.bb.iastate.edu/">
                        <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Web app</button>
                    </a>
                    
                </div>
            </div>


            <div className="rounded-3xl nm-concave-slate-700 md:pb-7">
                <div className="w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center">
                    <Image src={iowadot} objectFit="cover" className="w-full" alt="" />
                </div>
                <div className="p-5">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Software Engineering Intern</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Reconstructed PDF processing modules for issuing traffic permits</p>
                </div>
            </div>

        
        </div>

        <h1 className="text-slate-300 text-3xl md:text-4xl mb-8  font-semibold">Projects</h1>

        <div className="grid gap-5 auto-rows-fr gap-y-10 grid-cols-[repeat(auto-fit,minmax(275px,1fr))] mb-10 ">

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={senior} objectFit="cover" className="w-full rounded-t-3xl aspect-[16/9]" alt="" />
            <div className="p-6  rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Capstone Project</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a mobile app used for intramural sports scheduling</p>
                <a target="_blank" className="mr-5" href="https://seniord.cs.iastate.edu/2023-Dec-06/">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
                <a target="_blank" href="https://drive.google.com/file/d/1Rg5f_1W15oHPXnixDr_FqhOxk-evIPHS/view">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Demo</button>
                </a>
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={portfolio} objectFit="cover" className="w-full rounded-t-3xl aspect-[16/9]" alt="" />
            <div className="p-6  rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio + Blog</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Used for portfolio purposes and uploading blogs</p>
                
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800">
            <Image src={pokemon} objectFit="cover" className="w-full rounded-t-3xl aspect-[16/9]" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Pokemon Game</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a cli-based pokemon game <br></br>(Class project)</p>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/Pokemon_game">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={picklyfe}   className="w-full rounded-t-3xl aspect-[16/9] object-contain" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Picklyfe</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Decision based android game <br></br>(Class project)</p>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/PickLyfe" className="mr-5">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
                <a target="_blank" href="https://www.youtube.com/watch?v=Cqm9fOjT4_U">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Demo</button>
                </a>
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={duck}   className="w-full rounded-t-3xl aspect-[16/9] object-cover" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quackpocalypse</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed chat functionality for a web-based game <br></br>(Class project)</p>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/Quackpocalypse">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
            </div>
        </div>

       
        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={votememes} className="w-full rounded-t-3xl aspect-[16/9] object-cover" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Votememes</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web application for voting the best propgramming memes <br></br>(Hackathon project)</p>
                <a href ="https://github.com/benthecoder/VoteMemes" target="_blank">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={todo} className="w-full rounded-t-3xl aspect-[16/9] object-cover" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todo List</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web application used for demonstrating CRUD operations using Firebase <br></br>(Class project)</p>
                <a className="" href="https://todo-list-firebase-cs363-hoxb.vercel.app/" target="_blank">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Web app</button>
                </a>
               
            </div>
        </div>

        <div className="rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={laptopml} className="w-full rounded-t-3xl aspect-[16/9] object-cover" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Laptop price predictor</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Basic ML Web application used for predicting prices of laptops <br></br>(Personal project)</p>
                <a className="mr-5 " target="_blank" href="https://medium.com/analytics-vidhya/predicting-laptop-prices-using-ml-e60a0315b45a">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Article</button>
                </a>
                <a target="_blank" href="https://github.com/AndyFooGuoZhen/Laptop-Price-ML-Project-Deploy-">
                    <button className="text-slate-300 font-semibold rounded-lg p-1 border-2 nm-convex-slate-700-xl hover:shadow-2xl hover:ease-in-out duration-300 text-center">Details</button>
                </a>
            </div>
        </div>


        </div>
        
       



      </div>
    );
  };
  
  export default Portfolio;