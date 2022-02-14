import {
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Alert,
  FlatList,
  StyleSheet,
  View
} from "react-native";
import React from "react";

const List = ({ list, type }) => {
  const openAbout = async url => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Cannot open the url");
    }
  };

  const anime = item => {
    return (
      <View>
        <Text>
          <Text style={styles.subheading}>Duration: </Text>
          {item.duration}
        </Text>
        <Text>
          <Text style={styles.subheading}>Episodes: </Text>
          {item.episodes | 0}
        </Text>
        <Text>
          <Text style={styles.subheading}>Source: </Text>
          {item.source}
        </Text>
        {item.studios.length > 0 && (
          <Text>
            <Text style={styles.subheading}>Studios: </Text>
            {item.studios.map((studio, index) => (
              <Text key={index}>{studio.name} </Text>
            ))}
          </Text>
        )}
      </View>
    );
  };

  const manga = item => {
    return (
      <View>
        <Text>
          <Text style={styles.subheading}>Status: </Text>
          {item.status}
        </Text>
        <Text>
          <Text style={styles.subheading}>Chapters: </Text>
          {item.chapters | 0}
        </Text>
        <Text>
          <Text style={styles.subheading}>Members: </Text>
          {item.members}
        </Text>
        {item.authors.length > 0 && (
          <Text>
            <Text style={styles.subheading}>Authors: </Text>
            {item.authors.map((author, index) => (
              <Text key={index}>{author.name} </Text>
            ))}
          </Text>
        )}
      </View>
    );
  };

  const clubs = item => {
    return (
      <View>
        <Text>
          <Text style={styles.subheading}>Created: </Text>
          {item.created}
        </Text>
        <Text>
          <Text style={styles.subheading}>Category: </Text>
          {item.category}
        </Text>
        <Text>
          <Text style={styles.subheading}>Members: </Text>
          {item.members}
        </Text>
        <Text>
          <Text style={styles.subheading}>Access: </Text>
          {item.access}
        </Text>
      </View>
    );
  };

  const details = item => {
    if (type == "anime") return anime(item);
    else if (type == "manga") return manga(item);
    else if (type == "clubs") return clubs(item);
  };

  const Item = ({ item }) => {
    return (
      <View style={styles.itemStyle}>
        <Image
          source={{ uri: item.images.jpg.image_url }}
          style={{ width: 100, height: "auto", margin: 5, marginRight: 10 }}
        />
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={styles.heading}>
            {item.title ? item.title : item.name}
          </Text>
          <TouchableOpacity onPress={() => openAbout(item.url)}>
            <Text
              style={{
                ...styles.subheading,
                marginBottom: 7,
                color: "#0969da"
              }}
            >
              About
            </Text>
          </TouchableOpacity>
          {details(item)}
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.listStyle}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.mal_id}
      renderItem={Item}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    width: "100%"
  },
  itemStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ede8e8",
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 10
  },
  heading: {
    fontWeight: "bold",
    fontSize: 17
  },
  subheading: {
    fontWeight: "700"
  }
});

export default List;
