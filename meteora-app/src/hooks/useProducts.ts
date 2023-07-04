import { useEffect, useState } from "react";

import IProduct from "@/types/IProduct";

import api from "@/utils/api";

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return products;
};

export default useProducts;
