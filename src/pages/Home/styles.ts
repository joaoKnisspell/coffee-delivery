import styled from 'styled-components'

export const HomeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    padding: 5.75rem 0;



    .text-box{
        max-width: 36.75rem;
        h1{
            font-family: 'Baloo 2';
            font-weight: 800;
            font-size: 3rem;
            line-height: 1.3;
            margin-bottom: 1rem;
        }
        p{
            font-family: 'Roboto';
            font-size: 1.25rem;
            line-height: 1.3;
            margin-bottom: 4.125rem;
        }
    }

    @media screen and (max-width: 400px) {
        padding: 0rem 0rem 2rem 0rem;

        .text-box{
            text-align: center;

            h1{
                font-size: 2.3rem;
                margin-bottom: 1.5rem;
            }

            p{
                margin-bottom: 3rem;
            }
        }
    }

    .main-img{
        max-width: 29.75rem;
    }

    main{

        margin-top: 2rem;

        h3{
            font-family: 'Baloo 2';
            font-size: 2rem;
            font-weight: 800;

            @media screen and (max-width: 1165px){
                text-align: center;
            }
        }

        .cards-section{
            margin-top: 3.375rem;

            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 2.5rem 2rem;

            @media screen and (max-width: 1165px){
                justify-content: center;
            }
        }


    }
`
