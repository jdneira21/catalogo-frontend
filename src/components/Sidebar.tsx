import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { push as Menu, State } from 'react-burger-menu'
import { IoCloseCircle } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { getCategorias } from '../querys'
import useStore from '../store/useStore'

export default function Sidebar() {
  const totalProducts = useStore((state) => state.getTotalProducts())
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { data } = useQuery({
    queryKey: ['categorias'],
    queryFn: getCategorias
  })

  // console.log(data)

  const butt = (slug: string) => {
    navigate(slug)
    closeMenu()
  }

  const handleStateChange = (state: State) => {
    setOpen(state.isOpen)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <>
      <Menu
        isOpen={open}
        onStateChange={(state) => handleStateChange(state)}
        customBurgerIcon={<TiThMenu />}
        customCrossIcon={<IoCloseCircle />}>
        <button onClick={() => butt('/')}>Inicio</button>
        <button onClick={() => butt('/panel')}>Panel</button>
        {data?.map((cat) => (
          <a key={cat.id} onClick={() => butt(cat.slug)}>
            {cat.nombre}
          </a>
        ))}
      </Menu>
      <div className='bg-blue-600 text-white'>{totalProducts}</div>
    </>
  )
}
