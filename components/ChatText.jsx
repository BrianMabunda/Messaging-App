import React, { useState } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import { AsyncStorage } from "AsyncStorage";
import { Dimensions } from "react-native-web";

const vh =Dimensions.get("window").height
const vw =Dimensions.get("window").width

function ChatText(props){
    const data=props.data;
    //const [container,setcontainer]=useState(0);
    let textWidth=vw-(vw*0.05)
    let messageHeight=30;
    if((data.text.length-39)<0)
        textWidth=((data.text.length/39)*vw)
    else
        textWidth=vw-(vw*0.2)

    messageHeight*=Math.ceil(data.text.length/39)
    messageHeight+=0.022*vh
    
    console.log(data)
    // textWidth=ta.text.lengthda
    return(
        <View style={messegaStyle(textWidth,messageHeight)}>
            <Text style={styles.textMessage} >{data.text}</Text>
            <Text style={styles.textTime} >{data.Time.split(" ")[0]}</Text>
        </View>
    );
    
}
const styles = StyleSheet.create({
    textMessage:{
        color:"black",
        fontSize:0.021*vh,
        alignSelf:"left",
        // justifyContent:"center"
    },
    textTime:{
        color:"black",
        fontSize:0.015*vh,
        alignSelf:"left",
        justifyContent:"down"
    }
});
function messegaStyle(w,h){
    var mS=StyleSheet.create({
        messageContainer:{
            display:"flex",
            flexDirection:"column",
            height:h,
            width:w,
            borderRadius:5,
            backgroundColor:"gray",
            color:"white",
            marginTop:0.01*vh,
            marginBottom:0.01*vh,
            marginLeft:0.025*vw,
            marginRight:0.025*vw,
            

        },
    });
    return mS.messageContainer
}
export default ChatText

;