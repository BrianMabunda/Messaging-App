import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AsyncStorage } from 'AsyncStorage';

export default function Test_storage() {
    console.log("Hello")
    const [text,setText]=useState("Hello World m")

    const data={
        name:"brian",
        age:34
    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          // saving error
        }
      };

      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            setText(value);
            console.log(data)
          }
        } catch (e) {
          console.log("error")
        }
      };

    useEffect(()=>{
        storeData(data)
        console.log("Hello")
        getData()
    })

  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text_container:{
        backgroundColor:"red",
        height:200,
        width:200,
    },
    text:{
        fontSize:40,
        color:"white"
    }
})