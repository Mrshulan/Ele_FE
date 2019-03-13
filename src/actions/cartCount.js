import { CART_ADD,CART_REDUC} from '../actionsTypes/cartCount'

export function addCart(data) {
  return {
    type: CART_ADD,
    data
  }
}

export function reduceCart(data) {
  return {
    type: CART_REDUC,
    data
  }
}