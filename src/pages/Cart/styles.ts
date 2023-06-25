import styled from 'styled-components'

export const CartPageContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    h3{
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-weight: 700;
    }

    .left-content, .right-content {
        background-color: ${props => props.theme.card};

        margin-top: 1rem;
        padding: 2.5rem;
    }

    .left-content{
        max-width: 40rem;
        border-radius: 6px;

        .left-title{
            display: flex;
            align-items: center;
            gap: .5rem;

            font-size: 1rem;
            font-weight: 400;

            color: ${props => props.theme.subtitle};
        }

        p{
            margin-left: 1.875rem;
            margin-top: .2rem;

            font-size: 0.875rem;

            color: ${props => props.theme.text};
        }

        .input-section{
            margin-top: 2rem;

            display: grid;
            grid-template-areas:
                "cep . ." 
                "rua rua rua"
                "num com com"
                "bai cid uf"
            ;
            gap: 1rem .75rem;

            .cep{
                grid-area: cep;
            }

            .rua{
                grid-area: rua;
            }

            .num{
                grid-area: num;
            }

            .com{
                grid-area: com;
            }

            .bai{
                grid-area: bai;
                width: 12.5rem;
            }

            .cid{
                grid-area: cid;
                width: 17.25rem;
            }

            .uf{
                grid-area: uf;
                width: 3.75rem;
            }

            /* @media screen and (max-width: 700px){
                display: flex;
                flex-wrap: wrap;
                max-width: 100%;
            } */
        }

        .button-section{
            margin-top: 2rem;
            width: 100%;

            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
    }

    .right-content{
        width: 28rem;
        border-radius: 6px 44px;

        .order-checkout{
            margin-top: 1.5rem;
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            .line{
                display: flex;
                justify-content: space-between;

                .total{
                    font-size: 1.25rem;
                    font-weight: 700;
                }
            }
        }

        .confirm-btn{
            margin-top: 1.5rem;
            width: 100%;
            height: 2.875rem;
            border-radius: 6px;

            text-transform: uppercase;

            background-color: ${props => props.theme.yellow500};
            color: ${props => props.theme.white};

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 0.875rem;
        }
        
    }

    .active{
        background-color: ${props => props.theme.purple100};
        border: 1px solid ${props => props.theme.purple500};
    }

    @media screen and (max-width: 700px){

            .left-content{
                padding: 1rem;
                max-width: 90vw;


                .input-section{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    max-width: 100%;
                    input{
                        width: 30%;
                    }

                    .bai{
                        grid-area: bai;
                        width: 30%;
                     }

                    .cid{
                        grid-area: cid;
                        width: 30%;
                    }

                    .uf{
                        grid-area: uf;
                        width: 20%;
                    }
                }
            }
    }

    @media screen and (max-width: 550px){
        .left-content{
            padding: 2rem;
            .input-section{
                input{
                    width: 100%;
                }

                .bai{
                        grid-area: bai;
                        width: 35%;
                     }

                    .cid{
                        grid-area: cid;
                        width: 35%;
                    }

                    .uf{
                        grid-area: uf;
                        width: 20%;
                    }
            }

            
            .button-section{
                flex-direction: column;
            }
            
        }

        .right-content{
            width: 90vw;
        }
    }

`