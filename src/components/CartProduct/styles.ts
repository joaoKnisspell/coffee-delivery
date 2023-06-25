import styled from 'styled-components'

export const CartProductContainer = styled.div`
    width: 100%;
    padding: .5rem .25rem 1.5rem .5rem;
    margin-bottom: 1.5rem;

    display: flex;
    justify-content: space-between;

    border-bottom: 2px solid ${props => props.theme.button};

    .product-img{
        width: 4rem;
        height: 4rem;
    }

    .product-detail{

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;

        span{
            font-size: 1rem;
            color: ${props => props.theme.subtitle};
        }

        .btn-section{

            display: flex;
            align-items: center;

            .counter{
            width: 72px;
            padding: .5rem;
            margin-left: auto;
            margin-right: .5rem;

            display: flex;
            justify-content: space-between;

            background-color: ${props => props.theme.button};
            border-radius: 6px;

                span{
                    max-width: 1.5rem;
                    font-size: 1rem;
                    text-align: center;
                    font-weight: 700;
                }
            }

            .remove-btn{
                background-color: ${props => props.theme.button};
                border-radius: 6px;
                color: ${props => props.theme.text};
                padding: .5rem;
                text-transform: uppercase;
                font-size: .75rem;
                gap:.25rem;
            }

        }
    }

    .product-price{
        color: ${props => props.theme.text};
        font-weight: 700;
        font-size: 1rem;
    }

    @media screen and (max-width: 450px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        .product-img{
            width: 5rem;
            height: 5rem;
        }

        .product-detail{
            align-items: center;
        }
    }
`