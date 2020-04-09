import React from "react";
import {  StyleSheet,View, FlatList, TouchableOpacity,Image } from "react-native";
import Header from "../components/Header";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";
import homeData from "../json/home.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
      <View>
        <Image source={{url: homeData.HomePage.HeaderLeftUrl}} style={styles.headerLeft}/>
        <Image source={{url: homeData.HomePage.HeaderMid}} style={styles.headermid}/>
        <TouchableOpacity
          onPress={() => navigation.push('DetailScreen')}>
          <Image source={{url: homeData.HomePage.HeaderRightUrl}}style={styles.headerRight}/>
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
      marginTop:30,
      marginLeft:15,
      width: 28,
      height: 28
    },
    headermid:{
      marginTop:30,
      width: 110,
      height: 35
    },
    headerRight:{
      marginTop:30,
      marginRight:15,
      marginBottom:20,
      width: 28,
      height: 28
    },
    headerContentStyle:{
      flexDirection:"row",
      justifyContent:"flex-start",
      justifyContent:"space-between",
      width:null,
      height:70,
      backgroundColor:'#fafafa',
      marginTop:30,
      elevation:4
  },
  b1:{
      width: 42,
      height: 42,
      marginLeft:15
    },
  b2:{
      width: 32,
      height: 32,
    },
    b3:{
      width: 32,
      height: 32,
    },
    b4:{
      width: 32,
      height: 32,
      marginRight:15
    },
  bottomStyle:{
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"flex-start",
    justifyContent:"space-between",
    height:65,
    backgroundColor:'#fafafa',
  }
});
export default AlbumScreen;
