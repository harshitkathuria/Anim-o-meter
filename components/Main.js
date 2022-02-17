import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";
import { useState, useRef } from "react";
import React from "react";
import List from "./List";
import TypePicker from "./TypePicker";
import Spinner from "./Spinner";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [type, setType] = useState("anime");
  const previousType = useRef("anime");

  const fetchList = async () => {
    setLoading(true);
    const res = await (
      await fetch(
        `https://api.jikan.moe/v4/${previousType.current}?q=${search}&order_by=popularity&sort=asc&limit=10`
      )
    ).json();
    setList(res.data);
    setLoading(false);
  };

  const handleSubmit = () => {
    previousType.current = type;
    fetchList();
  };

  const handleClear = () => {
    setList([]);
  };

  const updateType = pick => {
    setType(pick);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={search}
        onChangeText={text => setSearch(text)}
        style={styles.input}
        placeholder="Search"
      />
      <TypePicker updateType={updateType} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          style={{
            ...styles.subheading,
            marginBottom: 7,
            textAlign: "center",
            color: "#fff"
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: "#c4c4c4",
          marginBottom: 15
        }}
        onPress={handleClear}
      >
        <Text
          style={{
            ...styles.subheading,
            marginBottom: 7,
            textAlign: "center",
            color: "#000"
          }}
        >
          Clear
        </Text>
      </TouchableOpacity>
      {loading ? <Spinner /> : <List list={list} type={previousType.current} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center"
  },
  input: {
    width: "100%",
    margin: 12,
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 45
  },
  button: {
    backgroundColor: "#2e2c2c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    width: "100%",
    borderRadius: 10
  }
});
