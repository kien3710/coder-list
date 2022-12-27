import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((coder) => {
    return {
      params: { id: coder.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { coders: data },
  };
};
export default function Detall({ coders }) {
  return (
    <div>
      <h1>{coders.name}</h1>
      <p>Email: {coders.email}</p>
      <p>Website: {coders.website}</p>
      <p>Address: {coders.address.street}</p>
      <p>Company: {coders.company.name}</p>
    </div>
  );
}
