import React from "react";
import video from "../assets/video.mp4";
import sid from "../assets/sid.gif";

function Navbar() {
  return (
    <div className="relative mb-20 ">
      {/* Background Video */}
      <img
        src={sid}
        alt="background gif"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="bg-black/50 h-full">
        <div className="flex py-8 px-24">
          <div className="text-xl text-white mr-auto">SM</div>
          <div className="text-xl text-white px-7">Home</div>
          <div className="text-xl text-white px-7">Resume</div>
          <div className="text-xl text-white px-7">Projects</div>
          <div className="text-xl text-white px-7">About</div>
          <div className="text-xl text-white px-7">Contact</div>
        </div>
        <div className="flex justify-center pt-24">
          <div>
            <div className="text-xl text-white">
              Mechanical Engineering Portfolio
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <div>
            <div className="text-6xl font-bold text-white pb-50">
              SIDDHANT MADHUKAR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
