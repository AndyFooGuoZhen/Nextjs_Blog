import Link from "next/link";
import "../styles/globals.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { AnalyticsWrapper } from '../components/analytics';

export const metadata = {
  title: "Andy's Blog",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = (
    <div className="text-center mb-3 text-xs text-white">
      <h1 className="text-">Developed by Andy</h1>
    </div>
  );

  return (
    <html lang="en">
        <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto justify-center bg-slate-700">
        <div className="min-h-screen flex flex-col justify-between w-full">
          <section className="w-full relative mt-3  ">

            <div className="flex justify-around text-center p-3 mb-7">
              <Link href={"/aboutme"}>
                  <h2 className=" text-slate-300   hover:underline  hover:text-white font-medium rounded-lg text-sm  ">
                    About
                  </h2>
                </Link>
                <Link href={"/portfolio"}>
                  <h2 className="  text-slate-300 hover:underline hover:text-white font-medium rounded-lg text-sm  ">

                    Portfolio
                  </h2>
                </Link>
              <Link href={"/"}>
                <h2 className="  text-slate-300  hover:underline hover:text-white font-medium rounded-lg text-sm  ">

                  Blog
                </h2>
              </Link>
              <Link href={"/contact"}>
              <h2 className=" text-slate-300 hover:underline hover:text-white font-medium rounded-lg text-sm  ">

                Contact
              </h2>
              </Link>
            </div>

            <div className=" p-3 flex flex-col">
              {children}
            </div>
          </section>
          <div>
            {footer}
          </div>
          <AnalyticsWrapper />
        </div>
      </body>
    </html>
  );
}
