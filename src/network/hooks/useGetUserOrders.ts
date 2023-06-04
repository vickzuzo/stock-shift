import { db } from "@config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";
import { Product } from "@network/interface";
import { BaseToast } from "@components/BaseToast";

export const useGetUserOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProductDetails = (productIds: any[]) => {
    // Implement the logic to fetch the product details from your data source
    // For example, you can use another Firestore query or make an API request

    const products: any[] = [];

    for (const productId of productIds) {
      // Fetch the product details for the productId
      // Add the product object to the products array
      const product = {
        id: productId,
        // Add other product details as needed
      };

      products.push(product);
    }

    return products;
  };

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      if (user) {
        const userOrdersDocRef = doc(db, "user-orders", user.uid);
        const userOrdersSnapshot = await getDoc(userOrdersDocRef);

        if (userOrdersSnapshot.exists()) {
          const userOrder = userOrdersSnapshot.data();
          const productIds = userOrder.products.map(
            async (product) => product.id
          );

          // Fetch the product details for the given productIds
          const products = await fetchProductDetails(productIds);

          setOrders(products);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } else {
        // BaseToast.show({ type: "error", type2: "Failed to get user order" });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error retrieving user order:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, isLoading };
};
