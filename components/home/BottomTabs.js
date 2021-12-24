import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons =[
    {
        name: 'Home',
        active: 'https://image.shutterstock.com/image-vector/home-icon-260nw-656554627.jpg',
        inactive: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFoPPlY2v9AHsor9dH5BAME9kEeL5k-gpxUw6k23OVgV7VWl3zdepGGU3UX16UsB8hUI&usqp=CAU',
    },
    {
        name: 'Search',
        active: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRCUel_peRqtDw4IjX0bfOUWfNGfj8Gi-y5g2NfWEzmYTv-DsCH0onJb38CLqLu1VrLMo&usqp=CAU',
        inactive: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814052_960_720.png',
    },
    {
        name: 'Reels',
        active: 'https://ih1.redbubble.net/image.1566288444.4140/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg',
        inactive: 'https://ezraproductions.com/wp-content/uploads/2020/10/Reels-Video-Production-Company-Instagram.png',
    },
    {
        name: 'Shop',
        active: 'https://thumbs.dreamstime.com/b/igtv-icon-set-social-media-icon-digital-multimedia-marketing-igtv-icon-set-138498594.jpg',
        inactive: 'https://thumbs.dreamstime.com/b/shopping-bag-outline-icon-linear-style-sign-mobile-concept-web-design-paper-simple-line-vector-symbol-logo-221758046.jpg',
    },
    {
        name: 'Profile',
        active: 'https://yt3.ggpht.com/yti/APfAmoGKK3cpnIw_f5ePgDQfQYYeLmO0I44FjPSB23-R2g=s88-c-k-c0x00ffffff-no-rj-mo',
        inactive: 'https://yt3.ggpht.com/yti/APfAmoGKK3cpnIw_f5ePgDQfQYYeLmO0I44FjPSB23-R2g=s88-c-k-c0x00ffffff-no-rj-mo',
    },
]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
             source={{uri: activeTab == icon.name ? icon.active : icon.inactive }} 
             style={[
                styles.icon, 
                icon.name == 'Profile' ? styles.profilePic() : null,
                activeTab == 'Profile' && icon.name == activeTab 
                 ? styles.profilePic(activeTab) : null,
             ]} 
             />
        </TouchableOpacity>
    )
    return (
      <View style={styles.wrapper}>
         <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      width: '100%',
      bottom: '3%',
      zIndex: 999,
      backgroundColor: '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    profilePic: (activeTab = '') =>({
        borderRadius: 50,
        boderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: '#fff',
    }),
})

export default BottomTabs


