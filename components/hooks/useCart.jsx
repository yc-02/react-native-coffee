import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState={
    items:[],
    totalCount:0,
    totalPrice:0
}

export const CartStore = create(persist(()=>(initialState),{
    name:'cart-store'
}))

export default function useCart(){
    const {items,totalCount,totalPrice}=CartStore()
    return{
        items,
        totalCount,
        totalPrice,
        increase:(item)=>{
            const exist = items.find((i)=>i.name === item.name && i.size === item.size)
            if(exist){
                exist.qty++
            }else{
                items.push({...item,qty:1})
            }
            CartStore.setState({
                items,
                totalCount:items.reduce((total,item)=>total+item.qty,0),
                totalPrice:items.reduce((total,item)=>total+item.price*item.qty,0)
                
            })
        }
        
    }
}