import service from "../../request/index.js";
const permission = {
    state: {
        menuList: [],
        isCollapse: false
    },
    mutations: {
        SET_MENU(state, menuList) {
            state.menuList = menuList
        },
        SET_COLLAPSE(state, isCollapse) {
            state.isCollapse = isCollapse
        }

    },
    actions: {
        generateRoutes({commit}){
            return new Promise((resolve) => {
                service.get('/menu').then(res=> {
                    commit('SET_MENU',res.data)
                    resolve(res.data)
                })
            })
        }
    }
}

export default permission


