import React, { useEffect, useState } from "react";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/about-img.svg";
import { BsPeople } from "react-icons/bs";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// import video
import video from "../img/video/funny.mp4";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  const [show, setShow] = useState(false);

  const videoStartHandler = () => {
    const video = document.querySelector("#video");
    video.currentTime = 0;
    video.load();
    setShow(true);
  };

  const clickHandler = () => {
    const video = document.querySelector("#video");
    video.pause();
    setShow(false);
  };

  return (
    <div className="relative lg:mx-32">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center text-blue-600"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2 mb-10">
        <div className="bg-green-400 h-1 w-16 rounded"></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:gap-10 secondary-font">
        <div
          data-aos="fade-up"
          className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0"
        >
          <img className="w-full" src={img} alt="img" />
        </div>
        <div className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0">
          <div data-aos="fade-left">
            <h1 className="text-blue-600 md:text-3xl font-semibold">
              Smart Technology <br></br>Real Results
            </h1>
            <p className="text-lg mt-5 text-zinc-600 primary-font">
              We empower businesses with cutting-edge digital solutions,
              from automation and AI to custom software development and SEO-driven growth strategies.
            </p>
          </div>

          {/* 1st template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-green-400 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
            </div>
            <div className="w-full">
              <h2 className="text-blue-600 text-xl font-medium">
                Innovation Meets Efficiency
              </h2>
              <p className="text-base text-zinc-600 primary-font lg:mt-1 mt-2">
                At Neoloxic, we specialize in building scalable, high-impact solutions that help businesses thrive in the ever-evolving digital landscape.
              </p>
            </div>
          </div>

          {/* 2nd template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-green-400 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
            </div>
            <div className="w-full">
              <h2 className="text-blue-600 text-xl font-medium">
                A No-Fluff Partner
              </h2>
              <p className="text-base text-zinc-600 primary-font lg:mt-1 mt-2">
                Unlock your business’s potential with tailored technology solutions that drive efficiency, growth, and long-term success.
              </p>
            </div>
          </div>

          {/* para */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-zinc-600 primary-font"
          >
            Neoloxic was built to provide businesses with powerful, scalable digital solutions—from custom software development to cloud automation and marketing strategies that fuel growth. 
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
            <div>
              <a href="/#contact" className="">
                <CtaButton name={"Get Started"} />
              </a>
            </div>
            {/* <div
              onClick={() => videoStartHandler()}
              className="shadow shadow-zinc-300 hover:shadow-green-400 hover:shadow px-4 py-2 rounded-3xl"
            >
              <VideoBtn name={"Watch Video"} />
            </div> */}
          </div>

          {/* <div
            className={`${
              show ? "block" : "hidden"
            } absolute right-0 top-0 lg:w-full lg:h-full bg-zinc-500 bg-opacity-50 rounded overflow-hidden flex justify-center items-center shadow-2xl lg:mb-20 transition-all duration-300`}
          >
            <div
              onClick={() => clickHandler()}
              className="absolute right-10 top-6 text-3xl font-light bg-zinc-700 px-3 rounded-full text-white cursor-pointer"
            >
              x
            </div>
            <video
              id="video"
              muted
              controls
              autoPlay
              className="w-[800px] rounded"
              src={video}
            ></video>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
