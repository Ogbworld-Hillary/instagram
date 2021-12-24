import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import SignupForm from '../components/signupScreen/SignupForm'

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png'

const SignupScreen = ({navigation}) => (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
          </View>
          <SignupForm navigation={navigation} />
        </View>
        
)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50,
      paddingHorizontal: 12,
  },

  logoContainer: {
      alignItems: 'center',
      marginTop: 60,
  },
})

export default SignupScreen
