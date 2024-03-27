import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
     return (
          <View>
               <Text style={styles.headingText}>FlatCards</Text>
               <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                         <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                         <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                         <Text>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                         <Text>Blue</Text>
                    </View>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     headingText: {
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 8,
     },
     container: {
          flex: 1,
          flexDirection: 'row',
          padding: 10
     },
     card: {
          flex: 1,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          borderRadius: 5,
          margin: 8
     },
     cardOne: {
          backgroundColor: '#ff0000'
     },
     cardTwo: {
          backgroundColor: '#0000FF'
     },
     cardThree: {
          backgroundColor: '#008000'
     },

})