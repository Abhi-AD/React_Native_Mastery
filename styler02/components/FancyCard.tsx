import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
     return (
          <View>
               <Text style={styles.headingText}>Trending Places</Text>
               <View style={[styles.card, styles.cardElevated]}>
                    <Image
                         source={{
                              uri: 'https://reactnative.dev/img/tiny_logo.png'
                         }}
                         style={styles.cardImage} />
                    <View style={styles.cardBody}>
                         <Text style={styles.cardTitle}>React Logo</Text>
                         <Text style={styles.cardLabel}>JavaScript</Text>
                         <Text style={styles.cardDescription}>React Native is an open-source framework, meaning it's free for public use. It contains resources like pre-built components, libraries, and reference material. Like the framework of a home, React Native provides the basic structure of an application.</Text>
                         <Text style={styles.cardFooter}>1years  ago</Text>
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
          height: 360,
          borderRadius: 6,
          marginVertical: 12,
          marginHorizontal: 16
     },
     cardElevated: {
          backgroundColor: '#ffffff',
          elevation: 3,
          shadowOffset: {
               width: 1,
               height: 1
          }
     },
     cardImage: {
          height: 180,
          marginBottom: 12,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
     },
     cardBody: {
          flex: 1,
          flexGrow: 1,
          paddingHorizontal: 12
     },
     cardTitle: {
          color: '#000000',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 5
     },
     cardLabel: {
          color: '#000000',
          fontSize: 14,
          marginBottom: 8
     },
     cardDescription: {
          color: '#ABABAB',
          fontSize: 12,
          marginBottom: 14,
          marginTop: 5,
          flexShrink: 1,
     },
     cardFooter: {
          color: '#000000',
     },
})