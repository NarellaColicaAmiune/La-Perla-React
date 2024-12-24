import './CartWidget.css'
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
    return (
        <div className="cart">
            <p>0</p>
            <IoMdCart/>
        </div>
    )
}

export default CartWidget