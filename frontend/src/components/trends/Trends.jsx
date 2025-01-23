import React from "react";
import styles from "./Trends.module.css";
export default function Trends() {
  return (
    <div className="px-16 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
        <div className={`rounded-lg ${styles.card}`}>
          <div className="content flex flex-col gap-5 items-start  px-10 py-24">
            <p className="text-lg">TOP COLLECTIONS</p>
            <p className="text-2xl font-bold">Top Trends Style</p>
            <button className="underline">Shop now</button>
          </div>
        </div>
        <div className={`rounded-lg ${styles.card2}`}>
          <div className="content flex flex-col gap-5 items-start  px-10 py-24">
            <p className="text-lg">TOP COLLECTIONS</p>
            <p className="text-2xl font-bold">Top Trends Style</p>
            <button className="underline">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
