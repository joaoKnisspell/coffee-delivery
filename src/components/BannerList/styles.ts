import styled from 'styled-components'

export const ListContainer = styled.div`
    max-width: 35.4375rem;
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem 2.5rem;
        li{
            /* width: 14.4375rem; */
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: .75rem;
        }
    }
`

interface IconProps {
    bgcolor: '#C47F17' | '#DBAC2C' | '#8047F8' | '#272221' 
}

export const IconContainer = styled.span<IconProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    background-color: ${props => props.bgcolor};
`