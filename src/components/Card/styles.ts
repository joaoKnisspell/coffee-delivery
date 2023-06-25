import styled from 'styled-components'

export const CardContainer = styled.div`
    position: relative;

    width: 16rem;
    padding: 0 1.5rem 1.25rem 1.5rem;
    background-color: ${props => props.theme.card};
    border-radius: 6px 36px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    .card-detail{

        .coffee-type{
            background-color: ${props => props.theme.yellow100};
            border-radius: 8px;
            padding: .25rem .5rem;
            color: ${props => props.theme.yellow900};
            font-weight: 700;
            text-transform: uppercase;
            font-size: 0.625rem;
            margin-right: 0.25rem;
        }

        h4{
            margin: 1rem 0 .5rem 0;
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.25rem;
        }

        p{
            line-height: 1.3;
            color: ${props => props.theme.label};
        }

    }

    .card-img{
        margin: -11% 0% .75rem 0%;
    }

    .card-price-container{
        margin-top: 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .price{
            font-family: 'Baloo 2';
            font-weight: 800;
            font-size: 1.5rem;
            margin-left: .25rem;
        }

        .counter{
            width: 72px;
            padding: .5rem;
            margin-left: auto;
            margin-right: .5rem;

            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color: ${props => props.theme.button};
            border-radius: 6px;

            span{
                max-width: 1.25rem;
                font-size: 1rem;
                text-align: center;
                font-weight: 700;
            }
        }

        .shop-btn{
            background-color: ${props => props.theme.purple900};
            padding: .5rem;
            border-radius: 6px;
        }
    }


`