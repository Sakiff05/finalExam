import React from "react";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="px-16 py-96">
      <Helmet>
        <title>404</title>
        <meta name="description" content="Not found" />
      </Helmet>
      <p className="text-5xl text-center">Page not found!</p>
    </div>
  );
}
