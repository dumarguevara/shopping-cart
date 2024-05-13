
export default function shoppingCartReducer(cart, action) {
  if (action.type == 'remove') {
    return removeItem(cart, action)
  } else if (action.type == 'qty-change') {
    return changeItemQty(cart, action)
  } else {
    return cart
  }
}

function removeItem(cart, action) {
  return {
      ...cart,
      products: cart.products.filter((product) => product.id != action.id)
  }
}

function changeItemQty(cart, action) {
  return {
      ...cart,
      products: cart.products.map(
        (product) => {
          if (product.id == action.id) {
            return {
              ...product,
              quantity: action.qty,
              total: product.price * action.qty
            }
          } else {
            return product
          }
        }
      )
  }
}