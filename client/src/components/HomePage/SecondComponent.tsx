import React from "react";
import data from "./SecondComponent.json";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function SecondComponent() {
  return (
    <div>
      <div className="md:w-[650px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto py-8">
        <div className="text-center font-bold text-[32px] md:text-[60px]">
          Why choose Gelato
        </div>
        <div className="py-4 md:py-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <img
              src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
              alt=""
              className="w-[300px] md:w-auto lg:w-[450px] xl:w-[600px] 2xl:w-[650px]"
            />
          </div>
          <div className="w-[300px] md:w-auto lg:w-[450px] xl:w-[500px] 2xl:w-[650px] py-4 md:py-0 md:px-10 space-y-5">
            {data?.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="space-x-1">
                  <ArrowRightAltIcon />
                  <span className="font-[550] text-[22px] md:text-[24px]">{item.title}</span>
                </div>
                <div className="text-gray-800">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#ffedd5] bg-opacity-25 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-[340px] md:w-[350px] lg:w-[450px] xl:w-[600px] 2xl:w-[650px] px-4 md:px-8 py-8">
          <p className="text-[18px] md:text-[20px] text-black font-medium">
            For print on demand sellers
          </p>
          <p className="text-[35px] md:text-[60px] font-bold leading-[40px] md:leading-[65px] py-2">
            Accelerate business growth with innovative design tools and apps
          </p>
          <p className="text-[24px] md:text-[26px] my-6 leading-[30px]">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </p>

          <button className="py-[6px] px-4 text-[14px] font-bold bg-black text-white rounded-full border-[1px] border-black hover:text-gray-400 duration-200">
            Get started
          </button>
        </div>

        <div>
          <img
            src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
            alt=""
            className="w-[340px] md:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[650px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SecondComponent;
