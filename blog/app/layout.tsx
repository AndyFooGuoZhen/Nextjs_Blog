import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "Andy's Blog",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <div>
      <Link href={"/"}>
        <h1 className="">Andy's Blog</h1>
      </Link>
      <h2>Welcome to my blog.</h2>
    </div>
  );

  const footer = (
    <div className="text-center mb-3 text-xs">
      <h1 className="text-gray-400">Developed by Andy</h1>
    </div>
  );

  return (
    <html lang="en">
      <body className="px-10 md:px-24 items-center flex justify-center">
        {/* <div className="min-h-screen flex flex-col justify-between max-w-3xl"> */}
        <div className="min-h-screen flex flex-col justify-between ">
          <section className="md:flex w-full relative mt-3 ">
            <div className="flex justify-around text-center md:flex-col p-3 md:justify-start md:items-end md:text-start w-full mb-3 md:w-1/6 md:ml-10">
              <Link href={"/"}>
                <h2 className=" w-24 md:w-28 text-gray-400 hover:text-gray-500 hover:bg-gradient-to-b from-white to-gray-100   font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2 ">
                  Posts
                </h2>
              </Link>
              <Link href={"/aboutme"}>
                <h2 className="w-28  text-gray-400 hover:text-gray-500 hover:bg-gradient-to-b from-white to-gray-100   font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2 ">
                  About me
                </h2>
              </Link>
              <h2 className="w-24 md:w-28 text-gray-400 hover:text-gray-500 hover:bg-gradient-to-b from-white to-gray-100   font-medium rounded-lg text-sm px-5 py-2.5  mr-2 mb-2 ">
                Contact
              </h2>
            </div>

            <div className="p-3 flex flex-col flex-wrap md:w-5/6 ">
              {children}
            </div>
          </section>
          {footer}
        </div>
      </body>
    </html>
  );
}
