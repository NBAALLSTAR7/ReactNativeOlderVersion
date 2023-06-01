import { View, Text,Image,TextInput } from 'react-native'
import {COLORS,FONTS,SIZES,assets} from "../constants";
import React from 'react'
console.log(assets.logo)

const HomeHeader = ({handleSearch}) => {
  console.log(assets.badge)
  return (
    <View
    style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font
    }}
    >
    <View
    style={{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    }}
    >
    <Image
      source={assets.logo}
      resizeMode='contain'
      style={{width:90,height:55}}
    />
    <View style={{width:45,height:45}}>
    <Image 
    source={assets.person02}
    resizeMode='contain'
    style={{width:"100%",height:"100%"}}


    />
  <Image 
    source={assets.badge}
    resizeMode='contain'
    style={{position:"absolute",width:15,height:15,
    bottom:0,right:0
    }}


    />

    </View>

      
    </View>
    <View 
    style={{marginVertical:SIZES.font}}
    >
    <Text
    style={{fontFamily:FONTS.regular,fontSize:SIZES.small,
    color:COLORS.white
    }}
    >
    Hello, Victoria

    </Text>
    <Text
    style={{fontFamily:FONTS.bold,fontSize:SIZES.large,color:COLORS.white
    ,marginTop:SIZES.base/2
    }}
    >
   Let's find a masterpiece

    </Text>

    </View>
    <View
    style={{marginTop:SIZES.font}}
    >
    <View style={{marginTop:SIZES.font,
    backgroundColor:COLORS.gray,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:SIZES.font,
    paddingVertical:SIZES.small
    }}>
      <Image
      source={assets.search}
      resizeMode='contain'
      style={{width:20,height:20,marginRight:SIZES.base}}

      />
      <TextInput
      placeholder='Search NFTS'
      style={{flex:1}}
      onChangeText={handleSearch}

      />
    </View>

    </View>
     
    </View>
  )
}

export default HomeHeader