import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlice";
import { addFavorite, removeFavorite } from "../../redux/slices/favoriteSlice";
export default function Shop() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorite.favorite);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
      setTempData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleBasket(e, item) {
    e.stopPropagation();
    dispatch(addBasket(item));
  }
  function handleFavorite(e, item) {
    e.stopPropagation();
    if (favorite.find((data) => data._id == item._id)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setData(
      [...tempData].filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function handleSort(e) {
    const value = e.target.value;
    if (value == "name") {
      setData([...data].toSorted((a, b) => a.title.localeCompare(b.title)));
    } else {
      setData([...tempData]);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-16 py-10">
      <div className="header flex flex-col items-center gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Featured Products</h1>
        <p>We have your occasion covered</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-center items-center my-10">
        <input
          type="search"
          className="border rounded-full p-2 text-xl outline-none"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
        />
        <select
          className="border rounded-full p-2 text-xl outline-none"
          onChange={(e) => handleSort(e)}
        >
          <option value="default">Default</option>
          <option value="name">Sort by name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 items-center my-10">
        {data.map((item) => (
          <Card
            item={item}
            key={item._id}
            handleBasket={handleBasket}
            handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
}
