import { Request, Response } from 'express'
import { connect } from '../database'
import { User } from '@interfaces/User.interface'

export async function getUsers (req: Request, res: Response): Promise<Response> {
  const conn = await connect()
  const users = await conn.query('SELECT * FROM users')
  return res.json(users[0])
}

export async function createUser (req: Request, res: Response): Promise<Response> {
  const newUser: User = req.body
  const conn = await connect()
  await conn.query('INSERT INTO users SET ?', [newUser])
  return res.json({
    message: 'User created'
  })
}

export async function getUserById (req: Request, res: Response): Promise<Response> {
  const id = req.params.userId
  const conn = await connect()
  const user = await conn.query('SELECT * FROM users WHERE id = ?', [id])
  return res.json(user[0])
}

export async function deleteUser (req: Request, res: Response): Promise<Response> {
  const id = req.params.userId
  const conn = await connect()
  await conn.query('DELETE FROM users WHERE id = ?', [id])
  return res.json({
    message: 'User deleted'
  })
}

export async function updateUser (req: Request, res: Response): Promise<Response> {
  const id = req.params.userId
  const user: User = req.body
  const conn = await connect()
  await conn.query('UPDATE users SET ? WHERE id = ?', [user, id])
  return res.json({
    message: 'User updated'
  })
}
