import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CheckoutCards.css'
import { removeProduct } from '../store/ducks/productsCart';

const CheckoutCards = () => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cartReducer.cart,
  );

  const [address, setAddress] = useState({
    street: '',
    number: '',
  });

  return (
    <div>


      {Object.keys(cart).map((keyName, i) => (
        <div className="card">
          <h3>
            {cart[keyName].quantity}
          </h3>
          <h3>
            {cart[keyName].name}
          </h3>
          <h3>
            R$: {cart[keyName].price * cart[keyName].quantity}
          </h3>
          <h4>
            Preco unitario R$: {cart[keyName].price}
          </h4>
          <button onClick={() => dispatch(removeProduct('2'))} >X</button>
        </div>
      ))}

      <div className="form">
        <form>
          <h3>Endereço</h3>
          <label>
            Rua:
        <input
              name="street"
              type="text"
              data-testid="checkout-street-input"
              placeholder="Digit seu rua"
              value={address.street}
              onChange={(event) =>
                setAddress({ ...address, [event.target.name]: event.target.value })
              }
            />
          </label>
          <label>
          Número da casa:
        <input
              name="number"
              type="text"
              data-testid="checkout-house-number-input"
              placeholder="Digit seu rua"
              value={address.number}
              onChange={(event) =>
                setAddress({ ...address, [event.target.name]: event.target.value })
              }
            />
          </label>
        </form>
      </div>

    </div>
  )
}
export default CheckoutCards;
