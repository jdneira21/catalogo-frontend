export interface ICategory {
  id: number
  nombre: string
  slug: string
  productos: IProduct[]
}

export interface IProduct {
  id: number
  titulo: string
  precio: number
  cantidad: number
}
