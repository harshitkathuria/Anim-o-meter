import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footer_h1}>Made with ❤️ in India</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#2e2c2c",
    paddingVertical: 14,
    width: "100%"
  },
  footer_h1: {
    letterSpacing: 0.8,
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center"
  }
});

export default Footer;
