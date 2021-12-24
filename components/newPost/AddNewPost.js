import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'



const AddNewPost = ({ navigation }) => (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <FormikPostUploader navigation={navigation} />
    </View>
)

const Header = ({ navigation }) => (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack('')}>
      <Image 
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhEi19WBrou6nXw_LpfxdH5Uidwua9h3NktJoYfarC3ZD6vMBoa8HAl3f4IuJ2Xfyd7c&usqp=CAU'}} 
        style={{width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>NEW POST</Text>
    <Text></Text>
  </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 20,
      marginRight: 23,
    },
    
})

export default AddNewPost

