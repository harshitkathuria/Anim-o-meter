import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_h1}>
        Anim<Text style={styles.header_h1_strong}>-O-</Text>meter
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 50
  },
  header_h1: {
    fontSize: 36,
    fontWeight: "700",
    color: "#313131",
    textAlign: "center"
  },
  header_h1_strong: {
    color: "#AAA"
  }
});

export default Navbar;
