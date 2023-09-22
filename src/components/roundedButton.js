import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/themes";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]} numberOfLines={1}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 3,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    color: colors.details,
    fontSize: size / 4,
    fontWeight: "bold",
    flexWrap: "nowrap",
  },
});
