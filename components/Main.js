import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
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

  const updateType = pick => {
    setType(pick);
  };

  return (
    <View style={styles.container}>
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
            color: "#0969da",
            textAlign: "center",
            color: "#fff"
          }}
        >
          Search
        </Text>
      </TouchableOpacity>
      {loading ? <Spinner /> : <List list={list} type={previousType.current} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 10,
    marginBottom: 15
  }
});
