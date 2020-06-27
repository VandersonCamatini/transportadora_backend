import { Router } from 'express'
import { getClients, createClient, getClientById, updateClient, deleteClient } from '@controllers/clients.controller'
const router = Router()

router.route('/')
  .get(getClients)
  .post(createClient)

router.route('/:clientId')
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient)

export default router
