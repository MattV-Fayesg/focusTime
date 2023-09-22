import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/roundedButton";
import { spacing } from "../utils/sizes";

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <View style={styles.timingButton}>
        <RoundedButton
          title="5 min"
          size={spacing.xxxl}
          onPress={() => onChangeTime(5)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="10 min"
          size={spacing.xxxl}
          onPress={() => onChangeTime(10)}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          title="15 min"
          size={spacing.xxxl}
          onPress={() => onChangeTime(15)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
    padding: spacing.sm,
    flexDirection: "row",
  },
});
