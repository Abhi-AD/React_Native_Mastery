import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
     const contacts = [
          {
               uid: 1,
               name: "Abhishek Dangi",
               status: "Full stack Developer",
               imageUrl: 'https://media.licdn.com/dms/image/D4D03AQFCJp5Hzvb3mg/profile-displayphoto-shrink_800_800/0/1706681879023?e=2147483647&v=beta&t=V7uiS18BpfX7dbNdsAI3BIxSaN_L8HA1RlpKsN6vzUI'
          },
          {
               uid: 2,
               name: "Ashmita Kunwar",
               status: "Data scientist ",
               imageUrl: 'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/400609073_122095989002119279_887845368976083226_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nGSLWnyyJb8AX_KAOYJ&_nc_ht=scontent.fktm9-2.fna&oh=00_AfDgpwjc8wYB_vqwheQVjVaNxIhYBHgwKv1fKbU-gMmjMA&oe=660902EA'
          },
          {
               uid: 3,
               name: "Dipa Khadka",
               status: "Data scientist ",
               imageUrl: 'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-6/350531180_245318534786331_4497763032824680121_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Xy5YIs_JwlMAX-SnAFZ&_nc_ht=scontent.fktm9-2.fna&oh=00_AfCN63u-V7_l_Qzzv3GmaNxxzYJ75Gr2tKurW4rTvCXIQg&oe=6609D9DD'
          },
          {
               uid: 4,
               name: "Lokisara Reshmi Magar",
               status: "Graphic Designer",
               imageUrl: 'https://scontent.fktm9-2.fna.fbcdn.net/v/t39.30808-1/434673322_428940689643457_9074680407942942671_n.jpg?stp=dst-jpg_s320x320&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Hzc__Y_X5y4AX_cHHDG&_nc_ht=scontent.fktm9-2.fna&oh=00_AfADZESH_4X_bkFJ72uJZmR73hNE9hKlGB4YidXiR1IVyg&oe=6609E128'
          }
     ];
     return (
          <View>
               <Text style={styles.headingText}>ContactList</Text>
               <ScrollView style={styles.container} scrollEnabled={false}>
                    {contacts.map(({ uid, name, status, imageUrl }) => (
                         <View key={uid} style={styles.userCard}>
                              <Image source={{
                                   uri: imageUrl
                              }} style={styles.userImage} />
                              <View>
                                   <Text style={styles.userName}>{name}</Text>
                                   <Text style={styles.userStatus}>{status}</Text>
                              </View>
                         </View>
                    ))}
               </ScrollView>
          </View>
     )
}

const styles = StyleSheet.create({
     headingText: {
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 10
     },
     container: {
          paddingHorizontal: 20,
          marginBottom:4 
     },
     userCard: {
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:4 ,
          backgroundColor:'#A1A19F',
          padding:10,
          borderRadius:20

     },
     userImage: {
          width: 60,
          height: 60,
          borderRadius: 60 / 2,
          marginRight: 16
     },
     userName: {
          fontSize:20,
          fontWeight:'600',
          color:'#ffffff'
     },
     userStatus: {
          fontSize:14,
          color:'#758283'
     },
})