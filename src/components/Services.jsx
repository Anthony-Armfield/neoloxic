import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-blue-600">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-green-400 h-1 w-16 rounded"></div>
      </div>
      <p className="text-zinc-700 text-center mt-7 mb-10 text-lg">
      Your success is our mission. At Neoloxic, we go beyond tech—we’re your partner in digital transformation.
      From custom software to automation and marketing, we craft solutions that help your business grow, optimize, and stay competitive.
      Whether launching a project or needing ongoing support, we’ve got you covered.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/websites")}>
          <Card
            img={<HiOutlineChartPie className="text-green-400"/>}
            title={"Website Management & Analytics"}
            desc={
              "Boost Your Online Presence with our efficient Website Management and Analytics Solutions."
            }
          />
        </div>

        <div onClick={() => navigate("/web-development")}>
          <Card
            img={<HiOutlineChartPie className="text-green-400"/>}
            title={"Web Development"}
            desc={
              "From sleek business sites to complex web applications, we craft custom, SEO-friendly websites that grow with your business."
            }
          />
        </div>

        <div onClick={() => navigate("/seo-optimization")}>
          <Card
            img={<HiOutlineChartPie className="text-green-400"/>}
            title={"Search Engine Optimization"}
            desc={
              "Drive organic growth with strategic SEO solutions that enhance visibility, boost rankings, and attract the right audience to your website."
            }
          />
        </div>

        <div onClick={() => navigate("/custom-automations")}>
          <Card
            img={<HiOutlineChartPie className="text-green-400"/>}
            title={"Custom AI Agent Automations"}
            desc={
              "Streamline operations with AI-powered automations tailored to your workflow—boosting efficiency, reducing manual tasks, and accelerating business growth."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
