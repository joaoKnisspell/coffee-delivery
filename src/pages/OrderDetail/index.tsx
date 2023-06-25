//React
import { useContext } from "react"

//Context
import { UserContext } from "../../contexts/userContext"

//Styled-components
import { PageContainer, Icone, ErrorContainer } from "./styles"

//Icons
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react"

//Photo
import photo from '../../assets/img/Illustration.png'
import { NavLink } from "react-router-dom"

export function OrderDetail() {

    const { orderDetail } = useContext(UserContext)

    console.log(orderDetail)


    return (
        <PageContainer>
            {orderDetail.street !== '' ?
                <>
                    <div className="left-container">
                        <div className="first-block">
                            <h1>Uhu! Pedido confirmado</h1>
                            <p>Agora é só aguardar que logo o café chegará até você</p>
                        </div>

                        <div className="second-block">
                            <div className="item">
                                <Icone bgcolor="#8047F8">
                                    <MapPin weight="fill" size={16} color="#FFFFFF" />
                                </Icone>
                                <div className="detail">
                                    <p>Entrega em <span className="highlight">{orderDetail.street}, {orderDetail.number}</span></p>
                                    <p>{orderDetail.neighborhood} - {orderDetail.city}, {orderDetail.uf}</p>
                                </div>
                            </div>

                            <div className="item">
                                <Icone bgcolor="#DBAC2C">
                                    <Timer weight="fill" size={16} color="#FFFFFF" />
                                </Icone>
                                <div className="detail">
                                    <p>Previsão de entrega</p>
                                    <p><span className="highlight">20 min - 30 min</span></p>
                                </div>
                            </div>

                            <div className="item">
                                <Icone bgcolor="#C47F17">
                                    <CurrencyDollar size={16} color="#FFFFFF" />
                                </Icone>
                                <div className="detail">
                                    <p>Pagamento na entrega</p>
                                    <p><span className="highlight">{orderDetail.paymentMethod}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-container">
                        <img src={photo} alt="Entregador em cima de uma moto em movimento, indicando que seu pedido esta à caminho." />
                    </div>
                </>

                :   <ErrorContainer>
                        <span>Você não tem pedidos em aberto no momento!</span>
                            <NavLink className='link-btn' to="/">Página Inicial</NavLink>
                    </ErrorContainer>
                }
        </PageContainer>
    )
}