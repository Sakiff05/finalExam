import React, { useEffect } from "react";
import Hero from "../components/hero/Hero";
import Trends from "../components/trends/Trends";
import Shop from "../components/shop/Shop";
import Testimonal from "../components/testimonal/Testimonal";
import Blog from "../components/blog/Blog";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page of the website" />
      </Helmet>
      <Hero />
      <Trends />
      <Shop />
      <Testimonal />
      <Blog />
    </>
  );
}
