import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { firebase, db } from '../../firebase'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://w7.pngwing.com/pngs/543/744/png-transparent-computer-icons-like-button-instagram-instagram-love-heart-desktop-wallpaper-thumbnail.png',
        likedImageUrl: 'https://www.pngfind.com/pngs/m/597-5976566_png-file-svg-heart-in-speech-bubble-transparent.png',
    },
    {
        name: 'Comment',
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUAAAD///+rq6tycnLLy8t+fn7Q0NCOjo6GhoaYmJilpaWgoKCCgoJiYmLGxsaSkpJdXV1RUVHd3d1BQUHW1ta6urrw8PAyMjL5+flLS0vc3Nzl5eVXV1exsbEdHR1paWkpKSkWFhbq6uoLCwsuLi48PDwZGRkiIiI3Nzd3d3ck7nZbAAAGaklEQVR4nO2dbXuqMAyGEaaCim8o4lBB5+b8/3/wiMoRmvCutmG5P4Lr8lyFNClto2kMwzAMwzAMw0hnH64inHXEbCpgYJgFdNG/asaulrjZ4LNDhoVZWd7Wk210VcZ2BX1dQr2XwO+W1Gf4sk2tzaGMxjVdfRHzdZFAS7aJjdFz9R1pvoBp5qtsgTNyDhTFC7IEnmWb9jQyRseRbLueyAQTaMi26qkgEm3ZNj0ZQxT4K9uipyMOjHPZBj0dNy1wINueF7Bt80t4wyjzjHqHg+/784hFTE/kI5exQP6vswD/9EGm8YeHwG7GTxYT53Ta7/df+ACqCsEiw/7+/5+4uL6pRKurYeP96MX30XzCqzwvIJU+GlIP73exLvQL8yzFQPNa7/Z+mZjAo2SDqxNimZ91vYWId+tNz0kGEXJ1pxukczeyja3FN/K6RRNwiJ+xZNtaE+R9i+Y0PuBLuJdtal3gwLjQsHhmJNvQ2gSwtzTtCzy8ruIhTB6gu7yddkIfXapMgJpQO4JrNB3pDZjIf2vf4JpsKxsBgre1thYvfco2shFgZNhoM/HSUraRjdiKcmyY3tNWqItyDDiEbIubURgw4XSGE8EtU2jCGYyBbCMbMRTl9GG02jKFFiukRhmFw+JmFAZku0PsEmX6ohydFVKDFf4NhehHfjKA5RaIwn5xMwoDglAdC+QogygECRUrVBtWyArVhxX+DYW0ViiIlFFYdkm/mrBCVqg+rJAVqg8rZIXqwwpZofqwQlaoPqyQFaoPK2SF6sPzpaxQfVghK1QfVsgK1YcVskL1ab9CsKi7dQqR1ZeskBhlFLZujTArJAYrZIXqwwpZofq0XyHYIIPsmWnZHlJWSA5WyArV5w8qtKDClp38gZw40H6FtE/gAWcMsUJyIApBuYCxbCMbsYQKwSlK7Ve4kG1kI8aiHBOeZubLNrIR4HxPEx5B6xY3ozDgpN0uPFXQK25GYcBZpUbrT4YMtBVQSO0k7yRQzVQLwTXKyy9hKZm1tgf9SjmoATOHnV/E+7gn2XbWBh6K3NlpWg9cpJs/wVIr0XmzsGM7VSoJqsQGFkiI5reRCiwHms/pHjlY34luHOB1mrEpPF3+figyVsBjTPDUcpBWdOKFJXvkTqcXyjW3MjuQVVzwfm43EV9zGTNAWS+lCdBaOfHMKNqJlyeVzuHsM6wDO4kQG0yjxhoNEsVY7Ax9iU+hP3g5pAue3xsvt7o+GE4mE3M0Gp0Nwwhs257NnN/wp8AfhU6CWYKNnSBIVmfujh6YkwTWYPhAT5JZWTQZnNWtfejOx2a2Skty0c+UJ8E8bUnm37i+VVYlrXchZBDIsF8WH63dGsquKywWIgGTGRVA060GT8VzmIkWwRIt5UEKtEmvN4gM51jprpJ8wNZkv4ToOmCw2KY8wNlMn2drLTIWBdXvRZAzZ43BbyJzJTce3JXAC9MNraWOhF5OSO3ULSkrHK+MxvLvws+Np79q2jZPtXJqMLo2Ri+qqTat142pcuYSK3z7ZUqLjupEI6mvjpmx8KvxS24W2Y9q9GMizwIFlt7EoV+hMKVRecRO1EwE39LfgTcOKhY1PJrLT7eC03+UF97XHXPq4nn+ePRTTV5s63E9Dc5d85qKWpfMczAY6NvtdrlERvT/08iIn5l/RiQLMSerPC8TbGP0wX+G1j3xtW7JcN+MOJ/PQWBPN2vnWE9dAfApHmff6r3CglcDC1179zQRqdxKa9ruDjKo330N9DMHgtPLGibEvwoJoZ8hup4TGfSucQ2SoDiyba0JdCjXRBgGRCT9TAT0NZ0VmvoGxW2pCTKwD7DUl/AKJOhrXM2BURBRPxOB+JoREpL+yrazAdDXIIEsMg9Hh1IzVyTjmRhkcAcciptRmRKJIO3djFiQLULZz0QUTsiQjWdikLgmDdl4JmZX4GsIxzMxBb6GuJ+JKPA1VPOmJLmzjqTjmZjcuIZ0PBOTF9e0wM9E5HysaoGfiXCyFYaybXsSmb6GfDwTAzYwxpCPZ2K+Mj740t4DlyJj7aZV/JdUQGafLnjU86Yk6OIZ2pttBdA1bGVWDNAB+ew/L/4rSiAr4ihv8UOAO/xaEpI+QE4yaBniCmOP5tawPIQBoyVZRZL0gOFWWJtEhtTuzZY50jsJibpsW16Eff+C77azB6840WKsdkVrDMMwDMMwDMOU5B//k3LK0t5FbAAAAABJRU5ErkJggg==',
    },
    {
        name: 'Share',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe0QVLDewtoYON8RkhLeze6kAzLLrIIcvcw&usqp=CAU',
    },
    {
        name: 'Save',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmTq0zSiiOaTJoX7y7omWax4GlsGTGeRhXQ&usqp=CAU',
    },
]

