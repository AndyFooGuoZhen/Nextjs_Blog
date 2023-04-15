import Image from "next/image";
import myImage from "./Andy_Foo.jpg";

const AboutMe = () => {
  return (
    <div className="mx-auto md:text-start md:text">
      <h1 className=" text-center text-3xl font-abel mb-6 md:text-4xl">
        Andy Foo
      </h1>
      <div className="relative mx-auto rounded-full w-32 h-32 overflow-hidden ">
        <Image src={myImage} layout="fill" objectFit="cover" alt="" />
      </div>
      <div className="mt-11 px-4 text-justify text-sm md:text-lg ">
        <h3>
          Hi there! I'm Andy. I'm currently a student at Iowa State University
          majoring in CS in my senior year. I'm always looking for ways to push
          myself and grow personally by taking on new projects.
        </h3>
        <h1 className=""></h1>
        <div className="my-5"></div>
        <h3>
          I've built this personal blog to share my thoughts and ideas about
          interesting events of my day or stuff I've found to be impactful from
          the internet. Being relatively new to the blog writing game, I seek to
          improve my writing skills through this blog as well.
        </h3>
        <h3 className="my-5">
          I hope to inspire others to practice the skills of deep thought and
          hope you have a valuable takeaway to bring with you through reading
          some my blogs. So join me on this journey of discovery and let's
          explore the world together. Thanks for stopping by!
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;
