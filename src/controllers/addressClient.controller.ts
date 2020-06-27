import { Request, Response } from 'express'
import { connect } from '../database'
import { AddressClient } from '@interfaces/AddressClient.interface'

export async function getAddressClients (req: Request, res: Response) {
  const conn = await connect()
  conn.query('SELECT * FROM endereco_cliente')
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function createAddressClient (req: Request, res:Response) {
  const newAddress: AddressClient = req.body
  const conn = await connect()
  conn.query('INSERT INTO endereco_cliente SET ?', [newAddress]).then(retorno => {
    console.log(retorno)
    return res.json(retorno[0].insertId)
  }).catch(error => {
    return res.status(500).send(error)
  })
}

export async function getAddressClientById (req: Request, res: Response) {
  const id = req.params.addressClientId
  const conn = await connect()
  conn.query('SELECT * FROM endereco_cliente WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function updateAddressClient (req: Request, res:Response) {
  const id = req.params.addressClientId
  const values: AddressClient = req.body
  const conn = await connect()
  conn.query('UPDATE endereco_cliente SET ? WHERE id = ?', [values, id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function deleteAddressClient (req: Request, res:Response) {
  const id = req.params.addressClientId
  const conn = await connect()
  conn.query('DELETE endereco_cliente WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}
