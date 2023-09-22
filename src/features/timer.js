import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { Countdown } from "../components/countdown";
import { RoundedButton } from "../components/roundedButton";
import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/themes";
import { ProgressBar, Appbar } from "react-native-paper";
import { Timing } from "./timing";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const ONE_SECOND_IN_MS = 250;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  useEffect(() => {
    if (progress === 0) {
      Vibration.vibrate(PATTERN);
      setIsStarted(false);
      setProgress(1);
      onTimerEnd(focusSubject);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <Appbar.BackAction color={colors.details} onPress={clearSubject} />
      <View style={styles.countdown}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
          <View style={{ paddingTop: spacing.sm }}>
            <ProgressBar
              progress={progress}
              color={colors.secondary}
              style={{ backgroundColor: colors.details }}
            />
          </View>
        </View>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="START"
            size={spacing.xxxl}
            onPress={() => setIsStarted(true)}
          />
        )}

        {isStarted && (
          <RoundedButton
            title="PAUSE"
            size={spacing.xxxl}
            onPress={() => setIsStarted(false)}
          />
        )}
        <View style={{ paddingLeft: spacing.sm, paddingTop: spacing.xxxl }}>
          <RoundedButton
            title="CLEAR"
            size={spacing.xxl}
            onPress={clearSubject}
          />
        </View>
      </View>
      <View style={styles.timerWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    padding: spacing.sm,
    paddingLeft: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.details,
    fontSize: fontSizes.lg,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: colors.secondary,
    padding: spacing.sm,
    fontWeight: "bold",
    fontSize: fontSizes.xl,
    textAlign: "center",
    backgroundColor: colors.details,
    shadowColor: colors.details,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6.65,
    elevation: 9,
  },
  textWrapper: {
    paddingBottom: spacing.lg,
  },
  timerWrapper: {
    flex: 0.1,
    paddingLeft: spacing.xl,
    paddingBottom: spacing.xxl,
  },
});
