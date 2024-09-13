import React from "react";

function ThirdComponent() {
  return (
    <div>
      <div className="md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1300px] m-auto py-8">
        <div className="py-10 flex items-center justify-between">
          <div>
            <img
              src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
              alt=""
              className="md:w-[350px] lg:w-[450px] xl:w-[600px] 2xl:w-[650px]"
            />
          </div>
          <div className="md:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[650px] px-10 py-8">
            <p className="text-[20px] text-black font-medium">
              For print producers
            </p>
            <p className="text-[60px] font-bold leading-[65px] py-1">
              GelatoConnect
            </p>
            <p className="text-[26px] my-6 leading-[30px]">
              Elevate efficiency, cut costs, and seamlessly automate with our
              all-in-one software solution for the print industry
            </p>

            <button className="py-[6px] px-4 text-[14px] font-bold bg-black text-white rounded-full border-[1px] border-black hover:text-gray-400 duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ffedd5] bg-opacity-25 py-10 flex items-center justify-center">
        <div className="md:w-[350px] lg:w-[500px] xl:w-[500px] 2xl:w-[650px] px-8 py-8">
          <p className="text-[70px] font-bold leading-[70px] py-1">
            Meet GelatoConnect at Printing United
          </p>
          <p className="text-[17px] my-6 text-gray-800">
            Meet us at Printing United from September 10-12 in Las Vegas. Book
            your meeting slot to discover the innovative ways GelatoConnect is
            transforming the landscape and driving success for businesses like
            yours.
          </p>

          <button className="py-[6px] px-4 text-[14px] font-bold bg-black text-white rounded-full border-[1px] border-black hover:text-gray-400 duration-200">
            Book a meeting
          </button>
        </div>

        <div>
          <img
            src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/1000x0/"
            alt=""
            className="md:w-[350px] lg:w-[400px] xl:w-[600px] 2xl:w-[650px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ThirdComponent;
