import { Button } from '@mui/material'
import DialogCategory from '../components/DialogCategory'
import Table from '../components/Table'
import useStore from '../store/useStore'

export default function PagePanel() {
  const setStateDialogCategory = useStore((state) => state.setStateDialogCategory)
  const setStateDialogProduct = useStore((state) => state.setStateDialogProduct)
  return (
    <>
      <div className='flex flex-col gap-4 p-2'>
        <div className='flex gap-2'>
          <Button
            onClick={() => setStateDialogCategory(true)}
            variant='contained'
            disableElevation
            size='small'
            className='!capitalize'>
            Categorías
          </Button>
          <Button
            onClick={() => setStateDialogProduct(true)}
            variant='contained'
            disableElevation
            size='small'
            className='!capitalize'>
            Nuevo Producto
          </Button>
          <Button variant='contained' disableElevation size='small' className='!capitalize'>
            Config WhatsApp
          </Button>
        </div>
        <Table />
        {/* <div>
      </div> */}
      </div>
      <DialogCategory />
    </>
  )
}
