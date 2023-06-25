//React
// import { useContext } from 'react'

//Styled-components
import { HomeContainer } from './styles'

//Banner
import banner from '../../assets/img/banner.png'

//Components
import { Card } from '../../components/Card'
import { BannerList } from '../../components/BannerList'

//Data
import data from "../../db/db.json"

//Context
// import { UserContext } from '../../contexts/userContext'


export function Home(){

    // const { cartList } = useContext(UserContext)

    return(
        <HomeContainer>
            <div className="text-box">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <BannerList />
            </div>
            <div className="main-img">
                <img src={banner} alt="" />
            </div>

            <main>
                <h3>Nossos cafés</h3>
                <div className="cards-section">
                    {data.products.map((item) => {
                        return(
                            <Card 
                                id={item.id}
                                total_price={item.total_price}
                                item={item}
                                key={item.id} 
                                name={item.name} 
                                img_path={item.img_path} 
                                categ={item.categ}
                                price={item.price}
                                amount={item.amount}
                                detail={item.detail}
                            />
                        )
                    })}
                </div>
            </main>
        </HomeContainer>
    )
}