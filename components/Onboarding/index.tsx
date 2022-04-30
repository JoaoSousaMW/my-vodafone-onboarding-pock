/* React and React Native */
import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import VerticalStepper from "../VerticalStepper";

interface OnboardingProps {
  onBoardingStart: React.ReactNode;
  content?: [];
}

const Onboarding = ({ onBoardingStart, content }: OnboardingProps) => {
  return (
    <View>
      <ScrollView style={styles.background}>
        <>
          <VerticalStepper
            amount={6}
            selectedIndex={2}
            onBoardingStart={onBoardingStart}
          />
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 15,
    paddingTop: 20,
    paddingLeft: 20,
  },
});

export default Onboarding;
