import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function Card({ item, handleBasket, handleFavorite }) {
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.favorite);
  const isExist = favorites.find((card) => card._id == item._id);

  return (
    <div
      className="card cursor-pointer"
      onClick={() => navigate(`details/${item._id}`)}
    >
      <div className="img rounded-md overflow-hidden">
        <img src={item.img} alt="" className="w-full" />
      </div>
      <div className="content mt-5 flex flex-col items-center gap-5">
        <p className="text-2xl">{item.title}</p>
        <p className="text-3xl font-bold">${item.price}</p>
        <div className="buttons flex items-center gap-5">
          <button>
            <FaShoppingBasket
              className="text-4xl text-blue-500"
              onClick={(e) => handleBasket(e, item)}
            />
          </button>
          <button onClick={(e) => handleFavorite(e, item)}>
            {isExist ? (
              <FaHeart className="text-4xl text-rose-500" />
            ) : (
              <CiHeart className="text-4xl text-rose-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
