import { Button } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { ICategoria } from '../interfaces'
import { getCategoria } from '../querys'
import useStore from '../store/useStore'

export default function PageCategory() {
  const addCart = useStore((state) => state.addCart)
  const cart = useStore((state) => state.cart)
  const { categoria } = useParams() as { categoria: string }

  console.log('PageCategory')

  const { data } = useQuery<ICategoria>({
    queryKey: ['categoria', categoria],
    queryFn: () => getCategoria(categoria)
  })

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4'>
        {data?.productos.map((prod) => (
          <div className='flex flex-col gap-2 shadow-md rounded p-1'>
            <img
              key={prod.id}
              src='https://mui.com/static/images/cards/contemplative-reptile.jpg'
              className='revealing-image rounded border-2 border-white'
            />
            <h1>{prod.nombre}</h1>
            <h1>{prod.precio}</h1>
            <h1>{prod.descripcion}</h1>
            <Button
              onClick={() => addCart(prod)}
              endIcon={<BsFillCartPlusFill />}
              variant='contained'
              size='medium'
              className='w-full'
              disableElevation>
              Agregar al carrito
            </Button>
          </div>
        ))}
      </div>
      <Sidebar />
    </>
  )
}
