import React from "react";

export default function Footer() {
  return (
    <footer className="px-16 py-10 bg-blue-200 flex gap-10 justify-between flex-col sm:flex-row">
      <div className="font-bold flex flex-col gap-5">
        <h1 className="text-xl ">Contact info</h1>
        <ul className="flex flex-col gap-5 items-start text-gray-500">
          <li>70 Washington Square South, New York, NY 10012, United States</li>
          <li>Email: info@fashionshop.com</li>
          <li>Phone: (212)555-1234</li>
        </ul>
      </div>
      <div className="font-bold flex flex-col gap-5">
        <h1 className="text-xl ">Our Store</h1>
        <ul className="flex flex-col gap-5 items-start text-gray-500">
          <li>Full Grouming</li>
          <li>Styling</li>
          <li>Full Grooming</li>
          <li>Bath and Dry</li>
        </ul>
      </div>
      <div className="font-bold flex flex-col gap-5">
        <h1 className="text-xl ">Useful Links</h1>
        <ul className="flex flex-col gap-5 items-start text-gray-500">
          <li>Login</li>
          <li>My account</li>
          <li>Whislist</li>
          <li>Bath and Dry</li>
        </ul>
      </div>
      <div className="flex flex-col font-bold gap-5">
        <h1 className="text-xl ">
          Subscribe to our newsletter to receive news on update.
        </h1>
        <div className="bg-[#F1E6F2] p-2 flex items-center justify-between">
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="border-none bg-transparent outline-none p-3 max-w-28 sm:max-w-max"
            />
          </form>
          <button type="submit " className="bg-black text-white p-2 rounded-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </footer>
  );
}
