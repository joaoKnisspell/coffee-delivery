//Icons
import { ShoppingCart, Package, Timer, Coffee  } from '@phosphor-icons/react'

//Styled-components
import { ListContainer, IconContainer } from './styles'

export function BannerList() {
    return (
        <ListContainer>
            <ul>
                <li><IconContainer bgcolor="#C47F17"><ShoppingCart size={16} weight="fill" /></IconContainer><span>Compra simples e segura</span></li>
                <li><IconContainer bgcolor="#272221"><Package size={16} weight="fill" /></IconContainer><span>Embalagem mantém o café intacto</span></li>
                <li><IconContainer bgcolor="#DBAC2C"><Timer size={16} weight="fill" /></IconContainer><span>Entrega rápida e rastreada</span></li>
                <li><IconContainer bgcolor="#8047F8"><Coffee size={16} weight="fill" /></IconContainer><span>O café chega fresquinho até você</span></li>
            </ul>
        </ListContainer>
    )
}