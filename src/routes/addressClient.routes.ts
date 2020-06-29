import { Router } from 'express'
import { getAddressClients, createAddressClient, getAddressClientById, updateAddressClient, deleteAddressClient } from '@controllers/addressClient.controller'

const router = Router()

router.route('/')
  .get(getAddressClients)
  .post(createAddressClient)

router.route('/:addressClientId')
  .get(getAddressClientById)
  .put(updateAddressClient)
  .delete(deleteAddressClient)

export default router
