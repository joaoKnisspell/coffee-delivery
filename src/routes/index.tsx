//React-router-dom
import { Routes, Route } from 'react-router-dom'

//Layout
import { DefaultLayout } from '../layouts/default'

//Pages
import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { OrderDetail } from '../pages/OrderDetail'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/" element={<Home/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/orderdetail" element={<OrderDetail/>} />
            </Route>
        </Routes>
    )
}