import React from "react";
import { View, StyleSheet, Text } from "react-native";

const StylingExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Background color for container
  },
  box: {
    width: 150, // Size for the box
    height: 150,
    backgroundColor: "lightgreen", // Box color
    margin: 10, // Margin for spacing
    borderRadius: 10, // Rounded corners
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    shadowColor: "#000", // Shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Shadow for Android
  },
  text: {
    fontSize: 18,
    color: "white", // White text color
    fontWeight: "bold", // Bold text
  },
});

export default StylingExample;