import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const TypePicker = ({ updateType }) => {
  const [selectedValue, setSelectedValue] = useState("Anime");
  const onChange = value => {
    setSelectedValue(value);
    updateType(value);
  };
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 50,
          width: "100%",
          marginTop: -5
        }}
        onValueChange={onChange}
      >
        <Picker.Item label="Anime" value="anime" />
        <Picker.Item label="Manga" value="manga" />
        <Picker.Item label="Clubs" value="clubs" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    padding: 1
  }
});

export default TypePicker;
