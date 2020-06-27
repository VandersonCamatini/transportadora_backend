import { Request, Response } from 'express'
import { connect } from '../database'
import { Load } from '@interfaces/Load.interface'

export async function getLoads (req: Request, res: Response) {
  const conn = await connect()
  conn.query('SELECT * FROM carga')
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function createLoad (req: Request, res: Response) {
  const newLoad: Load = req.body
  const conn = await connect()
  conn.query('INSERT INTO carga SET ?', [newLoad])
    .then(retorno => {
      return res.json(retorno[0].insertId)
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function getLoadById (req: Request, res: Response) {
  const id = req.params.loadId
  const conn = await connect()
  conn.query('SELECT * FROM carga WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function deleteLoad (req: Request, res: Response) {
  const id = req.params.loadId
  const conn = await connect()
  conn.query('DELETE FROM carga WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return error.status(500).send(error)
    })
}

export async function updateLoad (req: Request, res: Response) {
  const id = req.params.loadId
  const values: Load = req.body
  const conn = await connect()
  conn.query('UPDATE carga SET ? WHERE id = ?', [values, id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}
