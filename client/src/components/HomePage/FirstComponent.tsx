import React from "react";

function FirstComponent() {
  return (
    <div>
      <div className="md:w-[650px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto py-8 flex flex-col-reverse md:flex-row items-center justify-between bg-[#ffedd5] bg-opacity-25 md:bg-white md:bg-opacity-100">
        <div className="w-[300px] md:w-auto lg:w-[400px] xl:w-[600px] 2xl:w-[650px] xl:px-5 2xl:px-8">
          <p className="text-[30px] md:text-[60px] font-semibold md:font-bold leading-[35px] md:leading-[70px] py-5 md:py-8">
            Print on demand for your ecommerce business
          </p>
          <p className="text-[25px] md:text-[26px]">
            Sign up for free and only pay for what you sell
          </p>
          <p className="text-[16px] md:text-[17px] my-4 md:my-2 text-gray-800">
            Turn your passion into profit with the world's largest{" "}
            <a href="/#" className="underline hover:text-gray-400">
              print on demand
            </a>{" "}
            network.
          </p>

          <div className="md:space-x-5 my-10 flex flex-col md:flex-row space-y-4 md:space-y-0">
            <button className="py-[6px] px-4 text-[14px] font-bold bg-black text-white rounded-full border-[1px] border-black hover:text-gray-400 duration-200">
              Get started for free
            </button>
            <button className="py-[6px] px-4 text-[14px] font-bold rounded-full border-[1px] border-black hover:bg-gray-200 duration-200">
              See our products
            </button>
          </div>

          <div className="cursor-pointer text-gray-500 hover:text-gray-400">
            <img
              src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"
              alt=""
              className="w-[130px] md:w-[150px]"
            />
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <img
                  src="https://www.gelato.com/assets/rating-stars/star.svg"
                  alt=""
                  className="w-[19px]"
                />
                <img
                  src="https://www.gelato.com/assets/rating-stars/star.svg"
                  alt=""
                  className="w-[19px]"
                />
                <img
                  src="https://www.gelato.com/assets/rating-stars/star.svg"
                  alt=""
                  className="w-[19px]"
                />
                <img
                  src="https://www.gelato.com/assets/rating-stars/star.svg"
                  alt=""
                  className="w-[19px]"
                />
                <img
                  src="https://www.gelato.com/assets/rating-stars/star.svg"
                  alt=""
                  className="w-[19px]"
                />
                <span className="text-[17px]">4.8 / 5</span>
              </div>
              <div className="text-[16px] mt-[3px]">based on 887 reviews</div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
            alt=""
            className="w-[300px] md:w-auto lg:w-[450px] xl:w-[500px] 2xl:w-[650px]"
          />
        </div>
      </div>

      <div className="bg-[#ffedd5] bg-opacity-25 hidden md:block">
        <div className="lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto text-black flex items-center justify-evenly leading-[30px]">
          <div className="text-center px-8 py-10 space-y-2 font-[550]">
            <p className="text-[30px]">90%</p>
            <p className="text-[25px]">of all orders are produced locally</p>
          </div>
          <div className="text-center px-8 py-10 space-y-2 font-[550]">
            <p className="text-[30px]">90%</p>
            <p className="text-[25px]">
              of orders arrive within 5 days of ordering
            </p>
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
