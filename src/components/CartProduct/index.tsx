//React
import { useContext, useState } from 'react'

//Context
import { UserContext } from '../../contexts/userContext'

//Styled
import { CartProductContainer } from './styles'

//Icons
import { Minus, Plus, Trash } from '@phosphor-icons/react'

//Item Props Interface
import { CardProps } from '../../contexts/userContext'

export function CartProduct({ item, name, img_path, amount, price }: CardProps){

    const { cartList, removeFromCart, sumTotalPrice, sumOrderTotalPrice } = useContext(UserContext)
    const [ currentAmount, setCurrentAmount ] = useState(amount)

    function handleIncrease(){
        setCurrentAmount(currentAmount => currentAmount + 1)
        item.amount ++

        sumTotalPrice(item)

        sumOrderTotalPrice(cartList)
    }

    function handleDecrease(){
        if(currentAmount > 1){
            setCurrentAmount(currentAmount => currentAmount - 1)
            item.amount --

            sumTotalPrice(item)

            sumOrderTotalPrice(cartList)
        }
    }

    return(
        <CartProductContainer>
            <div className="product-img">
                <img src={img_path} alt="Foto de uma xícara com café preto dentro" />
            </div>

            <div className="product-detail">
                <span>{name}</span>
                <div className="btn-section">
                    <div className="counter">
                        <button type='button' onClick={handleDecrease}><Minus color='#8047F8' size={15} weight='bold'/></button>
                        <span>{currentAmount}</span>
                        <button type='button' onClick={handleIncrease}><Plus color='#8047F8' size={15} weight='bold'/></button>
                    </div>

                    <button onClick={() => removeFromCart(item)} className="remove-btn"><Trash color='#8047F8' size={16}/>Remover</button>
                </div>
            </div>

            <div className="product-price">
                <span>R$ {price.toFixed(2)}</span>
            </div>
        </CartProductContainer>
    )
}