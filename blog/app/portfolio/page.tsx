"use client"

import Image from "next/image";
import logo from "./Images/Iowa-State-Logo.png"
import stone from "./Images/stone-chen.png"
import iowadot from "./Images/Iowa-dot.png"
import portfolio from "./Images/Portfolio.jpeg"
import pokemon from "./Images/pokemon.png"
import picklyfe from "./Images/picklyfe.png"

const Portfolio= () => {
      
    return (

      <div className="md:max-w-8xl text-center">
        <h1 className="text-slate-300 text-3xl md:text-4xl mb-8 font-semibold">Professional Experience</h1>
          <div className="grid gap-5 auto-rows-fr gap-y-10 grid-cols-[repeat(auto-fit,minmax(275px,1fr))] mb-10 ">
            

    

            <div className="max-w-sm rounded-3xl nm-concave-slate-700 md:pb-7 shadow-white">
                <div className="w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center">
                    <Image src={logo} objectFit="cover" className="w-full" alt="" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Full stack software developer</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed Linear Regression Analysis tools for Biochemistry researchers</p>
                   
                </div>
            </div>

            
        
            <div className="max-w-sm rounded-3xl nm-concave-slate-700 md:pb-7 shadow-white">
                <div className="w-5/6 h-2/6 relative m-auto mt-2 flex flex-col justify-center">
                    <Image src={stone} objectFit="cover" className="w-full" alt="" />
                </div>
                <div className="p-5 ">
                    <h5 className="mb-3 text-2xl font-bold tracking-tight text-slate-300">Full stack software developer</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed Linear Regression Analysis tools for Biochemistry researchers</p>
                    <a href="https://biochempy.bb.iastate.edu/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5">
                         Website
                    </a>
                </div>
            </div>


            <div className="max-w-sm rounded-3xl nm-concave-slate-700 md:pb-7">
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

        
 



        <div className="max-w-sm rounded-3xl shadow nm-concave-gray-800 ">
            <Image src={portfolio} objectFit="cover" className="w-full rounded-t-3xl" alt="" />
            <img src="/Iowa-dot.png"/>
            <div className="p-6  rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio + Blog</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Used for portfolio purposes and uploading blogs</p>
                
            </div>
        </div>

        <div className="max-w-sm rounded-3xl shadow nm-concave-gray-800">
            <Image src={pokemon} objectFit="cover" className="w-full rounded-t-3xl" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Pokemon Game</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a cli-based pokemon game as part of a class project</p>
            </div>
        </div>

        <div className="max-w-sm rounded-3xl shadow nm-concave-gray-800">
            <Image src={picklyfe} objectFit="cover" className="w-full rounded-t-3xl" alt="" />
            <div className="p-6 rounded-b-3xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Picklyfe</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Decision based android game for class project</p>
            </div>
        </div>

   



        </div>
      </div>
    );
  };
  
  export default Portfolio;