import { Request, Response } from 'express'
import { connect } from '../database'
import { Client } from '@interfaces/Client.interface'

export async function getClients (req: Request, res: Response) {
  const conn = await connect()
  conn.query(`SELECT 
                c.*, ec.logradouro, ec.numero,
                ec.bairro, ec.estado, ec.cidade, ec.id AS idEndereco
              FROM 
                cliente c
              INNER JOIN
                endereco_cliente ec
              WHERE 
                ec.idCliente = c.id `)
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function createClient (req: Request, res: Response) {
  const newClient: Client = req.body
  const conn = await connect()
  conn.query('INSERT INTO cliente SET ?', [newClient])
    .then(retorno => {
      return res.json(retorno[0].insertId)
    }).catch(error => {
      console.log(error)
      return res.status(500).send(error)
    })
}

export async function getClientById (req: Request, res: Response) {
  const id = req.params.clientId
  const conn = await connect()
  conn.query('SELECT * FROM cliente WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0])
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function deleteClient (req: Request, res: Response) {
  const id = req.params.clientId
  const conn = await connect()
  conn.query('DELETE FROM cliente WHERE id = ?', [id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}

export async function updateClient (req: Request, res: Response) {
  const id = req.params.clientId
  const client: Client = req.body
  const conn = await connect()
  conn.query('UPDATE cliente SET ? WHERE id = ?', [client, id])
    .then(retorno => {
      return res.json(retorno[0].affectedRows)
    }).catch(error => {
      return res.status(500).send(error)
    })
}
