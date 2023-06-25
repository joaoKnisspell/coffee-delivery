//React
import { useContext, useState, useEffect } from 'react'

//Context
import { UserContext } from '../../contexts/userContext'

//Styled-components
import { CartPageContainer } from './styles'

//Icons
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'

//Components
import { DefaultInput } from '../../components/Input'
import { ButtonContainer } from '../../components/DefaultButton/styles'
import { CartProduct } from '../../components/CartProduct'

//React-hook-form
import { useForm } from 'react-hook-form'

//React-router-dom
import { useNavigate } from 'react-router-dom'

export function Cart() {

    const { cartList, sumOrderTotalPrice, itemsTotalPrice, updateOrderDetail, deleteCartList } = useContext(UserContext)
    const [orderDeliveryFee] = useState(5.50)
    const [orderTotalPrice, setOrderTotalPrice] = useState(orderDeliveryFee + itemsTotalPrice)
    const [payMethod, setPayMethod] = useState("Cartão de Crédito")

    const navigate = useNavigate()

    type FormDataProps = {
        cep: string
        rua: string
        numero: number
        complemento: string
        bairro: string
        cidade: string
        uf: string
    }

    const { register, handleSubmit, reset } = useForm<FormDataProps>()

    useEffect(() => {
        sumOrderTotalPrice(cartList)
        setOrderTotalPrice(orderDeliveryFee + itemsTotalPrice)
    }, [cartList, sumOrderTotalPrice, orderDeliveryFee, itemsTotalPrice])

    function submitOrder(data: FormDataProps) {

        if(cartList.length > 0){
            const orderDetailUpdated = {
                street: data.rua,
                number: data.numero,
                city: data.cidade,
                complement: data.complemento,
                paymentMethod: payMethod,
                uf: data.uf,
                neighborhood: data.bairro
            }
            updateOrderDetail(orderDetailUpdated)

            reset()

            deleteCartList()

            navigate("/orderDetail")
        }else{
            alert('Você não possui itens no carrinho!')
        }
    }



    return (
        <CartPageContainer onSubmit={handleSubmit(submitOrder)}>
            <section className="left-section">
                <h3>Complete seu pedido</h3>
                <div className="left-content">
                    <span className='left-title'><MapPinLine size={22} color='#C47F17' />Endereço de Entrega</span>
                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <div className="input-section">
                        <DefaultInput  {...register("cep", {required: true, })} className='cep' placeholder='CEP' />
                        <DefaultInput  {...register("rua", {required: true})} className='rua' placeholder='Rua'/>
                        <DefaultInput type='number'  {...register("numero", {required: true})} className='num' placeholder='Número'/>
                        <DefaultInput  {...register("complemento", {required: true})} className='com' placeholder='Complemento'/>
                        <DefaultInput  {...register("bairro", {required: true})} className='bai' placeholder='Bairo'/>
                        <DefaultInput  {...register("cidade", {required: true})} className='cid' placeholder='Cidade'/>
                        <DefaultInput  {...register("uf", {required: true})} className='uf' placeholder='UF'/>
                    </div>
                </div>

                <div className="left-content">
                    <span className='left-title'><CurrencyDollar size={22} color='#8047F8' />Pagamento</span>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <div className="button-section">
                        <ButtonContainer
                            onClick={() => setPayMethod("Cartão de Crédito")}
                            className={payMethod === "Cartão de Crédito" ? 'active' : ''}
                            type='button'
                        >
                            <CreditCard size={22} />Cartão de Crédito
                        </ButtonContainer>

                        <ButtonContainer
                            onClick={() => setPayMethod("Cartão de Débito")}
                            className={payMethod === "Cartão de Débito" ? 'active' : ''}
                            type='button'
                        >
                            <Bank size={22} />Cartão de Débito
                        </ButtonContainer>

                        <ButtonContainer
                            onClick={() => setPayMethod("Dinheiro")}
                            className={payMethod === "Dinheiro" ? 'active' : ''}
                            type='button'
                        >
                            <Money size={22} />Dinheiro
                        </ButtonContainer>
                    </div>
                </div>
            </section>

            <section className="right-section">
                <h3>Cafés selecionados</h3>
                <div className="right-content">
                    <div className="itens-container">
                        {cartList.map((item) => {
                            return (
                                <CartProduct
                                    key={item.id}
                                    item={item}
                                    name={item.name}
                                    img_path={item.img_path}
                                    amount={item.amount}
                                    price={item.price}
                                    id={item.id}
                                    detail={item.detail}
                                    total_price={item.total_price}
                                    categ={item.categ}
                                />
                            )
                        })}
                    </div>

                    <div className="order-checkout">
                        <div className="line">
                            <span>Total de itens</span>
                            <span>R$ {itemsTotalPrice.toFixed(2)}</span>
                        </div>

                        <div className="line">
                            <span>Entrega</span>
                            <span>R$ {orderDeliveryFee.toFixed(2)}</span>
                        </div>

                        <div className="line">
                            <span className='total'>Total</span>
                            <span className='total'>R$ {orderTotalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <button type='submit' className="confirm-btn">Confirmar pedido</button>
                </div>
            </section>
        </CartPageContainer>
    )
}