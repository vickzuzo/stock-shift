import { Fonts } from "@interfaces";
import { Colors } from "@theme";
import { BaseToast, ErrorToast } from "react-native-toast-message";

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ height: 50, borderLeftColor: "green", backgroundColor: "green" }}
      text1Props={{
        style: {
          fontSize: 15,
          fontFamily: Fonts.Medium,
          color: Colors.white,
        },
      }}
      text2Props={{
        style: {
          fontSize: 12,
          fontFamily: Fonts.Regular,
          color: Colors.white,
        },
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ height: 50, borderLeftColor: "red", backgroundColor: "red" }}
      text1Props={{
        style: {
          fontSize: 15,
          fontFamily: Fonts.Medium,
          color: Colors.white,
        },
      }}
      text1="Sorry, An error occurred!."
      text2Props={{
        style: {
          fontSize: 14,
          fontFamily: Fonts.Regular,
          color: Colors.white,
        },
      }}
    />
  ),
};
