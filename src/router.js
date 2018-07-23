import Vue from 'vue';
import Router from 'vue-router';
import WorkBench from './views/WorkBench.vue';

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/y/:tool', name: 'workbench', component: WorkBench, props: true },
        { path: '', name: 'home', component: WorkBench },
    ],
});
