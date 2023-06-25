import styled from 'styled-components'

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.81rem;

    background-color: ${props => props.theme.button};
    padding: 1rem 0 1rem 1rem;
    border: 1px solid transparent;
    border-radius: 6px;
    width: 11.166875rem;

    font-size: 0.75rem;
    color: ${props => props.theme.text};
    text-transform: uppercase;
    
    &:hover{
        background-color: ${props => props.theme.purple100};
        border: 1px solid ${props => props.theme.purple500};
    }

    /* @media screen and (max-width: 550px){
        justify-content: center;
        gap: 0.5rem;

        padding: 1rem 0;
    } */
`
