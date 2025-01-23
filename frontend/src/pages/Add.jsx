import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  img: Yup.string().url().required("Required"),
  price: Yup.number().required("Required"),
});

export default function Add() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function deleteData(id) {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setData([...data].filter((product) => product._id != id));
  }

  useEffect(() => {
    getData();
  }, [setData]);

  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <div className="py-72 px-16 flex flex-col gap-10 justify-center items-center">
      <Helmet>
        <title>Add page</title>
        <meta name="description" content="Add products to page" />
      </Helmet>
      <Formik
        initialValues={{
          title: "",
          img: "",
          price: "",
        }}
        validationSchema={AddSchema}
        onSubmit={async (values, { resetForm }) => {
          await axios.post("http://localhost:5000/products", values);
          await getData();
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col w-full sm:w-5/12 gap-5 items-center justify-center ">
            <Field
              name="title"
              className="w-full border border-blue-500 p-2 outline-none rounded text-xl"
              placeholder="Title..."
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="price"
              className="w-full border border-blue-500 p-2 outline-none rounded text-xl"
              placeholder="Price..."
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <Field
              name="img"
              className="w-full border border-blue-500 p-2 outline-none rounded text-xl"
              placeholder="Image..."
            />
            {errors.img && touched.img ? <div>{errors.img}</div> : null}
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded w-full text-xl"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <table className="w-full border-collapse">
        <tr>
          <th className="border p-2">Title</th>
          <th className="border p-2">Img</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Actions</th>
        </tr>
        {data.map((item) => (
          <tr key={item._id}>
            <td className="border p-2">{item.title}</td>
            <td className="border p-2">
              <img src={item.img} alt="" className="w-40" />
            </td>
            <td className="border p-2">${item.price}</td>
            <td className="border p-2">
              <button
                className="bg-rose-600 text-white font-bold p-2 "
                onClick={() => deleteData(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
