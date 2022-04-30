/* React and React Native */
import React from "react";
import { View, Text } from "react-native";
import theme from "../../theme";
import VerticalStepperItem from "./VerticalStepperItem";

interface VerticalLineProps {
  height: number;
}

interface VerticalStepperProps {
  amount: number;
  selectedIndex: number;
  onBoardingStart: React.ReactNode;
}

const VerticalLine = ({ height }: VerticalLineProps) => {
  return (
    <View
      style={{
        width: 1,
        height: height,
        backgroundColor: theme.colors.primary,
      }}
    />
  );
};

const VerticalStepper = ({
  amount,
  selectedIndex,
  onBoardingStart,
}: VerticalStepperProps) => {
  const [vheight, setHeight] = React.useState(20);

  return (
    <>
      {selectedIndex === -1 && onBoardingStart}
      {Array(amount)
        .fill(0)
        .map((_, index) => {
          console.log(selectedIndex, index);

          return (
            <View style={{ width: 30, alignItems: "center" }}>
              <VerticalStepperItem
                selected={index === selectedIndex}
                key={index}
              />
              {index !== amount - 1 ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <VerticalLine height={vheight} />
                  <View
                    style={{
                      position: "absolute",
                      left: 25,
                      paddingBottom: 15,
                    }}
                    onLayout={(event) => {
                      const { height } = event.nativeEvent.layout;
                      setHeight(height);
                    }}
                  >
                    {selectedIndex === index && (
                      <>
                        <Text>Teste</Text>
                        <Text>Teste</Text>
                      </>
                    )}
                  </View>
                </View>
              ) : (
                selectedIndex === index && (
                  <View
                    style={{
                      width: 185,
                      marginTop: 50,
                      marginLeft: 230,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Vodafone-Regular",
                        fontSize: 28,
                        letterSpacing: 0,
                      }}
                    >
                      Congratulations!
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Vodafone-Regular",
                        fontSize: 22,
                        letterSpacing: 0,
                      }}
                    >
                      It's all set and ready to go.
                    </Text>
                  </View>
                )
              )}
            </View>
          );
        })}
    </>
  );
};

export default VerticalStepper;
