import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    @media screen and (max-width: 400px){
        .logo-mobile{
            width: 120px;
        }

        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`

export const BtnsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
`

const BaseBtn = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: .5rem;
    border-radius: 8px;

    /* @media screen and (max-width: 350px){
        font-size: 10px;
    } */
`

export const LocationBtn = styled(BaseBtn)`
    color: ${props => props.theme.purple500};
    background-color: ${props => props.theme.purple100};
`

export const CartBtn = styled(BaseBtn)`
    color: ${props => props.theme.yellow900};
    background-color: ${props => props.theme.yellow100};

    position: relative;
`

export const CartProductsAmmount = styled.span`
    position: absolute;
    top: 7%;
    right: 0%;
    transform: translate(45%, -50%);
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: #C47F17;
    color: #FFFFFF;
    font-size: .75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
`