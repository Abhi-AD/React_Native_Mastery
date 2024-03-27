import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
     function openWebsite(websiteLink: string) {
          Linking.openURL(websiteLink)
     }
     return (
          <View>
               <Text style={styles.headingText}>Blog Card</Text>
               <View style={[styles.card, styles.elevatedCard]}>
                    <View style={styles.headingContainer}>
                         <Text style={styles.headerText}>What's new in Javascripts 21-ES12</Text>
                    </View>
                    <Image
                         source={{
                              uri: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                         }}
                         style={styles.cardImage}
                    />
                    <View style={styles.bodyContainer}>
                         <Text numberOfLines={4}>React, a well-known JavaScript library, is used to build complex and scalable web apps, and advanced React web development training from Broadway Infosys is a thorough course that equips learners with those skills and knowledge. Advanced subjects like server-side rendering, code splitting, performance optimization, state management, and testing are covered in the course.
                              Participants get knowledge on how to create web apps that are quick, flexible, and simple to maintain. The training is delivered by skilled experts in the industry and offers practical learning through real-world projects.
                              Thus, we have designed professional ReactJS training course that guides the developers to build front-end applications with less time and effort. After completing the course, participants will be well-equipped to seek a job as a React developer or advance their current web development skills.
                         </Text>
                    </View>
                    <View style={styles.footerContainer}>
                         <TouchableOpacity onPress={() => openWebsite('https://members.codewithmosh.com/p/mastering-react')}>
                              <Text style={styles.socialLink}>Read  More</Text>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => openWebsite('https://www.facebook.com/dangiabhi332')}>
                              <Text style={styles.socialLink}>Follow me</Text>
                         </TouchableOpacity>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     headingText: {
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 8
     },
     card: {
          width: 380,
          height: 400,
          marginVertical:12,
          marginHorizontal:17,
          borderRadius:12
     },
     elevatedCard: {
          backgroundColor:'#264744',
          elevation:3,
          shadowOffset:{
               width:1,
               height:1
          },
          shadowColor:'#333',
          shadowOpacity:0.4
     },
     headingContainer: {
          height:40,
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
     },
     headerText: {
          color:'#F1F7F6',
          fontSize:20,
          fontWeight:'600'
     },
     cardImage: {
          height: 200
     },
     bodyContainer: {
          padding:12
     },
     footerContainer: {
          padding:8,
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-evenly',
     },
     socialLink: {
          fontSize:18,
          color:'#ffffff',
          backgroundColor:'#094AF6',
          paddingHorizontal:20,
          paddingVertical:8,
          borderRadius:99
     },
})