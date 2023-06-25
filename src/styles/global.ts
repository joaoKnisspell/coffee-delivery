import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme.text};
    }

    button, input, textarea{
        font-family: 'Roboto', sans-serif;
        background-color: transparent;
        border: none;
    }

    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 100%;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`