const Post = ({ post }) => {
 const handleLike = post => {
    const currentLikeStatus = !post.likes_by_users.includes(
        firebase.auth().currentUser.email
    )
    db.collection('users')
    .doc(post.owner_email)
    .collection('post')
    .doc(post.id)
    .update({
        likes_by_users: currentLikeStatus 
        ? firebase.firestore.FieldValue.arrayUnion(
            firebase.auth().currentUser.email
        )
        : firebase.firestore.FieldValue.arrayRemove(
            firebase.auth().currentUser.email
            ),
    })
    .then(() => {
        console.log('🔥🔥 Document successfully uploaded!')
    })
    .catch(error => {
        console.error('Error updating document: ', error)
    })
 } 
    return (
        <View style={{ marginBottom: 30 }}>
          <Divider width={1} orientation='vertical' />
          <PostHeader post={post} />
          <PostImage post={post} />
          <View style={{marginHorizontal: 15, marginTop: 10 }}>
            <PostFooter post={post} handleLike={handleLike} />
            <Likes post={post} />
            <Caption post={post} />
            <CommentsSection post={post} />
            <Comments post={post} />
          </View>
        </View>
    )
}

const PostHeader = ({post}) => (
    <View 
       style={{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: 5, 
        alignItems: 'center',
        }}
    >
        <View style={{ flexDirection: 'row', alignItems: 'center', 
           }}>
            <Image 
              source={{ 
                  uri: post.profile_picture }} 
                  style={styles.story}/>
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
                {post.user}
            </Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
        <View></View>
    </View>
)

const PostImage = ({post}) => (
  <View style={{
      width: '100%',
      height: 450,
  }}>
    <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
)

const PostFooter =({ handleLike, post }) => (
    <View style={{ flexDirection: 'row', padding: 1 }}>
    <View style={styles.leftFooterIconsContainer}>
     <TouchableOpacity onPress={() => handleLike(post)}>
      <Image 
        style={styles.footerIcon} 
        source={{
            uri: post.likes_by_users.includes(firebase.auth().currentUser.email) 
            ? postFooterIcons[0].likedImageUrl 
            : postFooterIcons[0].imageUrl,
            }} 
      />
     </TouchableOpacity>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon 
        imgStyle={[styles.footerIcon, styles.shareIcon]} 
        imgUrl={postFooterIcons[2].imageUrl} />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
      </View>
    </View>
  
)

const Icon =({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes =({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4 }}>
   <Text style={{ color: 'white', fontWeight: '600', }}>
       {post.likes_by_users.length.toLocaleString('en')} likes
    </Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
    <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: '600' }}>{post.user}</Text>
        <Text> {post.caption}</Text>
    </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
     {!!post.comments.length && (
      <Text 
        style={{ color: 'gray' }}>
        View{post.comments.length > 1 ? 'all' : ''} {post.comments.length} {'.'}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
    </View>
)

const Comments = ({ post }) => (
  <>
   {post.comments.map((comment, index) => (
       <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
           <Text style={{ color: 'white' }}>
               <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
               {comment.comment}
           </Text>
       </View>
   ))}
  </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },

    footerIcon: {
        width: 33,
        height: 33,
    },

    shareIcon: {
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },
 })

export default Post

