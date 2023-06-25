import styled from 'styled-components'

export const DefaultInput = styled.input`
    background-color: ${props => props.theme.button};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.input};
    padding: 0.75rem;

    &::placeholder{
        color: ${props => props.theme.label};
    }
`

