import { Router } from 'express'
import { getLoads, createLoad, getLoadById, updateLoad, deleteLoad } from '@controllers/loads.controller'
const router = Router()

router.route('/')
  .get(getLoads)
  .post(createLoad)

router.route('/:loadId')
  .get(getLoadById)
  .put(updateLoad)
  .delete(deleteLoad)

export default router
