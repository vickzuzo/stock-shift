import { BaseToast } from "@components/BaseToast";
import { db } from "@config/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { Product } from "@network/interface";

export const useGetUserCart = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const getUserCart = async () => {
    setIsLoading(true);
    if (user) {
      const cart_ref = doc(db, "carts", user.uid);
      const cart_doc = await getDoc(cart_ref);

      if (cart_doc.exists()) {
        const user_cart = cart_doc.data().cart;

        const productPromises = user_cart.map(async (productId: string) => {
          const productRef = doc(collection(db, "products"), productId);
          const productSnapshot = await getDoc(productRef);
          return productSnapshot.data();
        });

        const products = await Promise.all(productPromises);
        setCart(products);
      }
      setIsLoading(false);
    } else {
      // BaseToast.show({ type: "error", text2: "You are not logged in!." });
    }
  };

  useEffect(() => {
    getUserCart();
  }, [user]);

  return { cart, isLoading };
};
