import Vue from 'vue'
import Router from 'vue-router'
import Index from "./src/components/Index"
import ChatBots from "./src/components/ChatBots"
import Admin from "./src/components/Admin"
import Test from "./src/components/Test"
import EditBots from "./src/components/EditBots"
import User from "./src/components/User"
import Adminuser from "./src/components/Adminuser"
import CardChat from "./src/components/CardChat"

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/bots/',
            name: 'chatbots',
            component: ChatBots,
            props: true,
        },
        {
            path: '/admin/',
            name: 'admin',
            component: Admin,
            props: true,
        },
        {
            path: '/test/',
            name: 'test',
            component: Test,
            props: true,
        },

        {
            path: '/editbots/',
            name: 'editbots',
            component: EditBots,
            props: true,
        },
        {
            path: '/User/:Pid',
            name: 'user',
            component: User,
            props: true,
        },
        {
            path: '/Adminuser/',
            name: 'adminuser',
            component: Adminuser,
            props: true,
        },
        {
            path: '/CardChat/:Pid',
            name: 'cardchat',
            component: CardChat,
            props: true,
        },
    ]
})