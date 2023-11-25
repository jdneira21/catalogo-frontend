import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { push as Menu, State } from 'react-burger-menu'
import { IoCloseCircle } from 'react-icons/io5'
import { TiThMenu } from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import { ICategory } from '../interfaces'
import { getCategorias } from '../querys'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { data } = useQuery<ICategory[]>({
    queryKey: ['categorias'],
    queryFn: getCategorias
  })

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
    <Menu
      isOpen={open}
      onStateChange={(state) => handleStateChange(state)}
      customBurgerIcon={<TiThMenu />}
      customCrossIcon={<IoCloseCircle />}>
      <button onClick={() => butt('/')}>Inicio</button>
      {data?.map((cat) => (
        <button key={cat.id} onClick={() => butt(cat.slug)}>
          {cat.nombre}
        </button>
      ))}
    </Menu>
  )
}
