//Styled-components
import { HeaderContainer, BtnsContainer, LocationBtn, CartBtn, CartProductsAmmount} from './styles'

//Icons
import { ShoppingCart, MapPin } from '@phosphor-icons/react'

//Logo
import logo from '../../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/userContext'


export function Header(){

    const { cartList } = useContext(UserContext)

    return(
        <HeaderContainer>

            <div>
                <NavLink to="/"><img src={logo} className="logo-mobile" alt="texto escrito coffe delivery ao lado de um copo de café com um desenho de foguete no meio"/></NavLink>
            </div>

            <BtnsContainer>
                <LocationBtn><MapPin size={22} weight='fill' /> Porto Alegre, RS</LocationBtn>
                <NavLink to="/cart">
                    <CartBtn>
                        {cartList.length > 0 ? <CartProductsAmmount>{cartList.length}</CartProductsAmmount> : ''}
                        <ShoppingCart size={22} weight='fill' />
                    </CartBtn>
                </NavLink>
            </BtnsContainer>

        </HeaderContainer>
    )
}