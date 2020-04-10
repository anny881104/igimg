import React from "react";
import {  StyleSheet,View, FlatList, TouchableOpacity,Image } from "react-native";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";
import homeData from "../json/home.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <View style={styles.headerStyle}>
        <Image source={{url: homeData.HomePage.HeaderLeftUrl}} style={styles.headerLeft}/>
        <Image source={{url: homeData.HomePage.HeaderMid}} style={styles.headermid}/>
        <TouchableOpacity
          onPress={() => navigation.push('DetailScreen')}>
          <Image source={{url: homeData.HomePage.HeaderRightUrl}}
          style={styles.headerRight}/>
        </TouchableOpacity>
      </View>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
        navigation={navigation}
      />}
      keyExtractor={item => item.title}
      />

      <View style={styles.bottomStyle}> 
        <Image  source={{uri: homeData.HomePage.b1}} style={styles.b1}/>
        <Image  source={{uri: homeData.HomePage.b2}} style={styles.b2}/>
        <Image  source={{uri: homeData.HomePage.b3}} style={styles.b3}/>
        <Image  source={{uri: homeData.HomePage.b4}} style={styles.b4}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerLeft:{
      width: 36,
      height: 30
    },
    headermid:{
      width: 110,
      height: 35
    },
    headerRight:{
      width: 30,
      height: 28
    },
  b1:{
      width: 23,
      height: 24,
     
    },
  b2:{
      width: 27,
      height: 28,
    },
    b3:{
      width: 27,
      height: 25,
    },
    b4:{
      width: 35,
      height: 35,
    },
  headerStyle:{
    justifyContent:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:'#fafafa',
    marginLeft:12,
    marginRight:12,
    height:50,
  },

  bottomStyle:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    height:60,
    backgroundColor:'#fafafa',
    marginLeft:25,
    marginRight:25,
  }
 
});
export default AlbumScreen;
