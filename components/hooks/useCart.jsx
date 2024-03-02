import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState={
    items:[],
    totalCount:0,
    subTotal:0,
    tax:0,
    totalPrice:0
}

export const CartStore = create(persist(()=>(initialState),{
    name:'cart-store'
}))

export default function useCart(){
    const {items,totalCount,subTotal,tax,totalPrice}=CartStore()
    return{
        items,
        totalCount,
        subTotal,
        tax,
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
                totalCount:calcPrice(items).totalCount,
                subTotal:calcPrice(items).subTotal,
                tax:calcPrice(items).tax,
                totalPrice:calcPrice(items).totalPrice

                
            })
        },
        decrease:(item)=>{
            const exist = items.find((i)=>i.name === item.name && i.size === item.size)
            if(exist.qty===1){
                const filteredItems = items.filter((i)=>!(i.name === item.name && i.size ===item.size))
                CartStore.setState({
                    items:filteredItems,
                    totalCount:calcPrice(items).totalCount,
                    subTotal:calcPrice(items).subTotal,
                    tax:calcPrice(items).tax,
                    totalPrice:calcPrice(items).totalPrice
                })
            }else{
                exist.qty--
                CartStore.setState({
                    items,
                    totalCount:calcPrice(items).totalCount,
                    subTotal:calcPrice(items).subTotal,
                    tax:calcPrice(items).tax,
                    totalPrice:calcPrice(items).totalPrice
                })
            }
            },
            deleteItem:(item)=>{
                const exist = items.find((i)=>i.name === item.name && i.size === item.size)
                if(exist){                
                    const filteredItems = items.filter((i)=>!(i.name === item.name && i.size ===item.size))
                    CartStore.setState({
                        items:filteredItems,
                        totalCount:calcPrice(items).totalCount,
                        subTotal:calcPrice(items).subTotal,
                        tax:calcPrice(items).tax,
                        totalPrice:calcPrice(items).totalPrice
                    })

                }
            },
        }
        
    }

     const calcPrice = (items)=>{
        const totalCount = items.reduce((total,item)=>total+item.qty,0)
        const subTotal = items.reduce((total,item)=>total+item.price*item.qty,0)
        const tax = subTotal*0.0625
        const totalPrice = subTotal+tax
        return{
            totalCount,subTotal,tax,totalPrice
        }
     }