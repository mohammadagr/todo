const dataState = [
    {
        id: 1,
        name: 'buy List',
        description: 'need for home',
        item: [{
            id: 11,
            title: 'bread',
            status: false
        },
            {
                id: 22,
                title: 'meat',
                status: false
            },
            {
                id: 33,
                title: 'milk',
                status: false
            },
            {
                id: 44,
                title: 'fruit',
                status: false
            },
        ]
    },
    {
        id: 65,
        name: 'Car',
        description: 'Auto Service',
        item: [{
            id: 66,
            title: 'gas',
            status: false
        },
            {
                id: 67,
                title: 'Car wash',
                status: false
            },
            {
                id: 68,
                title: 'Oil change',
                status: false
            }
            ]
    },
    {
        id: 69,
        name: 'personal',
        description: 'daily',
        item: [{
            id: 70,
            title: 'running',
            status: false
        },
            {
                id: 71,
                title: 'take shower',
                status: false
            },
            {
                id: 72,
                title: 'having breakfast',
                status: false
            },
            {
                id: 73,
                title: 'go to office',
                status: false
            },
        ]
    },
    {
        id: 74,
        name: 'meeting',
        description: 'about new project',
        item: [{
            id: 75,
            title: 'meet Mikel',
            status: false
        },
            {
                id: 76,
                title: 'meet my boss',
                status: false
            },
            {
                id: 77,
                title: 'meet project manager',
                status: false
            }
        ]
    }
]
export default dataState
 export const idGenerator=()=>{
    return Math.ceil(Math.random()*100)
}

