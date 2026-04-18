import Image from "next/image";
import myImage from "./Andy_Foo.jpg";


const AboutMe = () => {
  return (
    <div className="mx-auto md:max-w-4xl bg-[#e0e5ec] shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff] p-8 md:p-12 rounded-[3rem] transition-all duration-300">
      <h1 className="font-bold text-center text-3xl md:text-5xl font-abel mb-8 text-gray-800 tracking-tight">
        Andy Foo
      </h1>
      
      <div className="flex flex-col items-center">
        <div className="relative rounded-full w-48 h-48 md:w-56 md:h-56 overflow-hidden shadow-[inset_8px_8px_16px_#a3b1c6,inset_-8px_-8px_16px_#ffffff] p-3 bg-[#e0e5ec]">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-md">
                <Image src={myImage} layout="fill" objectFit="cover" alt="Andy Foo" />
            </div>
        </div>
      </div>

      <div className="mt-12 px-2 text-justify text-base md:text-xl text-gray-700 leading-relaxed font-medium">
        <p className="mb-6">
          Hi there stranger! I'm Andy and I'm from Malaysia. As of now, I work as a software engineer at QCI.
        </p>
        
        <p className="mb-6">
          I've built this personal portfolio + blog website to share about my programming projects and experiences 
          in hopes of inspiring others to delve into the field of software engineering. Throughout my programming journey, 
          I've been exposed to a variety of tech stacks / frameworks and I'm eager to create quality services for others
          using modern technologies. 
        </p>
        
        <p>
          As for blogs, I love jotting down ideas and personal thoughts about
          interesting events of my day or stuff I've found to be impactful from
          the internet. I would like to inspire others to
          practice the skills of deep thought and
          hope you have a valuable takeaway to bring with you through reading
          some my blogs. So join me on this journey of discovery and let's
          explore the world together. Thanks for stopping by!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
