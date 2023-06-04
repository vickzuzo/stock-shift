import { db } from "@config/firebase.config";
import { Product } from "@network/interface";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetSingleProduct = (id: string) => {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);

  const getProduct = async () => {
    setIsLoading(true);

    const product_ref = doc(db, "products", id);
    const product_doc = await getDoc(product_ref);
    if (product_doc.exists()) {
      setProduct(product_doc.data() as Product);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return { product, isLoading };
};
