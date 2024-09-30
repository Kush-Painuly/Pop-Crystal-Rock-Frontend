import React from "react";
import ItemImg from "../../assets/item-image.PNG";

const Offer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative z-0 p-8">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full md:w-2/5 p-4">
        <h2 className="uppercase text-2xl text-gray-700 font-medium tracking-wide text-left md:text-end">
          Best Price
        </h2>
        <p className="capitalize text-4xl md:text-5xl font-bold text-gray-700 mt-2">
          Agate Phone Grip
        </p>
        <div className="flex items-center gap-4 mt-2">
          <p className="line-through text-gray-600 font-light text-sm">
            $44.50
          </p>
          <p className="text-3xl md:text-4xl text-red-400 font-bold">$19.50</p>
        </div>
        <p className="mt-3 w-full md:w-4/5 text-start">
          These Pop Top Crystal grips can be swapped with other tops depending
          on your mood, outfit, nails, phone case, or holiday! Just gently
          squeeze the sides to remove and swap out with another color or design!
        </p>
        <button
          type="button"
          className="mt-4 px-8 py-2 border border-blue-600 bg-blue-600 text-white rounded-xl hover:bg-blue-800"
        >
          Buy Now
        </button>
      </div>
      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-full md:w-3/5 relative mt-8 md:mt-0">
        <div className="bg-gray-300 rounded-full p-12 md:p-20 shadow-lg z-10">
          <div className="bg-white rounded-full p-10 md:p-16 shadow-lg">
            <div className="bg-white rounded-full p-8 md:p-12 shadow-xl">
              <img
                src={ItemImg}
                alt="Best-Selling Item"
                className="w-10/12 h-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Custom Shape Divider */}
      <div className="custom-shape-divider-bottom-1727679726 -z-10 absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      ;
    </div>
  );
};

export default Offer;

<div className="custom-shape-divider-bottom-1727679726 -z-10 absolute bottom-0 left-0 w-full overflow-hidden line-height-0">
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
      className="shape-fill"
    ></path>
  </svg>
</div>;
