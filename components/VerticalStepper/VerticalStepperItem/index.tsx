/* React and React Native */
import React from "react";
import { View, Text } from "react-native";
import theme from "../../../theme";

interface VerticalStepperItemProps {
  selected: boolean;
}

const VerticalStepperItemSelected = () => {
  return (
    <View
      style={{
        width: 200,
        marginLeft: 175,
        flexDirection: "row",
      }}
    >
      <View
        // outside circle
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: theme.colors.primary,
          borderRadius: 13,
          width: 25,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          // inside circle
          style={{
            width: 18,
            height: 18,
            backgroundColor: theme.colors.primary,
            borderRadius: 9,
          }}
        />
      </View>
      <Text
        // title
        style={{
          marginLeft: 10,
          fontSize: 18,
          letterSpacing: 0,
          fontFamily: "Vodafone-Regular",
        }}
      >
        Your address
      </Text>
    </View>
  );
};

// change selected prop to state
const VerticalStepperItem = ({ selected }: VerticalStepperItemProps) => {
  return selected ? (
    <VerticalStepperItemSelected />
  ) : (
    <View
      style={{
        backgroundColor: "#bbbbbb",
        width: 18,
        height: 18,
        borderRadius: 9,
      }}
    />
  );
};

export default VerticalStepperItem;
