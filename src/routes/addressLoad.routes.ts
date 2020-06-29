import { Router } from 'express'
import { getAddressLoads, createAddressLoad, getAddressLoadById, updateAddressLoad, deleteAddressLoad } from '@controllers/addressLoad.controller'

const router = Router()

router.route('/')
  .get(getAddressLoads)
  .post(createAddressLoad)

router.route('/:addressLoadId')
  .get(getAddressLoadById)
  .put(updateAddressLoad)
  .delete(deleteAddressLoad)

export default router
