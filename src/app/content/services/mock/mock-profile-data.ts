import { IProfile } from "../profile.viwemodel";

export const mockProfileList: IProfile[] = [
    {
        id: 'fd4096ce-e87c-40b8-b1df-00743578aee7',
        photos: [
            'https://i.pinimg.com/originals/62/09/55/620955261ee47ac00b8bf907ccb8213c.jpg',
            'https://static.mk.ru/upload/entities/2021/02/13/05/articles/detailPicture/32/84/c4/d7/61441c2f612f9ea8e9c694ca650bd6ad.jpg',
            'https://cs10.pikabu.ru/post_img/big/2019/11/15/11/1573841665120358108.jpg',
        ],
        name: 'name 0',
        description: 'description 0',
        hasLike: true
    },
    {
        id: '9eb99f78-7aac-4f50-8781-907d37be011f',
        photos: [
            'https://media1.popsugar-assets.com/files/thumbor/0sHrkGUke1yCFzvsUmDD7UyQF0Y/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/17/651/n/1922283/d755b50aa10b7607_GettyImages-646053832/i/Scarlett-Johansson.jpg',
            'https://media.tatler.ru/photos/61a4e05463095a417fcaf21c/master/w_1600%2Cc_limit/GettyImages-1205142102.jpg',
            'https://www.wmj.ru/thumb/1250x0/filters:quality(75):no_upscale()/imgs/2016/12/04/17/693923/ca4c6272b757334cac840819adc7aa3af215748c.jpg',
            'https://www.wmj.ru/thumb/1250x0/filters:quality(75):no_upscale()/imgs/2016/12/04/17/693923/ca4c6272b757334cac840819adc7aa3af215748c.jpg'
        ],
        name: 'name 1',
        description: 'description 1',
        hasLike: false
    },
    {
        id: '728852b9-d84e-4aaf-beac-f413dbd4cbe1',
        photos: [
            'https://cdn.technosports.co.in/wp-content/uploads/2022/01/watson-768x1024.jpeg',
            'https://hochu.ua/images/%D0%B2%D0%B2%D0%B2%D0%B2%D0%B2%D0%B2%D0%B2%D0%B2%D0%B2.jpg',
            'https://cdn.7days.ru/upload/images/f4a/dcf7e30dbc25b58e24f6d5bb3378b.jpg',
        ],
        name: 'name 2',
        description: 'description 2',
        hasLike: false
    }
]