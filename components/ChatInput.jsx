import React, { useState } from 'react';
import { Button, StyleSheet, TextInput,TextInputBase,Image,TouchableOpacity,View } from 'react-native';
import MessageArea from './MessageArea';
import store from '../reducers/store';
import { Dimensions } from "react-native-web";

const vh =Dimensions.get("window").height
const vw =Dimensions.get("window").width
var ip="localhost"

var toBeSent={
    key:0,
    time:"09:20 Tuesday 17 May 2022",
    text:"",
    user:false,
}
const data1={
    //name:"Brian",
    chatStatus:"Sent",
    time:"08:00 Monday 25 May 2022",
    text:"Quos ducimus cum fdgdfgdfgdfgdfg ",
    user:true,
}
const apiCall =async (data)=>{
    fetch(`http://${ip}:5000/sendText`,{method:"Post",headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
    store.dispatch({"type":"refresh"});
    store.dispatch({"type":"Done"});
}
function ChatInput(props) {
    //variable for storing text
    const [chatText,setChatText]=useState("");
    //Variable for input container
    const [text,setText]=useState(styles.textSmall)
    

  // Call this function to trigger a re-render
 
    //clears the text input after the button is pressed
   
    return (
        <View style={styles.ChatInputContainer}>
            <TextInput 



                       scrollEnabled={true}
                       autoFocus
                       multiline
                       value={chatText}
                       onChangeText={(text)=>{
                           //Get Text From TextInput element
                           setChatText(text)
                           if(text.length>39)
                                setText(styles.textBig);
                            else
                            setText(styles.textSmall);

                        }} 
                       style={text} />
                <TouchableOpacity style={styles.submit}
                                  onPress={()=>{
                                        //Send the data to the server and save state to display on the 
                                        //console.log(chatText);
                                        setChatText("");
                                        setText(styles.textSmall);
                                        toBeSent.text=chatText;
                                        if(chatText.length>1){

                                            apiCall(toBeSent);
                    
                                        }
                                        store.dispatch({"type":"Send","payload":toBeSent})

                                        console.log(store.getState().sent);
                                  }}>
                    <Image style={styles.submitPic} source={require("../assets/send.svg")} />
                </TouchableOpacity>
        </View>
    );
}
const styles =StyleSheet.create({
    submitPic:{
        height:0.04*vh,
        width:0.04*vh,
        backgroundColor:"darkgreen",
        borderRadius:50
    },
    ChatInputContainer:{
        flexDirection:"row",
        display:"flex",
        position:'relative',
        backgroundColor:"silver",
        borderRadius:50,
        width:vw*1,
        // marginLeft:vw*0.05
        
         
    },
    textSmall:{
        borderColor:"None",
        fontSize:0.021*vh,
        borderWidth:0,
        width:vw*0.8,
        height:vh*0.07,
        marginLeft:vw*0.10
    },
    textBig:{
        // borderColor:"gray",
        fontSize:0.021*vh,
        width:vw*0.8,
        height:vh*0.1,
        marginLeft:vw*0.1
    },
  
    submit:{
        height:5,
        width:5,
        alignSelf:"center",
        justifyContent:"center"
    }
})

export default ChatInput;