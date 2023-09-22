import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/themes";
import { fontSizes, spacing } from "../utils/sizes";
import { RoundedButton } from "../components/roundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          activeUnderlineColor={colors.details}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.buttonWrapper}>
          <RoundedButton
            title="+"
            size={spacing.xxl}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "center",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.md,
    backgroundColor: colors.secondary,
    shadowColor: colors.details,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6.65,
    elevation: 9,
  },
  buttonWrapper: {
    justifyContent: "center",
  },
});
