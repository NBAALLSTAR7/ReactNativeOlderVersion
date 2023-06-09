import {useState,React} from 'react'
import { View,SafeAreaView,FlatlistTex,Text, FlatList, } from 'react-native'
import {COLORS,NFTData} from "../constants"
import {NFTCard,HomeHeader,FocusedStatusBar} from "../components";


import { StatusBar } from "react-native";

const Home = () => {
  const [nftData,setNftData]=useState(NFTData);
  const handleSearch=(value)=>{
    if(!value.length) return setNftData(NFTData);
    const filterData=NFTData.filter((item)=>
    item.name.toLowerCase().includes(value.toLowerCase())
    );
    if(filterData.length){
      setNftData(filterData);
    }else{
      setNftData(NFTData);
    }
  }
  return (
    <SafeAreaView
    style={{flex:1}}>
    
   
   <FocusedStatusBar background={COLORS.primary}/>
   <View style={{flex:1}}
   >
   <StatusBar hidden />
   <View style={{zIndex:0}}>
   <FlatList data={nftData} renderItem={({item})=><NFTCard data={item}/>}
  keyExtractor={(item)=>item.id}
  showsVerticalScrollIndicator={false}
  ListHeaderComponent={<HomeHeader handleSearch={handleSearch}/>}

   />

   </View>
   <View
  
style={{
position:"absolute",
top:0,
bottom:0,
right:0,
left:0,
zIndex:-1,

}}   
>
<View  style={{height:300,backgroundColor:COLORS.primary}} />
<View  style={{flex:1,backgroundColor:COLORS.white}} />

   </View>

   </View>
  
    
 


    </SafeAreaView>
  )
}

export default Home
