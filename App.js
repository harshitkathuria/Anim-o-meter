import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions
} from "react-native";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Main />
      <Footer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
