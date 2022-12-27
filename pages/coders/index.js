import Link from "next/link";
import React from "react";
import style from "../../styles/Coder.module.css";
import Image from "next/image";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data },
  };
};
export default function AllCoders({ coders, data }) {
  console.log("object , data", data);
  return (
    <>
      <h1>All coders</h1>
      {coders.map((coder) => (
        <Link href={"/coders/" + coder.id} key={coder.id}>
          <h3 className={style.single}>{coder.name}</h3>
        </Link>
      ))}
    </>
  );
}
