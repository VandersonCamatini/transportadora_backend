import { Request, Response } from 'express'
import { connect } from '../database'
import { AddressLoad } from '@interfaces/AddressLoad.interface'

export async function getAddressLoads (req: Request, res: Response) {
  const conn = await connect()
  conn.query('SELECT * FROM endereco_carga')
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function createAddressLoad (req: Request, res:Response) {
  const newAddress: AddressLoad = req.body
  const conn = await connect()
  conn.query('INSERT INTO endereco_carga SET ?', [newAddress])
    .then(retorno => {
      console.log(retorno)
      return res.json(retorno[0].insertId)
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function getAddressLoadById (req: Request, res: Response) {
  const id = req.params.addressLoadId
  const conn = await connect()
  conn.query('SELECT * FROM endereco_carga WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function updateAddressLoad (req: Request, res:Response) {
  const id = req.params.addressLoadId
  const values: AddressLoad = req.body
  const conn = await connect()
  conn.query('UPDATE endereco_carga SET ? WHERE id = ?', [values, id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function deleteAddressLoad (req: Request, res:Response) {
  const id = req.params.addressLoadId
  const conn = await connect()
  conn.query('DELETE FROM endereco_carga WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}
