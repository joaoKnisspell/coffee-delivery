//React
import { useState, useContext } from 'react'

//Styled-components
import { CardContainer } from './styles'

//Icons
import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'

//CardProps Context
import { CardProps } from '../../contexts/userContext'

//Context
import { UserContext } from '../../contexts/userContext'


export function Card({ item, name, img_path, categ, detail, price, amount }: CardProps){

    const [currentAmount, setCurrentAmount] = useState(amount)

    const { addToCart } = useContext(UserContext)

    function handleIncrease(){
        setCurrentAmount(currentAmount => currentAmount + 1)
    }

    function handleDecrease(){
        if(currentAmount > 0){
            setCurrentAmount(currentAmount => currentAmount - 1)
        }
    }

    return(
        <CardContainer>
            <div className="card-img">
                <img src={img_path} alt="Xícara com café" />
            </div>

            <div className="card-detail">
                {categ.map((element) => {
                    return <span key={element} className='coffee-type'>{element}</span>
                })}
                <h4>{name}</h4>
                <p>{detail}</p>
            </div>

            <div className="card-price-container">
                <span>R$<span className='price'>{price.toFixed(2)}</span></span>
                <div className="counter">
                    <button onClick={handleDecrease}><Minus color='#8047F8' size={15} weight='bold'/></button>
                    <span>{currentAmount}</span>
                    <button onClick={handleIncrease}><Plus color='#8047F8' size={15} weight='bold'/></button>
                </div>
                <button onClick={() => addToCart(item, currentAmount)}  className='shop-btn'><ShoppingCart size={22} weight='fill' color='#FFFFFF' /></button>
            </div>

        </CardContainer>
    )
}