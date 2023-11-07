import Layout from '../layout/index.vue'
const modules = import.meta.glob('../components/**/**.vue')
const tree = (menuList, array) => {
    menuList.forEach((menu, index) => {
        array.push({
            name: menu.name,
            path: menu.path,
            icon: menu.icon,
            component: menu.component === 'Layout' ? Layout : modules[`../components/${menu.component}.vue`],
            children: []
        })
        if (menu.children) {
            array[index].children = tree(menu.children, [])
        }

    })

    return array
}

export {tree}
