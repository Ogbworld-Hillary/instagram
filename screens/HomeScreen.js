import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
import { db } from '../firebase'

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db
      .collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({
           id: post.id, ...post.data()
        }
     )))
    })
  }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})


export default HomeScreen

