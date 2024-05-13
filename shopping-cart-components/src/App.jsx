import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { shoppingCart } from './data'

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    amount,
  )
}

function App() {
  return (
    <ShoppingCart {...shoppingCart} />
  )
}

function ShoppingCart({products, total, subtotal, shippingTotal, taxTotal}) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='layout'>
        <ItemList products={products} />
        <OrderSummary
          total={total}
          subtotal={subtotal}
          shippingTotal={shippingTotal}
          taxTotal={taxTotal} />
      </div>
    </div>
  )
}

function SummaryTotal({name, amount}) {
  const amountStyle = { textAlign: 'right' }
  return (
    <tr>
      <td>{name}</td>
      <td style={amountStyle}>{formatCurrency(amount)}</td>
    </tr>
  )
}

function OrderSummary({total, subtotal, shippingTotal, taxTotal}) {
  const btnStyle = {
    width: '100%',
    marginTop: '1rem'
  }
  return (
    <div className='order-summary'>
      <h2>Order Summary</h2>
      <table>
        <tbody>
          <SummaryTotal name="Subtotal" amount={subtotal} />
          <SummaryTotal name="Tax" amount={taxTotal} />
          <SummaryTotal name="Shipping" amount={shippingTotal} />
          <SummaryTotal name="Total" amount={total} />
        </tbody>
      </table>
      <button style={btnStyle}>Checkout</button>
    </div>
  )
}

function CartItem({id, title, price, quantity, total, discountPercentage, discountedPrice, thumbnail}) {
  return (
    <>
      <div className='cart-item-container'>
        <div className='cart-item-img'>
          <img src={thumbnail} />
        </div>
        <div className='cart-item-info'>
          <h3>{title}</h3>
          <div className='cart-item-price'>{price}</div>
          <select>
            <option value='1'>1</option>
          </select>
        </div>
        <div className='cart-item-remove'></div>
      </div>
      <hr />
    </>
  )
}

function ItemList({products}) {
  return (
    <div className='item-list'>
      {products.map((product) => <CartItem key={product.id} {...product} />)}
    </div>
  )
}

export default App
