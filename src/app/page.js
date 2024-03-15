// import React, { useEffect, useState } from "react";

async function getStrapiData(url) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem fetching data:", error);
  }
}

export default async function Home() {
  // const [products, setProducts] = useState({ data: [] });

  const products = await getStrapiData("/api/products");

  // const article = products.attributes.article;

  return (
    <main className="container mx-auto py-6">
      <h1 className="text-5xl font-bold">Matarrazi</h1>
      <ul className="mt-4 text-xl text-white">
        {/* {products.map((product, index) => (
          <li key={index}>{article}</li>
        ))} */}
      </ul>
    </main>
  );
}
