import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase'

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('🌏 Signed out successfully!')
    } catch (error) {
        console.log('error')
    }
  
}
const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
         <TouchableOpacity onPress={handleSignout}>
          <Image 
            style={styles.logo} 
            source={require('../../assets/header-logo.jpeg')}
          />
         </TouchableOpacity>
         <View style={styles.iconsContainer}>
             <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                 <Image 
                    source={{
                     uri: 'https://www.vippng.com/png/detail/7-71830_white-google-plus-logo-png-cross.png'}}
                     style={styles.icon}
                 />
             </TouchableOpacity>
             <TouchableOpacity>
                 <Image 
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdqZT9u4TbZgOWGu4XGRm3Uw1Z6C9zY5p7g&usqp=CAU'}}
                        style={styles.icon}
                 />
             </TouchableOpacity>
             <TouchableOpacity>
                 <View style={styles.unreadBadge}>
                     <Text style={styles.unreadBadgeText}>11</Text>
                 </View>
                 <Image 
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9oGiJqWPl7xtUHhzpkhl0Ur6diGvuGxq4QvTJbFEevbnr9hHXTzUY3wSmob9MNzW3SU4&usqp=CAU'}}
                        style={styles.icon}
                 />
             </TouchableOpacity>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 20,
    },

    iconsContainer: {
      flexDirection: 'row',
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '200',
    },

})

export default Header
