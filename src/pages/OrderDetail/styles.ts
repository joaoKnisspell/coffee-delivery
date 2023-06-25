import styled from 'styled-components'


export const PageContainer = styled.div`
    margin-top: 5rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 6.375rem;

    @media screen and (max-width: 1100px){
        justify-content: center;
    }

    .left-container{
        max-width: 32.875rem;

        display: flex;
        flex-direction: column;
        gap: 2.5rem;

        .first-block{
            h1{
                font-family: 'Baloo 2';
                font-family: 800;
                font-size: 2rem;
                line-height: 1.3;

                margin-bottom: .25rem;

                color: ${props => props.theme.yellow900};
            }

            p{
                color: ${props => props.theme.subtitle};
                font-size: 1.25rem;
            }
        }

        .second-block{
            border-image: linear-gradient(#DBAC2C, #8047F8) 30;
            border-width: 1px;
            border-style: solid;

            padding: 2.5rem;

            display: flex;
            flex-direction: column;
            gap: 2rem;

            .item{
                height: 2.625rem;

                display: flex;
                justify-content: flex-start;
                gap: .75rem;

                .detail{
                    p{
                        font-size: 1rem;
                    }
                    .highlight{
                        font-weight: 700;
                    }
                }
            }
        }
    }

    .right-container{
        max-width: 30.75rem;
    }

    @media screen and (max-width: 400px){
           margin-top: 0;
           gap: 1.5rem;

        .left-container{
            .first-block{
                text-align: center;
            }

            .second-block{
                padding: 1rem;
                gap: 1rem;
            }
        }
    }
`

export const ErrorContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    span{
        font-size: 2.5rem;
        font-family: 'Baloo 2';
        font-weight: 700;
    }

    .link-btn{
        width: 18.75rem;
        height: 3.125rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 6px;
        padding: 1.5rem 0;
        cursor: pointer;
        
        background-color: ${props => props.theme.yellow900};
        color: ${props => props.theme.white};
        font-size: 1.8rem;
        font-weight: 700;
    }        
`

interface IconProps {
    bgcolor: '#8047F8' | '#DBAC2C' | '#C47F17'
}

export const Icone = styled.div<IconProps>`
    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    background-color: ${props => props.bgcolor};

    display: flex;  
    align-items: center;
    justify-content: center;           
`