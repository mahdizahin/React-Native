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
         <Icon name="favorite-border" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity> 

      <View style ={styles.unreadBadge}>
        <Text style={styles.unreadBadgeText}>19</Text>
      </View>
      
         <Icon name="chat" size={30} color="white" />
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

    },
    unreadBadge:{
      backgroundColor:'#FF3250',
      position: 'absolute',
      left:20,
      bottom:18,
      width:25,
      height:18,
      borderRadius:25,
      alignItems:'center',
      justifyContent:'center',
      zIndex:100,
    },
    unreadBadgeText:{
      color:'white',
      fontWeight:'600',
    }

})

export default Header