import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='bg-black text-white py-5'>
      <div className='w-[1300px] m-auto'>
        <div className='flex items-center justify-between py-5'>
            <div>
                <img src="https://a.storyblok.com/f/165154/x/b69011fb22/_logo.svg" alt="" className='w-[130px] cursor-pointer'/>
            </div>
            <div className='flex items-center space-x-10'>
                <div>Find Gelato on:</div>
                <div><InstagramIcon sx={{fontSize:'35px', cursor:'pointer'}}/></div>
                <div><FacebookIcon sx={{fontSize:'35px', cursor:'pointer'}}/></div>
                <div><YouTubeIcon sx={{fontSize:'35px', cursor:'pointer'}}/></div>
                <div><LinkedInIcon sx={{fontSize:'35px', cursor:'pointer'}}/></div>
                <div><YouTubeIcon sx={{fontSize:'35px', cursor:'pointer'}}/></div>
            </div>
        </div>

        <div className='flex'>
            <div></div>
            <div></div>
        </div>

        <div className='flex items-center justify-between'>
            <div className='flex items-center text-[12px]'>
                <p className='pr-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-300 duration-200'>Contact us</p>
                <p className='px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-300 duration-200'>Legal</p>
                <p className='px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-300 duration-200'>Privacy policy</p>
                <p className='px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-300 duration-200'>Cookie policy</p>
                <p className='px-4 cursor-pointer border-r-[1px] border-gray-200 hover:text-gray-300 duration-200'>API terms</p>
                <p className='pl-4 cursor-pointer hover:text-gray-300 duration-200'>Sitemap</p>
            </div>
            <div>
                <select name="" id="" className='bg-black px-4 py-2 border-[1px] outline-0'>
                    <option value="English">English</option>
                    <option value="English (Canada)">English (Canada)</option>
                    <option value="English (United Kingdom)">English (United Kingdom)</option>
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
  )
}

export default Footer
