const initialState = {
    products:[
        {
            name: 'Donut',
            price: 2.50,
            checked: false
        },
        {
            name: 'Coffee',
            price: 3.00,
            checked: false
        },
        {
            name: 'Burger',
            price: 1.98,
            checked: false
        }
    ],
    history:[]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type){
        case 'PRODUCTS': {
            return state
        }

        case 'CHECK_PRODUCTS': {
            return { 
                ...state,
                products:[
                    
                    ...state.products.slice(0, action.payload),
                    {
                        ...state.products[action.payload],
                        checked: !state.products[action.payload].checked
                    },
                    ...state.products.slice(action.payload+1)
                ]
            }
        }

        case 'ADD_NEWS_PRODUCTS': {
            const isCheckedProduct = state.products.some(item=>item.checked)
            if(isCheckedProduct){
                const boughtProduct = state.products.filter(item=>item.checked)
                const resetProduct = state.products.map(item=>{
                    return {
                        ...item,
                        checked:false
                    }
                })
                return {
                    ...state,
                    products:resetProduct,
                    history:[
                        ...state.history, {boughtProduct}
                    ]
                }
            }
        }

        default: return state
    }
}
