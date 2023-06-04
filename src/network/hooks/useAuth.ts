import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { ILoginAccount, IRegisterAccount } from "@network/interface";
import * as yup from "yup";
import { useFormik } from "formik";
import { BaseToast } from "@components/BaseToast";
import { BaseNavigator } from "@interfaces";

const auth = getAuth();

export const useAuth = () => {
  const [user, setUser] = React.useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
};

interface IProps {
  navigation: BaseNavigator;
}

export const useLogin = ({ navigation }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: ILoginAccount = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address!.")
      .required("Please provide your email address!."),
    password: yup.string().required("Please provide a your account password!."),
  });

  const onSubmit = async (values: ILoginAccount) => {
    if (values.email === "" || values.password === "") {
      BaseToast.show({
        type: "error",
        text1: "Email and password are required.",
      });
    }

    setIsLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setIsLoading(false);
      navigation.navigate("MAIN_STACK", {});
    } catch (error: any) {
      setIsLoading(false);
      BaseToast.show({
        type: "error",
        text2: error?.message,
      });
    }
  };

  const {
    handleBlur,
    handleChange,
    errors,
    values,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return {
    handleSubmit,
    handleBlur,
    errors,
    values,
    handleChange,
    setFieldValue,
    isLoading,
  };
};

export const useRegister = ({ navigation }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: IRegisterAccount = {
    email: "",
    password: "",
    fullName: "",
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address!.")
      .required("Please provide your email address!."),
    password: yup.string().required("Please provide your account password!."),
    fullName: yup.string().required("Please provide your valid full name!."),
  });

  const onSubmit = async (values: IRegisterAccount) => {
    if (values.email === "" || values.password === "" || values.fullName) {
      BaseToast.show({
        type: "error",
        text1: "Email and password are required.",
      });
    }
    setIsLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      setIsLoading(false);
      // persist user login with res.user object
      navigation.navigate("MAIN_STACK", {});
    } catch (error: any) {
      setIsLoading(false);
      BaseToast.show({
        type: "error",
        text2: error?.message,
      });
    }
  };

  const {
    handleBlur,
    handleChange,
    errors,
    values,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return {
    handleSubmit,
    handleBlur,
    errors,
    values,
    handleChange,
    setFieldValue,
    isLoading,
  };
};
