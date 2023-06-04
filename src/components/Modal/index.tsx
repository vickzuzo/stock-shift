import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors, Sizes } from "@theme";

interface ModalProps {
  /**
   * boolean to indicate whether the modal should be visible or not
   * @requires boolean
   */
  isOpen: boolean;
  /**
   * function to close / dismiss the modal
   * @requires function
   */
  onClose: () => void;

  children: React.ReactNode;
}

const screen_height = Dimensions.get("window").height;

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <View style={styles.modal_overlay}>
          <View style={styles.modal_container}>{children}</View>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  modal_overlay: {
    position: "absolute",
    top: 0,
    // bottom: 0,
    left: 0,
    width: "100%",
    height: screen_height * 1.05,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  modal_container: {
    width: "90%",
    padding: Sizes.GUTTER,
    borderRadius: Sizes.FIFTEEN,
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
