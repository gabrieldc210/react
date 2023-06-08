import './CartWidget.css'

const CartWidget = () => {

    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/4/4295.png?w=740&t=st=1686181407~exp=1686182007~hmac=5780aa8724d9e0211e3ac5c311da6c975ed13a5b782fd54a2e81e371dc37c61f"
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito" />
            <strong>10</strong>
        </div>
    )
}

export default CartWidget