import React from 'react'

export const CartComponent = () => {
       const dispatch = useDispatch()
        const total = useSelector((state) => state.cart.total);
        const cart = useSelector((state) => state.cart.items)
        const handleRemoveFromCart = (id) => {
            dispatch(removeFromCart(id))
        }
    
  return (
    <div
                className={
                    isCartOpen == true
                        ? `${styledNavbar.cartActive}`
                        : `${styledNavbar.cart} `
                }
            >
                <div className="flex gap-4 cursor-pointer">
                    {/*BOTON PARA CERRAR EL CARRITO */}
                    <X
                        color="#FF7D00"
                        className="cursor-pointer"
                        size={30}
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    />
                    <h2 className="text-2xl text-[#FF7D00]">Carrito...</h2>
                </div>
                <List query={`${styledNavbar.itemsContainer}`}>
                    {cart.length === 0 ? <p className="font-serif text-2xl">El carrito está vacio...</p> :
                        cart.map((e) => {
                            return (<li key={e.id} className={`${styledNavbar.cartItem}`}>
                                <X onClick={() => handleRemoveFromCart(e.id)} className={`${styledNavbar.closeCartBtn}`} color="#FF7D00" size={30} />
                                <img src={e.image} />
                                <div className={`${styledNavbar.itemInfo}`}>
                                    <h4>{e.name}</h4>
                                    <p>Precio: ${e.price * e.quantity}</p>
                                    <div className={`${styledNavbar.quantityControls}`}>
                                        <button  onClick={() => {
                                            dispatch(updateQuantity({ id: e.id, quantity: e.quantity + 1 }))
                                            dispatch(calculateTotal())
                                        }}>
                                            +
                                        </button>
                                        <span>{e.quantity}</span>
                                        <button
                                            onClick={() => {
                                                if (e.quantity > 1) {
                                                    dispatch(updateQuantity({ id: e.id, quantity: e.quantity - 1 }));
                                                    dispatch(calculateTotal())
                                                } else {
                                                    dispatch(removeFromCart(e.id));
                                                    dispatch(calculateTotal())
                                                }
                                            }}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </li>
                            )
                        })
                    }
                </List>
                <div className="absolute bottom-[10px] flex items-center justify-around w-[100%] right-0 ">
                    <h4 className="text-2xl text-[#FF7D00] ">Total: ${total}</h4>
                    <button className={`${styledNavbar.buttonCart}`}>Comprar</button>
                </div>
            </div>
  )
}
