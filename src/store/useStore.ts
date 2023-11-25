import { create } from 'zustand'
import { IProduct } from '../interfaces'

interface State {
  cart: IProduct[]
}

interface Action {
  addCart: (product: IProduct) => void
}

const initialState: State = {
  cart: []
}

export default create<State & Action>()((set, get) => ({
  ...initialState,
  addCart: (product) => {
    product = { ...product, cantidad: 1 }
    // product.cantidad = 1
    console.log(product)
    // product.cantidad
    // const cart = get().cart

    // const newCart3 = [...cart]

    // const newCart = newCart3.map((c) => ({ ...c, cantidad: 0 }))

    // this.cart.total = this.cart.products.reduce((a, b) => a + b.price, 0);

    // console.log(newCart)

    // const xx = newCart.find((c) => c.id == product.id)
    // xx?.cantidad++
    // console.log(xx)

    // const someProduct = cart.some((prod) => prod.id == product.id)
    // if (someProduct) return
    set((state) => {
      console.log(state)
      console.log(product)
      return { cart: [product, ...state.cart] }
    })
  }
}))
