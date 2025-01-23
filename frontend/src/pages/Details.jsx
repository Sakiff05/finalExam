import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";

export default function Details() {
  const { id } = useParams("id");
  const [data, setData] = useState({});
  async function getData() {
    try {
      let res = await axios.get(`http://localhost:5000/products/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <div className="px-16 py-32 flex items-center justify-center">
      <Helmet>
        <title>{`Details | ${data.title}`}</title>
        <meta name="description" content="Details of certain products" />
      </Helmet>
      <div className="card w-4/12">
        <div className="img rounded-md overflow-hidden">
          <img src={data.img} alt="" className="w-full" />
        </div>
        <div className="content mt-5 flex flex-col items-center gap-5">
          <p className="text-2xl">{data.title}</p>
          <p className="text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolores alias praesentium sed voluptas, fugit ipsam molestias enim
            corporis hic!
          </p>
          <p className="text-3xl font-bold">${data.price}</p>
        </div>
      </div>
    </div>
  );
}
