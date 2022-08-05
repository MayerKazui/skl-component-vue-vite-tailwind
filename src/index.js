import ComponentName from './components/ComponentName.vue'

export default {
    install: (app, options) => {
        app.component("ComponentName", ComponentName);
    },
};