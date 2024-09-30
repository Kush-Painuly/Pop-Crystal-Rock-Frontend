import React from "react";
import ItemImg from "../../assets/item-image.PNG";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleIcon from '@mui/icons-material/Circle';
import scrollDownSymbol from "../../assets/scroll-down.PNG";
const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-400 to-blue-200 p-32 relative z-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-medium text-white">Welcome to</h2>
          <h2 className="text-5xl font-semibold text-white capitalize">
            Pop Rock Crystal Shop!
          </h2>
          <div className="w-1/4 py-8">
            <p className="text-sm">
              Here you will find unique phone accessories, crystals, jewellery
              and more. Free shipping inside U.S and our phone grips come with a
              limited warranty. Enjoy !
            </p>
          </div>
          <div className="py-5 flex items-center justify-start gap-4">
            <button
              type="button"
              className="text-gradient-to-r from-blue-500 to-blue-600 text-sm uppercase font-medium px-8 py-4 rounded-lg bg-white shadow-md"
            >
              Shop now
            </button>
            <p className="cursor-pointer">
              <a href="#" className=" font-light text-sm">
                about us
              </a>
            </p>
          </div>
        </div>
        <div className="z-30 absolute right-48 top-40 px-12 py-20 bg-white rounded-3xl shadow-lg">
          <div className="flex items-center justify-center pb-8">
            <img
              src={ItemImg}
              alt="Best-seller-item-image"
              
            />
          </div>

          <p className=" uppercase font-medium text-sm text-gray-400">
            crystal agate phone grip - <b className="text-gray-600">18.99$</b>
          </p>
          <div className="absolute top-10 left-0 bg-gradient-to-r from-blue-600 to-blue-400  px-4 py-1 rounded-r-lg">
            <p className="text-white font-medium">New lot</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-64 flex items-center justify-center gap-4 z-40">
          <div className="bg-blue-500 text-white text-sm cursor-pointer">
            <ArrowBackIcon />
          </div>
          <div>
            <CircleIcon style={{ color: '#1976d2' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
            <CircleIcon style={{ color: 'rgba(208, 220, 227' }} fontSize="small"/>
          </div>
          <div className="bg-blue-500 text-white text-sm">
            <ArrowForwardIcon />
          </div>
        </div>
        
        <div className="custom-shape-divider-bottom-1727599130">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 motion-safe p-2">
        <img src={scrollDownSymbol} alt="scroll-down-symbol" className="w-8 animate-updown cursor-pointer" />
        <span className="text-xs font-bold text-gray-400">Scroll Down</span>
      </div>
    </>
  );
};

export default Banner;


