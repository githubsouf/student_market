import { Conversations, Categories,ForumMessage, User } from '../types/types';

export const categories: Categories[] = [
    { id: "accessories", title: "Accessories", icon: "FaCogs" },
    { id: "apparel", title: "Apparel", icon: "FaTshirt" },
    { id: "books", title: "Books", icon: "FaBook" },
    { id: "footwear", title: "Footwear", icon: "FaShoePrints" },
    { id: "personal-care", title: "Personal Care", icon: "FaShower" },
    { id: "phones", title: "Phones", icon: "FaMobileAlt" },
    { id: "sporting-goods", title: "Sporting Goods", icon: "FaFootballBall" }
];



const users: User[] = [
    { id: 1, username: "Ali El Fassi", avatar: "https://image.api.playstation.com/cdn/EP0031/CUSA07998_00/A8YPCnUsmrgvvuX4BlNAX2nxy2rLrsg3.png?w=440&thumb=false" },
    { id: 2, username: "Fatima Benkirane", avatar: "https://image.api.playstation.com/cdn/EP1024/CUSA06987_00/SMH2yDB5BxG8zrLRoge7WlSa7T8gCHgI.png?w=440&thumb=false" },
    { id: 3, username: "Omar Chraibi", avatar: "https://image.api.playstation.com/cdn/UP1024/CUSA07206_00/tUS6UlA4LXIbVpbPvdDOIwpciHol6BOB.png?w=440&thumb=false" },
    { id: 4, username: "Aicha Tazi", avatar: "/avatars/aicha_tazi.jpg" },
    { id: 5, username: "Youssef Kettani", avatar: "/avatars/youssef_kettani.jpg" },
    { id: 6, username: "Nadia Berrada", avatar: "/avatars/nadia_berrada.jpg" },
    { id: 7, username: "Hassan El Idrissi", avatar: "/avatars/hassan_elidrissi.jpg" },
    { id: 8, username: "Samira Belghiti", avatar: "/avatars/samira_belghiti.jpg" },
    { id: 9, username: "Mehdi Bennani", avatar: "/avatars/mehdi_bennani.jpg" },
    { id: 10, username: "Khadija Kadiri", avatar: "/avatars/khadija_kadiri.jpg" },
    { id: 11, username: "Driss Lahlou", avatar: "/avatars/driss_lahlou.jpg" },
    { id: 12, username: "Leila Marrakchi", avatar: "/avatars/leila_marrakchi.jpg" }
];

export const forumMessages: ForumMessage[] = [
    {
        id: 1,
        contenu: "Quels sont les meilleurs endroits à visiter à Marrakech ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[1],
        replies: [
            {
                id: 2,
                contenu: "Je recommande la place Jemaa el-Fna et le jardin Majorelle !",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[0],
                parentMessageId: 1,
            },
            {
                id: 3,
                contenu: "Le palais Bahia est aussi un incontournable.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[2],
                parentMessageId: 1,
            },
            {
                id: 15,
                contenu: "N'oubliez pas les souks pour une expérience authentique !",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[4],
                parentMessageId: 1,
            },
        ],
    },
    {
        id: 4,
        contenu: "Quel est le meilleur couscous de Casablanca ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[0],
        replies: [
            {
                id: 5,
                contenu: "Chez Abdel, leur couscous royal est incroyable.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[1],
                parentMessageId: 4,
            },
            {
                id: 16,
                contenu: "Je suis d'accord, mais essaie aussi le couscous de 'Dar Dada'!",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[6],
                parentMessageId: 4,
            },
        ],
    },
    {
        id: 6,
        contenu: "Des conseils pour un road trip dans le désert du Sahara ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[3],
        replies: [
            {
                id: 7,
                contenu: "Préparez-vous pour des nuits étoilées incroyables et prenez un guide local pour une expérience authentique.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[5],
                parentMessageId: 6,
            },
            {
                id: 17,
                contenu: "N'oubliez pas de partir avec de l'eau et des provisions, le désert peut être rude!",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[8],
                parentMessageId: 6,
            },
        ],
    },
    {
        id: 8,
        contenu: "Où trouver les meilleurs tajines à Fès ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[7],
        replies: [
            {
                id: 9,
                contenu: "Je recommande le restaurant 'Riad Fès', leurs tajines aux pruneaux sont délicieux.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[9],
                parentMessageId: 8,
            },
        ],
    },
    {
        id: 10,
        contenu: "Quels sont les événements culturels à ne pas manquer à Rabat ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[10],
        replies: [
            {
                id: 11,
                contenu: "Le Festival Mawazine est un incontournable, ainsi que les soirées au théâtre Mohammed V.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[11],
                parentMessageId: 10,
            },
        ],
    },
    {
        id: 12,
        contenu: "Des idées pour un séjour en famille à Essaouira ?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[5],
        replies: [
            {
                id: 13,
                contenu: "La plage est super pour les enfants, et vous pouvez visiter le port de pêche.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[2],
                parentMessageId: 12,
            },
            {
                id: 14,
                contenu: "Les remparts offrent une belle vue, et les balades à dos de chameau sont sympas pour les enfants.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[7],
                parentMessageId: 12,
            },
        ],
    },
    {
        id: 18,
        contenu: "Avez-vous des recommendations pour des randonnées dans les montagnes de l'Atlas?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[4],
        replies: [
            {
                id: 19,
                contenu: "Le Toubkal est un défi, mais l'expérience est incroyable! Prenez un guide local pour votre sécurité.",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[1],
                parentMessageId: 18,
            },
        ]
    },
    {
        id: 20,
        contenu: "Quelles sont vos marques de thé marocain préférées?",
        sendDate: new Date(),
        me: false,
        deleted: false,
        user: users[8],
        replies: [
            {
                id: 21,
                contenu: "Pour moi c'est le thé 'Sultan'. Il a un goût authentique incomparable!",
                sendDate: new Date(),
                me: false,
                deleted: false,
                user: users[9],
                parentMessageId: 20,
            },
        ]
    },
    {
        id:22,
        contenu: "Comment faites-vous pour vous deplacer dans les villes au Maroc, j'ai du mal avec le transport",
        sendDate:new Date(),
        me: false,
        deleted:false,
        user:users[3],
        replies:[
            {
                id:23,
                contenu:"Utiliser les petits taxis est super pratique mais attention à la négociation des prix!",
                sendDate: new Date(),
                me:false,
                deleted:false,
                user:users[0],
                parentMessageId:22,
            },
            {
                id:24,
                contenu:"Sinon le bus est aussi une option économique!",
                sendDate: new Date(),
                me:false,
                deleted:false,
                user:users[11],
                parentMessageId:22,
            }
        ]
    },
];


export const conversations: Conversations[] = [
    {
        id: 1,
        title: "Conversation 1",
        messages: [
            {
                id: 1,
                text: "Bonjour !",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "Salut, comment allez-vous ?",
                sender: 'other',
                date: new Date()
            },
        ],
        date: new Date()
    },
    {
        id: 2,
        title: "Conversation 2",
        messages: [
            {
                id: 1,
                text: "Message initial",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "Message de réponse",
                sender: 'other',
                date: new Date(),
            },
        ],
        date: new Date()
    },
    {
        id: 3,
        title: "Conversation 3",
        messages: [
            {
                id: 1,
                text: "Hey",
                sender: 'user',
                date: new Date(),
            },
            {
                id: 2,
                text: "hey, comment ca va?",
                sender: 'other',
                date: new Date(),
            }

        ],
        date: new Date()
    },
];