import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import api from "../service/api";

interface IProducts {
  id: number;
  title: string;
}

interface ProductProps {
  products: IProducts[];
}
export default function Home({ products }: ProductProps) {
  // const [products, setProducts] = useState<IProducts[]>([]);

  // useEffect(() => {
  //   api.get("api/hello/").then((response) => {
  //     console.log(response.data.products);

  //     setProducts(response.data.products);
  //   });
  // }, []);

  return (
    <div>
      <h1>Products</h1>
      <section>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<ProductProps> =
  async () => {
    const response = await api.get("api/hello/");

    const products = await response.data.products;

    return {
      props: { products },
    };
  };
