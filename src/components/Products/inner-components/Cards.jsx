import React from "react";
import ItemImg from "../../../assets/item-image.PNG";

const Cards = ({ isFirstSet }) => {
  const cardData = [
    { id: 1, title: "Crystal Agate Phone Grip", price: "18.99$" },
    { id: 2, title: "Crystal Agate Phone Grip", price: "18.99$" },
    { id: 3, title: "Crystal Agate Phone Grip", price: "18.99$" },
    { id: 4, title: "Crystal Agate Phone Grip", price: "18.99$" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-around mt-4">
      {cardData.map((card, index) => (
        <div
          key={card.id}
          className={`px-8 py-12 bg-white rounded-3xl ${isFirstSet && index === 0 ? "shadow-lg" : "border border-gray-200"}`}
        >
          <div className="flex items-center justify-center pb-8">
            <img src={ItemImg} alt="Best-seller-item-image" className="w-1/3" />
          </div>
          <p className="uppercase font-medium text-sm text-gray-400 text-center">
            {card.title} <br />
            <b className="text-gray-600">{card.price}</b>
          </p>
          <div className="text-center pt-4">
            <button
              type="button"
              className={`px-6 py-2 border-2 border-blue-500 ${
                isFirstSet && index === 0
                  ? "bg-blue-500 text-white"
                  : "bg-transparent text-blue-500"
              } rounded-lg capitalize cursor-pointer`}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
