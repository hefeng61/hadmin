import {createStore} from "vuex"
import permission from './module/permission.js'
import getters from './getters.js'

const store = createStore({
    modules: {
        permission
    },
    getters
})

export default store
