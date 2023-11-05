import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'


const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity> 
      <Image 
      style ={styles.logo} 
      source = {require('../../assets/logo.png')}
      />
      </TouchableOpacity>

    <View style={styles.iconContainer}>
    <TouchableOpacity> 
         <Icon name="add-circle-outline" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity> 
         <Icon name="add-circle-outline" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity> 
         <Icon name="add-circle-outline" size={30} color="white" />
    </TouchableOpacity>
        
        
    </View>

    </View>

  
  )
}

const styles= StyleSheet.create({

    container :{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
        marginHorizontal:20,
    },

    iconContainer:{
        flexDirection:'row'
    },

    logo:{
        width:100,
        height:50,
        resizeMode: 'contain'
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode: 'contain'

    }

})

export default Header