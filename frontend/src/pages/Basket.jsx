import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteProduct,
  increment,
} from "../redux/slices/basketSlice";
import { Helmet } from "react-helmet-async";

export default function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <div className="px-16 py-72">
      <Helmet>
        <title>Basket</title>
        <meta
          name="description"
          content="You can add your products to basket to buy them"
        />
      </Helmet>
      {basket.length > 0 ? (
        <table className=" w-6/12 sm:w-full border-collapse ">
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Img</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Count</th>
            <th className="border p-2">Actions</th>
          </tr>
          {basket.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2">
                <img src={item.img} alt="" className="w-40" />
              </td>
              <td className="border p-2">${item.price}</td>
              <td className="border p-2">${item.price * item.count}</td>
              <td className="border p-2">
                <button
                  className="border p-1"
                  onClick={() => dispatch(decrement(item))}
                >
                  -
                </button>
                <span className="px-3">{item.count}</span>
                <button
                  className="border p-1"
                  onClick={() => dispatch(increment(item))}
                >
                  +
                </button>
              </td>
              <td className="border p-2">
                <button
                  className="bg-rose-600 text-white font-bold p-2 "
                  onClick={() => dispatch(deleteProduct(item))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <p className="text-4xl text-center py-44 px-16">
          Your basket is empty!
        </p>
      )}
    </div>
  );
}
