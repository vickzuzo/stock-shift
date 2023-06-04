import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Modal } from "@components/Modal";
import { BaseNavigator, Fonts } from "@interfaces";
import { BaseButton } from "@components/Button";
import { BaseInput } from "@components/Input";
import { Colors, Sizes } from "@theme";
import { BaseText } from "@components/BaseText";
import { useCheckout } from "@network/hooks/useCheckout";

interface Iprops {
  onClose: () => void;
  isOpen: boolean;
  navigation: BaseNavigator;
  data: {
    totalItems: number;
    totalPrice: string;
  };
}

export const CheckoutDetailsModal = ({
  isOpen,
  onClose,
  navigation,
  data,
}: Iprops) => {
  const {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    isLoading,
  } = useCheckout({ navigation, onClose });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <BaseText
        style={{ textAlign: "center", textTransform: "uppercase" }}
        font={Fonts.Bold}
      >
        Checking out {data?.totalItems} items.
      </BaseText>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BaseInput
          label="Delivery Address"
          placeholder="Please provide a delivery destination"
          wrapperStyle={{ borderColor: Colors.dark_grey }}
          placeholderColor={Colors.dark_grey}
          inputStyle={{ color: Colors.black }}
          labelStyle={{ color: Colors.black }}
          value={values.deliveryDestination}
          onChangeText={handleChange("deliveryDestination")}
          error={errors.deliveryDestination}
          onBlur={handleBlur("deliveryDestination")}
        />
        <BaseInput
          label="Cardholder Name"
          placeholder=""
          wrapperStyle={{ borderColor: Colors.dark_grey }}
          placeholderColor={Colors.dark_grey}
          inputStyle={{ color: Colors.black }}
          labelStyle={{ color: Colors.black }}
          value={values.cardHolder}
          onChangeText={handleChange("cardHolder")}
          error={errors.cardHolder}
          onBlur={handleBlur("cardHolder")}
          keyboardType="default"
        />
        <BaseInput
          label="Card Number"
          placeholder="0000 0000 0000 0000"
          wrapperStyle={{ borderColor: Colors.dark_grey }}
          placeholderColor={Colors.dark_grey}
          inputStyle={{ color: Colors.black }}
          labelStyle={{ color: Colors.black }}
          value={values.cardNumber}
          onChangeText={handleChange("cardNumber")}
          error={errors.cardNumber}
          onBlur={handleBlur("cardNumber")}
          keyboardType="number-pad"
        />
        <BaseInput
          label="Card Expiry"
          placeholder="mm/yyyy"
          wrapperStyle={{ borderColor: Colors.dark_grey }}
          placeholderColor={Colors.dark_grey}
          inputStyle={{ color: Colors.black }}
          labelStyle={{ color: Colors.black }}
          value={values.cardExpiry}
          onChangeText={handleChange("cardExpiry")}
          error={errors.cardExpiry}
          onBlur={handleBlur("cardExpiry")}
          keyboardType="numbers-and-punctuation"
        />
        <BaseInput
          label="Card CVV"
          placeholder="428"
          wrapperStyle={{ borderColor: Colors.dark_grey }}
          placeholderColor={Colors.dark_grey}
          inputStyle={{ color: Colors.black }}
          labelStyle={{ color: Colors.black }}
          keyboardType="number-pad"
          value={values.cardCvv}
          onChangeText={handleChange("cardCvv")}
          error={errors.cardCvv}
          onBlur={handleBlur("cardCvv")}
        />
      </ScrollView>
      <BaseButton
        onPress={() => {
          handleSubmit();
        }}
        isLoading={isLoading}
      >
        Proceed
      </BaseButton>
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={onClose}
        style={{
          marginVertical: Sizes.FIFTEEN,
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <BaseText style={{ color: Colors.red }}>CANCEL</BaseText>
      </TouchableOpacity>
    </Modal>
  );
};
