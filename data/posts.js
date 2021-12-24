import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t1.6435-9/177972567_10225939595581972_5320933179759536067_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFMXD069SY9VXVVoFAZteHQEGKWMhAixt0QYpYyECLG3RkpQ118sjwwJ_GoFmwD3d8&_nc_ohc=7SDdoRcGC08AX-aAp41&tn=Cl0nkwSUpYB4LSZw&_nc_ht=scontent.fkul15-1.fna&oh=00_AT__iKm74oAKnc6pKM1oSRRa6_SNCs00rajv7aZNxv3xDQ&oe=61E5B6DC',
        user: USERS[0].user,
        likes: 7870,
        caption: 'So Sweet!!',
        profile_picture: USERS[0].image,
        comments: [
         {
            user: 'Eke',
            comment: 'ASA MMA! You are great and amazing',
         },

         {
            user: 'Anayo',
            comment: 'Nwanyi Mara Mma!! You are gorgeous and amazing.',
         },
        ],
    },
    {
        imageUrl: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t1.6435-9/70349863_10220314660202103_718084777743220736_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF5i6Ex7r7DIjbvaHZJc98jF4lBrP7rrGcXiUGs_uusZ0_O9Osa5eSF9uChe_UjLBE&_nc_ohc=iC0MdVwKhXEAX_EFdiA&_nc_oc=AQkGTm5ULTx2ZEJMuZ4HAJNdx8G0BKeechlJYpEA7qBkhw3SD6ndV7XTZU1A0Y57ULQaKq5Rlycl43KwL15joCO7&_nc_ht=scontent.fkul15-1.fna&oh=00_AT_ApBwis_w89vhSmaxVBAzj7s4OUMWDLd_arwqmkY4GSQ&oe=61E6AB46',
        user: USERS[1].user,
        likes: 9870,
        caption: 'Good Work',
        profile_picture: USERS[1].image,
        comments: [
         {
            user: 'Joke',
            comment: 'Nwoke di Uto!!',
            
         },

         {
            user: 'Ebube',
            comment: 'Agaba Ndewo! You are great and amazing.',
         },

         {
            user: 'Joke',
            comment: 'Onye Nke m!!',
         },

        ],
    },

    {
      imageUrl: 'https://scontent.fkul15-1.fna.fbcdn.net/v/t1.6435-9/70399756_10220314660842119_3530248811328831488_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGFJO7qq1pRuusaVA6Ds1CmpSWC95TzOqqlJYL3lPM6qly-br1gjQn01FQEHPGZHwg&_nc_ohc=ilinKCCJ2H0AX8j0sls&_nc_ht=scontent.fkul15-1.fna&oh=00_AT-_hDZgBVSKx_77HSB2qBVgDotenxeR-Si3MYnVqRIUCg&oe=61E62B3C',
      user: USERS[2].user,
      likes: 17870,
      caption: 'Beautiful Picture',
      profile_picture: USERS[2].image,
      comments: [

       {
          user: 'Ebube',
          comment: 'Nwa Ritabbi!!! Idi oke, You look good.',
       },
      ],
   },
]
