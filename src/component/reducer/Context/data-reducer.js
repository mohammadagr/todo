const dataReducer = [
    {
        id: 1,
        name: 'buyList',
        description: 'need for home',
        item: [{
            id: 1,
            title: 'bread',
            status: false
        },
            {
                id: 2,
                title: 'meat',
                status: false
            }]
    },
    {
        id: 2,
        name: 'buyList',
        description: 'need for home',
        item: [{
            id: 4,
            title: 'bread',
            status: false
        },
            {
                id: 6,
                title: 'meat',
                status: false
            }]
    }
]
export default dataReducer
 export const idGenerator=()=>{
    return Math.ceil(Math.random()*100)
}

