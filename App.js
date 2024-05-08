import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View, ViewComponent, AppRegistry } from 'react-native';
//import pic from './assets/favicon.png'
import {Header,num} from './components/Header';
import Message from './components/Message';
import StatusArea from './components/StatusArea';
import MessageArea from './components/MessageArea';
import { Provider } from 'react-redux';
import store from './reducers/store';
import ChatText from './components/ChatText';
import Test_storage from './components/Test_storage';
// import StatusView from './components/StatusView';
// import StatusCreate from './components/StatusCreate';

import {A} from 'expo'
import {name as appName} from './app.json'
function SpecialButton(name){
  let n=name;
  let x=0;
  return (
    
    <View style={styles.container}>
    <Text>{name}</Text>
    <Button title={name} onPress={()=>{x=x+1;
      alert(x);}}/>
      </View>
  );
}
/* 
  1)Add a API for checking if  the database changed
  2)Add a scrollabe view to display contacts
  3)Make each user available for chat initiation
  4)Add a ofline feature by downloading data from the server to the device

*/
export default function App() {
  // AppRegistry.registerComponent(appName,()=>App);
  const [state,setState]=useState(1);
  const [bstate,setBstate]=useState(0);
  const [reFresh,setReFresh]=useState(0);
  const [, forceUpdate] = useState(0); // State not used directly
    const handleUpdate = () => {
        forceUpdate(n => !n); // Toggling state value will re-render the component
      };
  setInterval(()=>{
    //console.log(store.getState().State)
    setState(store.getState().State);
    setBstate(store.getState().bState);
    setReFresh(store.getState().refresh)
    if(reFresh==1){
      let itt=0
      if(itt<2){
        handleUpdate()
      }
      else{
        store.dispatch({"type":"Done"});
      }
      itt++
      
    }
  },200)
  var x=0;
  return (
    <Provider store={store}>

    <View style={styles.container}>
      {/* {(state===0)?<Header />:(state===1)?<MessageArea />:(state===2)?<StatusView />:(state===3)?<StatusCreate />:<View />} */}
      {/* {(state===0)?<Header />:(state===1)?<MessageArea />:<View />} */}
      {/* {<MessageArea/>} */}
      {/* {(state===0)?(bstate===0)?<Message />:<View/>:<View />*/}
      {/* {(state===0)?(bstate===0)?<Message />:<View/>:<View />}  */}
      {/* {<ChatText/>} */}
    </View>
    </Provider>

  );
  }
  
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'lightgray',
    position:"relative",
    flexDirection:"column",
    alignItems:"center",
    height:"100%",
    display:'flex',
  },
 
});
