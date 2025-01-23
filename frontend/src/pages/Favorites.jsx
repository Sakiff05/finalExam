import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoriteSlice";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleFavorite(e, item) {
    e.stopPropagation();
    if (favorites.find((data) => data._id == item._id)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <div className="px-16 py-40 sm:py-20">
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="You can add products that you like to favorites page"
        />
      </Helmet>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 items-center my-10">
          {favorites.map((item) => (
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
                  <button onClick={(e) => handleFavorite(e, item)}>
                    {favorites.find((card) => card._id == item._id) ? (
                      <FaHeart className="text-4xl text-rose-500" />
                    ) : (
                      <CiHeart className="text-4xl text-rose-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-4xl text-center py-80 px-16">
          Your favorites is empty!
        </p>
      )}
    </div>
  );
}
