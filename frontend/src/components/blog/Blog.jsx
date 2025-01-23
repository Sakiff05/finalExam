import React from "react";

export default function Blog() {
  return (
    <div className="px-16 py-10">
      <div className="header flex flex-col items-center gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Check Our Blog Posts</h1>
        <p>We have your occasion covered</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center mt-10">
        <div className="card rounded-lg flex flex-col gap-5 ">
          <div className="img">
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-5png.png?v=1733907608"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content flex flex-col gap-4 items-start">
            <p className="text-2xl font-bold">Street Style Stories Unfold</p>
            <button className="bg-transparent p-2 rounded border border-black">
              Read more
            </button>
          </div>
        </div>
        <div className="card rounded-lg flex flex-col gap-5 ">
          <div className="img">
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-1png.png?v=1733907473"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content flex flex-col gap-4 items-start">
            <p className="text-2xl font-bold">Street Style Stories Unfold</p>
            <button className="bg-transparent p-2 rounded border border-black">
              Read more
            </button>
          </div>
        </div>
        <div className="card rounded-lg flex flex-col gap-5 ">
          <div className="img">
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/instagram-3.png?v=1733907608"
              alt=""
              className="w-full"
            />
          </div>
          <div className="content flex flex-col gap-4 items-start">
            <p className="text-2xl font-bold">Street Style Stories Unfold</p>
            <button className="bg-transparent p-2 rounded border border-black">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
