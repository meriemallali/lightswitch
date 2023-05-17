import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [switched, setSwitched] = useState(false);
  function pressedButton() {
    setSwitched(!switched);
  }

  const containerStyle = switched
    ? styles.darkContainer
    : styles.lightContainer;
  const subtitleStyle = switched ? styles.darkSubtitle : styles.lightSubtitle;
  const statusBarStyle = switched ? "light-content" : "dark-content";
  return (
    <View style={[styles.container, containerStyle]}>
      <StatusBar style={statusBarStyle} />

      <TouchableOpacity
        style={styles.lightswitch}
        onPress={pressedButton}
      ></TouchableOpacity>

      <Text style={[styles.subtitle, subtitleStyle]}>
        {switched == true
          ? "It's dark!"
          : "Toggle the lights with the switch above"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightswitch: {
    width: 70,
    height: 130,
    backgroundColor: "gray",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
  },
  subtitle: {
    marginTop: 30,
    fontWeight: "bold",
  },
  darkContainer: {
    backgroundColor: "#242424",
  },
  lightContainer: {
    backgroundColor: "white",
  },
  darkSubtitle: {
    color: "yellow",
  },
});
