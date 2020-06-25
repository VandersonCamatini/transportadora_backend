import { Router } from 'express'
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '@controllers/users.controller'
const router = Router()

router.route('/')
  .get(getUsers)
  .post(createUser)

router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

export default router
