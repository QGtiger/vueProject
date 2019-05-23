const routers = [
    {
        path: '/',
        meta: {
            title: '博客首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/collapse',
        meta: {
            title: 'collapse'
        },
        component: (resolve) => require(['./views/collapse.vue'],resolve)
    }
];
export default routers;