import React from "react";

function FirstComponent() {
  return (
    <div>
      <div className="md:w-[650px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto py-8 flex items-center justify-between">
        <div className="lg:w-[400px] xl:w-[600px] 2xl:w-[650px] xl:px-5 2xl:px-8">
          <p className="text-[60px] font-bold leading-[70px] py-8">
            Print on demand for your ecommerce business
          </p>
          <p className="text-[26px]">
            Sign up for free and only pay for what you sell
          </p>
          <p className="text-[17px] my-2 text-gray-800">
            Turn your passion into profit with the world's largest print on
            demand network.
          </p>

          <div className="space-x-5 my-10">
            <button className="py-[6px] px-4 text-[14px] font-bold bg-black text-white rounded-full border-[1px] border-black hover:text-gray-400 duration-200">Get started for free</button>
            <button className="py-[6px] px-4 text-[14px] font-bold rounded-full border-[1px] border-black hover:bg-gray-200 duration-200">See our products</button>
          </div>

          <div>
            <img src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg" alt="" className="w-[150px]"/>
          </div>
        </div>

        <div>
          <img
            src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
            alt=""
            className="lg:w-[450px] xl:w-[500px] 2xl:w-[650px]"
          />
        </div>
      </div>

      <div className="bg-[#ffedd5] bg-opacity-25">
        <div className="lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto text-black flex items-center justify-evenly leading-[30px]">
            <div className="text-center px-8 py-10 space-y-2 font-[550]">
                <p className="text-[30px]">90%</p>
                <p className="text-[25px]">of all orders are produced locally</p>
            </div>
            <div className="text-center px-8 py-10 space-y-2 font-[550]">
                <p className="text-[30px]">90%</p>
                <p className="text-[25px]">of orders arrive within 5 days of ordering</p>
            </div>
            <div className="text-center px-8 py-10 space-y-2 font-[550]">
                <p className="text-[30px]">140%</p>
                <p className="text-[25px]">print providers across 32 countries</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FirstComponent;
