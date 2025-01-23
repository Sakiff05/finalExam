import React from "react";

export default function Testimonal() {
  return (
    <div className="px-16 py-10">
      <div className="header flex flex-col items-center gap-5">
        <h1 className="text-3xl sm:text-4xl font-bold">Testimonal</h1>
        <p>We have your occasion covered</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
        <div className="card bg-slate-300 rounded-lg p-5 flex flex-col gap-5 items-center mt-10">
          <div className="img">
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-2.png?v=1733907245&width=120"
              alt=""
              className="w-20 rounded-[50%]"
            />
          </div>
          <div className="content flex flex-col gap-5 items-center justify-center text-center">
            <p>Smart Home Assistant</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate illo dicta consectetur modi maiores atque harum saepe
              cumque obcaecati rerum.
            </p>
            <p className="font-bold">Emily T.</p>
            <p className="text-gray-500">Sydney Australia.</p>
          </div>
        </div>
        <div className="card bg-slate-300 rounded-lg p-5 flex flex-col gap-5 items-center mt-10">
          <div className="img">
            <img
              src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-3.png?v=1733907245&width=120"
              alt=""
              className="w-20 rounded-[50%]"
            />
          </div>
          <div className="content flex flex-col gap-5 items-center justify-center text-center">
            <p>Smart Home Assistant</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate illo dicta consectetur modi maiores atque harum saepe
              cumque obcaecati rerum.
            </p>
            <p className="font-bold">Emily T.</p>
            <p className="text-gray-500">Sydney Australia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
