import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/themes";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={styles.container}>
        <View style={styles.historyBlock}>
          <Text style={styles.item}>
            We haven't completely focused on anything yet...
          </Text>
        </View>
      </View>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>-{item}</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.historyBlock}>
        <Text style={styles.title}>Things we've complete focused on: </Text>
        <FlatList data={history} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: spacing.lg,
    paddingRight: spacing.lg,
    flex: 1,
  },
  historyBlock: {
    borderRadius: 4,
    padding: spacing.sm,
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
  title: {
    color: colors.details,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
  item: {
    paddingLeft: spacing.sm,
    color: colors.details,
    fontSize: fontSizes.md,
    fontWeight: "bold",
  },
});
