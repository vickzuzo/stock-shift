import { BaseNavigator } from "@interfaces";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "./useAuth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@config/firebase.config";
import { useGetUserCart } from "./useGetUserCart";
import { useState } from "react";

export const useCheckout = ({
  navigation,
  onClose,
}: {
  navigation: BaseNavigator;
  onClose?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const initialValues = {
    cardNumber: "",
    cardHolder: "",
    cardExpiry: "",
    cardCvv: "",
    deliveryDestination: "",
  };

  const validationSchema = yup.object().shape({
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, "Card number must be a 16-digit number")
      .required("Card number is required"),
    cardHolder: yup.string().required("Card holder name is required!."),
    cardExpiry: yup.string().required("Card expiration date is required!."),
    cardCvv: yup.string().required("Card cvv is required!."),
    deliveryDestination: yup
      .string()
      .required("Delivery destination is required!."),
  });

  const { cart, isLoading: isLoadingCart } = useGetUserCart();

  const onSubmit = async (values: {
    cardNumber: string;
    cardHolder: string;
    cardExpiry: string;
    cardCvv: string;
    deliveryDestination: string;
  }) => {
    const { deliveryDestination, cardCvv, cardExpiry, cardHolder, cardNumber } =
      values;
    setIsLoading(true);
    if (user) {
      const orders_ref = doc(db, "orders", user.uid);
      await setDoc(orders_ref, {
        cardNumber,
        cardHolder,
        cardExpiry,
        cardCvv,
        deliveryDestination,
        products: cart.map((prd) => prd.oid),
      });

      onClose?.();
      setIsLoading(false);
      navigation.navigate("CHECKOUT_STATUS_SCREEN", { status: "SUCCESS" });
    } else {
      navigation.navigate("CHECKOUT_STATUS_SCREEN", { status: "FAILED" });

      onClose?.();
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const {
    errors,
    values,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    errors,
    values,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    isLoading,
  };
};
