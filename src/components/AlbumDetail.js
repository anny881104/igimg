import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from "react-native";

const AlbumDetail = ({ album, navigation }) => {
   return (
      <View style={styles.card}>
        <View style={[styles.thumbnailContainerStyle, styles.titlecard]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.title}>
            <Text>{album.title}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: album.image
              }}
            />
        </View>

        <View style={styles.textcard}>
          <Text>{album.like}</Text>
          <View style={styles.saycard}>
            <Text style={styles.article} >{album.title}</Text>
            <Text >{album.say}</Text>
          </View>
          <Text style={styles.comments}>{album.comments}</Text>
        </View>   
      </View>
  )};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  title: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  titlecard: {
    paddingLeft:10,
    marginBottom:10,
    backgroundColor: "#fff",
    height:55,
  },
  textcard:{
    justifyContent: "center",
    height:120,
    marginLeft:10,
  },
  saycard:{
    flexDirection: "row",
    marginTop:10,
    marginBottom:10,
  },
  article:{
    paddingRight:5,
  },
  comments:{
    color: "#A5A5A5",
  },
  imageStyle: {
    height: 414,
    width: null
  }
});

export default AlbumDetail;
