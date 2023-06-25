import { createContext, useState } from "react";

export const UserContext = createContext({} as UserContextDataType)


type ContextProps = {
    children: React.ReactNode
}

interface ItemProps {
    id: number,
    name: string,
    detail: string,
    amount: number,
    price: number,
    img_path: string,
    total_price: number,
    categ: string []
}

export interface CardProps {
    item: ItemProps,
    id: number,
    name: string,
    detail: string,
    amount: number,
    price: number,
    img_path: string,
    total_price: number,
    categ: string []
}

interface UserContextDataType {
    cartList: ItemProps[],
    addToCart: (newItem: ItemProps, currentAmount: number) => void,
    removeFromCart: (currentItem: ItemProps) => void,
    sumTotalPrice: (currentItem: ItemProps) => void,
    sumOrderTotalPrice: (items: ItemProps[]) => void,
    updateOrderDetail: (item:OrderDetailProps) => void,
    deleteCartList: () => void,
    itemsTotalPrice: number,
    orderDetail: OrderDetailProps

}

interface OrderDetailProps {
    street: string,
    city: string,
    number: number,
    complement: string,
    paymentMethod: string,
    neighborhood: string,
    uf: string
}


export function UserContextProvider({ children } : ContextProps){

    const [cartList, setCartList] = useState<ItemProps[]>([])
    const [ itemsTotalPrice, setItemsTotalPrice ] = useState(0)

    const [ orderDetail, setOrderDetail ] = useState<OrderDetailProps>({street:'', city: '', number: 0, complement: '', paymentMethod: '', neighborhood: '', uf: ''})

    function addToCart(newItem:ItemProps, currentAmount: number){
        const isExist = cartList.find((item) => item.id === newItem.id)

        if(!isExist){
            if(currentAmount > 0){
                newItem.amount += currentAmount
                sumTotalPrice(newItem)
                setCartList(state => [...state, newItem])
                sumOrderTotalPrice(cartList)
                alert("Item adicionado com sucesso!")
            }
        }else{
            if(currentAmount === 0){
                sumTotalPrice(newItem)
                setCartList(cartList.filter((product) => product.id !== newItem.id))
                alert("Item removido com sucesso!")
            }
            
            newItem.amount = currentAmount
            sumTotalPrice(newItem)
        }
    }

    function removeFromCart(currentItem: ItemProps){
        currentItem.amount = 0
        sumTotalPrice(currentItem)
        setCartList(cartList.filter((item) => item.id !== currentItem.id))
    } 

    function sumTotalPrice(currentItem: ItemProps){
        currentItem.total_price = currentItem.amount * currentItem.price
    }

    function sumOrderTotalPrice(items: ItemProps[]){

        const totalPricesArray = items.map((element) => {
            return element.total_price
        })

        const initialValue = 0

        const total = totalPricesArray.reduce((acumulator, currentValue) => acumulator + currentValue, initialValue)

        setItemsTotalPrice(total)

    }

    function updateOrderDetail(item:OrderDetailProps){
        setOrderDetail(item)
    }

    function deleteCartList(){
        setCartList([])
    }

    return(
        <UserContext.Provider value={{ cartList, addToCart, removeFromCart, sumTotalPrice, sumOrderTotalPrice, itemsTotalPrice, orderDetail, updateOrderDetail, deleteCartList }}>
            {children}
        </UserContext.Provider>
    )
}