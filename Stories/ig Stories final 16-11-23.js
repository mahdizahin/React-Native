import { View, Text,ScrollView,Image,StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={{marginBottom:13}} >

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        
            {USERS.map((story,index)=>(  

              <View key={index}> 
                <Image source={{ uri: story.image}}
                style={styles.story}/>

                <Text style={{textAlign:'center', color:'white'}} > {
                story.user.length>10 ? story.user.slice(0,10).toLocaleLowerCase()+'..'
              : story.user.toLocaleLowerCase()}</Text>
              </View>
            ))}
         
        </ScrollView>

      <Text style={{color: 'white'}}>STories</Text>
    </View>
  )
}

const styles= StyleSheet.create({

    story:{
        width:80,
        height:80,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor: '#ff8501'
    }

})

export default Stories