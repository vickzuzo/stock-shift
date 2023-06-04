import { db } from "@config/firebase.config";
import { Product } from "@network/interface";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const productsRef = collection(db, "products");
    const querySnapshot = await getDocs(productsRef);

    const data = querySnapshot.docs.map((doc) => doc.data() as Product);
    setProducts(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);


  return { isLoading, products };
};
