import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    //refatorando com a função arrow acima
    /* render(createElement) {
        return createElement(App)
    } */
}).$mount("#app")