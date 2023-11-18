import { ScrollView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import client, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => setCategories(data));
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
    >
      {categories?.map((category) => (
        <CategoryCard 
        key={category._id}
        imgUrl={urlFor(category.image).url()}
        title={category.name} 
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
