import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { colors } from "./src/utils/themes";
import { Focus } from "./src/features/focus";
import { Timer } from "./src/features/timer";
import { FocusHistory } from "./src/features/focusHistory";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            clearSubject={() => setCurrentSubject(null)}
            onTimerEnd={(subject) => {
              if (!history.includes(subject)) setHistory([subject, ...history]);
            }}
          />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primary,
  },
});
