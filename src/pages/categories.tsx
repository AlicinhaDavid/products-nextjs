import { GetStaticProps } from "next";
import React from "react";
import api from "../service/api";

interface ICategory {
  id: number;
  title: string;
}

interface CategoryProps {
  categories: ICategory[];
}

export default function categories({ categories }: CategoryProps) {
  return (
    <div>
      <h1>Categories</h1>
      <section>
        <ul>
          {categories.map((category) => {
            return <li key={category.id}>{category.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const response = await api.get("api/hello/");

  const categories = response.data.categories;

  return {
    props: {
      categories,
    },
    revalidate: 5,
  };
};
