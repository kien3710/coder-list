import Link from "next/link";
import React from "react";
import { data } from "../../data/data";
export default function Developer() {
  return (
    <>
      <div className="container">
        {data.map((item, index) => {
          return (
            <>
              <Link href={"/developer/" + item.id}>
                <h3>{item.name}</h3>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
