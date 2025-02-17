import Image from "next/image";
import Navbar from "./components/navbar";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      {/* Fixed Sidebar Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen bg-white pl-[300] ">
        {/* Blob Background Behind Text */}
        <div className="absolute left-0 top-[30%] z-1">
          <Image
            src="/home-vector.png" // Ensure this is placed in the public folder
            alt="Home Vector"
            width={350}
            height={350}
            className="w-auto h-auto ml-[400px] mt-[10px] "
          />
        </div>

        <div className="max-w-5xl w-full flex items-center gap-10">
          {/* Left Side - Text Content */}
          <div className="flex-1 relative">
            {/* Blob Background Behind Text - Moved inside text container */}
            <div className="absolute left-[-50px] top-[-50px] -z-10">
              <Image
                src="/home-vector.png"
                alt="Home Vector"
                width={350}
                height={350}
                className="w-[350px] h-auto opacity-30"
              />
            </div>

            <h1 className="ibm-sans text-5xl  text-gray-900 leading-tight relative">
              MY NAME <br />
              IS{" "}
              <span className="text-black ibm-sans font-bold">
                OYINKANSOLA SOLEYE...
              </span>
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              <span className="italic font-semibold">UI/UX Designer</span> based
              in the <span className="italic font-semibold">UK</span>
            </p>

            {/* Contact Info */}
            <div className="mt-4 flex items-center gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <FaPhone className="text-xl text-gray-500" />
                <span>+44 7551 209 968</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-xl text-gray-500" />
                <span>oyinkansola209@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Abstract Background */}
          <div className="relative w-[450px]">
            <Image
              src="/img.png"
              alt="Oyinkansola Soleye"
              width={450}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
