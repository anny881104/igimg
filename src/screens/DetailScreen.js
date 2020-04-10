import React from 'react';
import {  StyleSheet,View, TouchableOpacity,Image } from 'react-native';
import homeData from "../json/home.json";

const DetailScreen = ({navigation}) => {
  return(
        
    <View style={{flex:1,backgroundColor:"#fff"}}>
               <View style={styles.headerContentStyle}>
                   <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                       <Image source={{uri: homeData.HomePage.HeaderLeftUrl}}
                               style={styles.headerLeft}/>
                   </TouchableOpacity>
               </View>
              
               
           </View>
           
          
       );
   };

   const styles = StyleSheet.create({
  
      headerLeft:{
        marginTop:20,
        marginRight: 0,
        marginLeft:15,
        width: 40,
        height: 40
      },
      headerContentStyle:{
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"flex-start",
      justifyContent:"space-between",
      width:null,
      height:70,
      backgroundColor:'#fafafa',
      marginTop:25,
      elevation:4
    },
   
});
export default DetailScreen;
