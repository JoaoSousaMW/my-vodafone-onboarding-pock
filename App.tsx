import { useFonts } from "expo-font";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { VodafoneIcon } from "./assets";
import { Onboarding } from "./components";

export const OnboardingSteps = {
  onboardingSteps: [
    {
      type: "OneActionView",
      extraData: {
        description: "onboarding_biometrics_step_description",
        actionTitle1: "onboarding_step_forward_action_label",
        actionTitle2: "onboarding_skip_action_label",
        image: "OBadressStepImage",
      },
      title: "onboarding_biometrics_step_title",
    },
    {
      type: "OneActionView",
      extraData: {
        description: "onboarding_biometrics_step_description",
        actionTitle1: "onboarding_step_forward_action_label",
        actionTitle2: "onboarding_skip_action_label",
        image: "OBidStepImage",
      },
      title: "onboarding_biometrics_step_title",
    },
  ],
};

export default function App() {
  let [fontsLoaded] = useFonts({
    "Vodafone-Regular": require("./assets/fonts/VodafoneRg.ttf"),
    "Vodafone-Bold": require("./assets/fonts/VodafoneRg-Bold.ttf"),
    "Vodafone-Light": require("./assets/fonts/VodafoneLt.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ ...styles.row, ...styles.titleContainer }}>
        <Image
          source={VodafoneIcon}
          style={{
            width: 45,
            height: 45,
            position: "absolute",
            left: 15,
          }}
        />
        <Text style={styles.title}>My Vodafone</Text>
      </View>
      <Onboarding onBoardingStart={() => <Text>Start</Text>} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#e60000",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontFamily: "Vodafone-Regular",
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
});
