import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import homeData from "../json/home.json";

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
        <View >
            <Image
              style={styles.imageStyle}source={{uri: album.image}}
            />
        </View>

        <View style={styles.iconStyle}> 
        <Image  source={{uri: homeData.iconPage.i1}} style={styles.i1}/>
        <Image  source={{uri: homeData.iconPage.i2}} style={styles.i2}/>
        <Image  source={{uri: homeData.iconPage.i3}} style={styles.i3}/>
        <Image  source={{uri: homeData.iconPage.i4}} style={styles.i4}/>
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
    marginLeft:15,
  },
  saycard:{
    flexDirection: "row",
    marginTop:10,
    marginBottom:15,
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
  },
  iconStyle:{
    alignItems:"center",
    flexDirection:"row",
    marginTop:15,
    height:30,
  },
  i1:{
    marginLeft:15,
    width: 27,
    height: 25,
  },
  i2:{
    marginLeft:15,
    width: 27,
    height: 26,
  },
  i3:{
    marginLeft:15,
    width: 30,
    height: 27,
  },
  i4:{
    marginLeft:245,
    width: 25,
    height: 29,
  }

});

export default AlbumDetail;
