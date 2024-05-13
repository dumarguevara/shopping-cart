import { useReducer } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { shoppingCart as initialState } from './data'
import shoppingCartReducer from './shoppingCartReducer'

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    amount,
  )
}

function App() {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialState)

  function handleRemoveItem(productToRemoveId) {
    dispatch({
      type: 'remove',
      id: productToRemoveId
    })
  }

  function handleItemQtyChange(productToUpdateId, newQty) {
    dispatch({
      type: 'qty-change',
      id: productToUpdateId,
      qty: newQty
    })
  }


  return (
    <ShoppingCart
      {...cart}
      onItemRemove={handleRemoveItem}
      onItemQtyChange={handleItemQtyChange} />
  )
}

function ShoppingCart({
    products,
    total,
    subtotal,
    shippingTotal,
    taxTotal,
    onItemRemove,
    onItemQtyChange
  }) {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='layout'>
        <ItemList
          products={products}
          onItemRemove={onItemRemove}
          onItemQtyChange={onItemQtyChange} />
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

function CartItem({
    id,
    title,
    price,
    quantity,
    total,
    discountPercentage,
    discountedPrice,
    thumbnail,
    onItemRemove,
    onItemQtyChange
  }) {
  return (
    <>
      <div className='cart-item-container'>
        <div className='cart-item-img'>
          <img src={thumbnail} />
        </div>
        <div className='cart-item-info'>
          <h3>{title}</h3>
          <div className='cart-item-price'>{formatCurrency(price)}</div>
          <div className='cart-item-price-total'>{formatCurrency(total)}</div>
          <select
            onChange={(e) => onItemQtyChange(id, parseInt(e.target.value))}
            value={quantity}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
          </select>
        </div>
        <div className='cart-item-remove'>
          <button onClick={() => onItemRemove(id)}>x</button>
        </div>
      </div>
      <hr />
    </>
  )
}

function ItemList({products, onItemRemove, onItemQtyChange}) {
  return (
    <div className='item-list'>
      {
        products.map((product) => (
          <CartItem
            {...product}
            key={product.id}
            onItemRemove={onItemRemove}
            onItemQtyChange={onItemQtyChange} />
        ))
      }
    </div>
  )
}

export default App
