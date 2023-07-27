import Image from "next/image";
import myImage from "./Andy_Foo.jpg";


const AboutMe = () => {
  return (
    <div className="mx-auto md:text-start md:text md:max-w-6xl nm-concave-slate-700 p-3 rounded-3xl">
      <h1 className="font-bold text-center text-3xl font-abel mb-6 md:text-4xl text-slate-300 mt-2">
        Andy Foo
      </h1>
      <div className="relative mx-auto rounded-full w-32 h-32 overflow-hidden ">
        <Image src={myImage} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="mt-11 px-4 text-justify text-sm md:text-lg text-slate-300 ">
        <h3>
          Hi there! I'm Andy. I'm originally from Malaysia and I'm currently pursuing computer science as a senior at Iowa State University. I'm always looking for ways to push
          myself and grow personally by taking on new projects.
        </h3>
        <h1 className=""></h1>
        <div className="my-5"></div>
        <h3>
          I've built this personal portfolio + blog website to share about my programming projects and experiences 
          in hopes of inspiring others to delve into the field of software engineering. Throughout my programming journey, 
          I've been exposed to a variety of tech stacks / frameworks and I'm eager to create quality services for others
          with modern technologies. 
        </h3>
        <h3 className="my-5">

          As for blogs, I love jotting down ideas and personal thoughts about
          interesting events of my day or stuff I've found to be impactful from
          the internet. I would like to inspire others to
          practice the skills of deep thought and
          hope you have a valuable takeaway to bring with you through reading
          some my blogs. So join me on this journey of discovery and let's
          explore the world together. Thanks for stopping by!
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
