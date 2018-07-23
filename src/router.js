import Vue from 'vue';
import Router from 'vue-router';
import WorkBench from './views/WorkBench';
import ToolPad from './views/ToolPad';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'workbench',
            component: WorkBench,
            children: [
                { path: '/y/:slug', component: ToolPad, props: true },
            ],
            props: true
        },
    ],
});
