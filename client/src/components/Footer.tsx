import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div className="bg-black text-white py-5">
      <div className="w-[1300px] m-auto">
        <div className="flex items-center justify-between py-5">
          <div>
            <img
              src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg"
              alt=""
              className="w-[130px] cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-10">
            <div>Find Gelato on:</div>
            <div>
              <InstagramIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
            </div>
            <div>
              <FacebookIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
            </div>
            <div>
              <YouTubeIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
            </div>
            <div>
              <LinkedInIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
            </div>
            <div>
              <YouTubeIcon sx={{ fontSize: "35px", cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="flex text-gray-200">
          <div className="w-[360px]">
            <p className="text-[12px] leading-[23px]">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </p>

            <button className="mt-5 py-[6px] px-4 text-[14px] font-bold bg-white text-black rounded-full border-[1px] border-black hover:text-gray-400 hover:bg-gray-100 duration-200">
              Get started
            </button>

            <div className="mt-14">
              <p className="my-3">Get the app</p>
              <div className="flex items-center">
                <img
                  src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg"
                  alt=""
                />
                <img
                  src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex px-10 space-x-12">
            <div className="space-y-5">
              <div>Print on demand</div>
              <div>
                <ul className="text-[12px] space-y-1">
                  <li className="cursor-pointer hover:text-gray-400">
                    What is print on demand?
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Product catalog
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Shipping and delivery
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Dropshipping products
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Pro sellers
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    White label products
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Returns policy
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Global, yet local
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Sustainability
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <div>Integrations</div>
              <div>
                <ul className="text-[12px] space-y-1">
                  <li className="cursor-pointer hover:text-gray-400">
                    Shopify
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">Etsy</li>
                  <li className="cursor-pointer hover:text-gray-400">
                    WooCommerce
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">Wix</li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Squarespace
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    BigCommerce
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">API</li>
                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <div>Start selling</div>
              <div>
                <ul className="text-[12px] space-y-1">
                  <li className="cursor-pointer hover:text-gray-400">
                    Embroidery
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand t-shirts
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand hoodies
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand posters
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand canvas
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand calendars
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand mugs
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Custom products
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Custom clothing
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Custom merchandise
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Custom phone cases
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand Europe
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand UK
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand France
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Print on demand Canada
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Merch maker
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-5">
              <div>Company</div>
              <div>
                <ul className="text-[12px] space-y-1">
                  <li className="cursor-pointer hover:text-gray-400">
                    GelatoConnect
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    About Gelato
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Leadership team
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Board & investors
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Newsroom
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">Blog</li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Customer Stories
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Partners
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Careers
                  </li>
                  <li className="cursor-pointer hover:text-gray-400">
                    Affiliates program
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-12 text-gray-200">
          <div className="flex items-center text-[12px]">
            <p className="pr-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-400 duration-200">
              Contact us
            </p>
            <p className="px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-400 duration-200">
              Legal
            </p>
            <p className="px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-400 duration-200">
              Privacy policy
            </p>
            <p className="px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-400 duration-200">
              Cookie policy
            </p>
            <p className="px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-400 duration-200">
              API terms
            </p>
            <p className="pl-4 cursor-pointer hover:text-gray-400 duration-200">
              Sitemap
            </p>
          </div>
          <div>
            <select
              name=""
              id=""
              className="bg-black px-4 py-2 border-[1px] outline-0"
            >
              <option value="English">English</option>
              <option value="English (Canada)">English (Canada)</option>
              <option value="English (United Kingdom)">
                English (United Kingdom)
              </option>
              <option value="English (Australia)">English (Australia)</option>
              <option value="English (India)">English (India)</option>
              <option value="Francais">Francais</option>
              <option value="Espanol">Espanol</option>
              <option value="Italiano">Italiano</option>
              <option value="Deutsch">Deutsch</option>
              <option value="Norsk">Norsk</option>
              <option value="Svenska">Svenska</option>
              <option value="Tieng Viet">Tieng Viet</option>
              <option value="Nederlands">Nederlands</option>
              <option value="Dansk">Dansk</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
