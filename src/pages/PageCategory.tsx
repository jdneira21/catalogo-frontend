import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { ICategory } from '../interfaces'
import { getCategoria } from '../querys'
import useStore from '../store/useStore'

export default function PageCategory() {
  const addCart = useStore((state) => state.addCart)
  const cart = useStore((state) => state.cart)
  const { categoria } = useParams() as { categoria: string }

  const { data } = useQuery<ICategory>({
    queryKey: ['categoria', categoria],
    queryFn: () => getCategoria(categoria)
  })

  return (
    <>
      <div className='flex flex-col gap-4 p-4'>
        {JSON.stringify(cart)}
        {data?.productos.map((prod) => (
          <Card key={prod.id}>
            <CardMedia
              component='img'
              alt='green iguana'
              height='140'
              image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {prod.titulo}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className='flex flex-col gap-2'>
              <Button
                onClick={() => addCart(prod)}
                endIcon={<BsFillCartPlusFill />}
                variant='contained'
                size='medium'
                className='w-full'
                disableElevation>
                Agregar al carrito
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
}
