import Mock from 'mockjs'

Mock.mock('/login', 'post', options => {
    return {
        code: 200,
        message: 'success'
    }
})

Mock.mock('/menu', 'get', options => {
    return {
        code: 200,
        data: [{
            name: '首页',
            path: '/analytics',
            index: '1',
            component: "Layout",
            icon: 'Histogram',
            children: [
                {
                    name: '仪表盘',
                    path: '/dash',
                    index: '1-1',
                    component: "analytics/Dashboard",
                    icon: 'Memo',
                    children: []
                },
                {
                    name: 'Customers',
                    path: '/customers',
                    component: "analytics/Customers",
                    index: '1-2',
                    icon: 'Collection',
                    children: []
                }
            ]
        },
            {
                name: 'COMMERCE',
                path: '/commerce',
                index: '2',
                component: "Layout",
                icon: 'Promotion',
                children: [
                    {
                        name: 'Statistics',
                        path: '/statistics',
                        index: '2-1',
                        component: 'commerce/Statistics',
                        icon: 'Collection',
                        children: []
                    },
                    {
                        name: 'Products',
                        path: '/products',
                        index: '2-2',
                        component: 'BlankMenu',
                        icon: 'Place',
                        children: [
                            {
                                name: 'Products List',
                                path: '/products-list',
                                index: '2-2-1',
                                component: 'commerce/ProductsList',
                                icon: 'School',
                                children: []
                            },
                            {
                                name: 'Products Grid',
                                path: '/products-grid',
                                index: '2-2-2',
                                component: 'commerce/ProductsGrid',
                                icon: 'Guide',
                                children: []
                            },
                            {
                                name: 'Products Details',
                                path: '/products-details',
                                index: '2-2-3',
                                component: 'commerce/ProductsDetails-------',
                                icon: 'Mug',
                                children: []
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Cart',
                path: '/cart',
                index: '3',
                component: "Layout",
                icon: 'Odometer',
                children: []
            },
            {
                name: 'Checkout',
                path: '/checkout',
                index: '4',
                component: "Layout",
                icon: 'Compass',
                children: []
            }]
    }
})
