"use client"

import logo from "./Images/Iowa-State-University-Logo.png"
import Image from "next/image";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from "react";







const Portfolio= () => {
    function flip() {
        var flipper = document.querySelector('.flipper');
    
        if(flipper){
            flipper.classList.toggle("flip");
            console.log('j');
        }
      }

    useEffect(() => {
        var flipContainers = document.querySelectorAll('.flip-container');
        flipContainers.forEach(function(flipContainer) {
          flipContainer.addEventListener('click', flip);
        });
      
      });

   
      
     
      
    return (
      <div className="md:max-w-6xl text-center">
        <h1 className="text-slate-300 text-3xl md:text-4xl mb-8 font-semibold">Professional Experience</h1>
        <div className="grid gap-5 gap-y-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            
        <Card className="max-w-sm h-full w-full nm-concave-slate-700-xl rounded-3xl">
            <div className="w-2/6 h-2/6 relative m-auto mt-2  ">
                <Image src={logo} objectFit="cover" alt="" />
            </div>

            <CardContent className="">
                <Typography gutterBottom variant="h5" component="div" className="text-slate-300">
                Full stack software developer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                
                </Typography>
            </CardContent>


        </Card>



        <div className="flip-container">
         <div className="flipper">
            <div className="front bg-black w-full text-white">
                shel
            </div>
            <div className="back bg-blue w-full">
            <p>You won</p>
            </div>
        </div>
        </div>

  {/* <div className="group h-96 w-80 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]" id="test">
      <div className="absolute inset-0">
        <button  onClick={()=>flip("test")}/>
        hello
        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
      </div>
      <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200  [backface-visibility:hidden] hover:[transform:rotateY(180deg)]" id="test2" >
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Jane Doe</h1>
          <p className="text-lg">Photographer & Art</p>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
  
    </div> */}

{/* <div className="group h-96 w-80 [perspective:1000px]">
    <div id="test" className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ">
      <div className="absolute inset-0">
        <div>
        <Button onClick={ ()=>flip("test")} className="bg-white">Hello</Button>

        </div>
        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Jane Doe</h1>
          <p className="text-lg">Photographer & Art</p>
          <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
    </div>
  </div> */}

  

  
    
            

    



















        </div>
        <h1 className="text-slate-300 text-3xl md:text-4xl mb-8 font-semibold">Projects</h1>

      </div>
    );
  };
  
  export default Portfolio;