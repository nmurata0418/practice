import Vue from 'vue';
import Router from 'vue-router';
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersProfile from "./views/UsersProfile.vue";
import UsersPosts from "./views/UsersPosts.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: Home},
        {path: '/users/:id',
            component: Users,
            props: true,
            children: [
                { path: "posts", component: UsersPosts},
                { path: "profile", component: UsersProfile}
            ],
        },
        {path: '/users', component: Users}
    ]
});