import React from 'react';
import {  StyleSheet,View, TouchableOpacity,Image,Text,ScrollView } from 'react-native';
import homeData from "../json/home.json";

const DetailScreen = ({navigation}) => {
  return(
        
  <View style={{flex:1,backgroundColor:"#fff"}}>
    <View style={styles.topbar}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}>
          <Image source={{uri: homeData.DetailPage.HeaderLeftUrl}}style={styles.headerLeft}/>
      </TouchableOpacity>
          <Text style={styles.midtextstyle}>CHARLIE_BROWN</Text>
          <Image source={{uri: homeData.DetailPage.HeaderRightUrl}}style={styles.headerRight}/>       
    </View>

    <ScrollView>
      <View style={styles.peoplelist}>
        <View style={styles.peoplecard}>
          <Image source={{uri: homeData.peopleList1.peo}}style={styles.peo}/>
            <View style={styles.word}>
              <Text style={styles.name}>{homeData.peopleList1.name}</Text>
              <Text style={styles.chat}>{homeData.peopleList1.chat}</Text>
            </View>
              <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
        </View>

      <View style={styles.peoplecard}>
          <Image source={{uri: homeData.peopleList2.peo}}style={styles.peo}/>
            <View style={styles.word}>
              <Text style={styles.name}>{homeData.peopleList2.name}</Text>
              <Text style={styles.chat}>{homeData.peopleList2.chat}</Text>
            </View>
              <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
            </View>

      <View style={styles.peoplecard}>
          <Image source={{uri: homeData.peopleList3.peo}}style={styles.peo}/>
            <View style={styles.word}>
              <Text style={styles.name}>{homeData.peopleList3.name}</Text>
              <Text style={styles.chat}>{homeData.peopleList3.chat}</Text>
            </View>
              <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
            </View>

      <View style={styles.peoplecard}>
          <Image source={{uri: homeData.peopleList4.peo}}style={styles.peo}/>
            <View style={styles.word}>
              <Text style={styles.name}>{homeData.peopleList4.name}</Text>
              <Text style={styles.chat}>{homeData.peopleList4.chat}</Text>
            </View>
              <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
      </View>

      <View style={styles.peoplecard}>
        <Image source={{uri: homeData.peopleList5.peo}}style={styles.peo}/>
          <View style={styles.word}>
            <Text style={styles.name}>{homeData.peopleList5.name}</Text>
            <Text style={styles.chat}>{homeData.peopleList5.chat}</Text>
          </View>
            <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
      </View>

      <View style={styles.peoplecard}>
        <Image source={{uri: homeData.peopleList6.peo}}style={styles.peo}/>
            <View style={styles.word}>
              <Text style={styles.name}>{homeData.peopleList6.name}</Text>
              <Text style={styles.chat}>{homeData.peopleList6.chat}</Text>
            </View>
              <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}style={styles.camera}/>
      </View>

      </View>
   </ScrollView>      
   </View>
       );
   };

   const styles = StyleSheet.create({
  
      headerLeft:{
        width: 12,
        height: 21,
        marginLeft:20,
        marginRight:120
      },
      headerRight:{
        width: 14,
        height: 3,
        marginLeft:105
      },
      topbar:{
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"flex-start",
      height:70,
      backgroundColor:'#fafafa',
    },
    peoplelist:{
      flexDirection:"column",
      marginLeft:15
    },
    peoplecard:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:25,
    },
    
    peo:{
      width: 65,
      height: 65
    },
    word:{
      flexDirection:"column",
      width:275
    },
    name:{
      fontSize:15,
      color:"#202020",
      marginLeft:15
    },
    chat:{
      fontSize:15,
      color:"#888888",
      marginLeft:15
    },
    camera:{
      width: 36,
      height: 30,
      marginRight:20
    },
});
export default DetailScreen;
