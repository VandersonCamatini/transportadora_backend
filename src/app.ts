import express, { Application } from 'express'
import indexRoutes from '@routes/index.routes'
import clientRoutes from '@routes/clients.routes'
import LoadRoutes from '@routes/loads.routes'
import addressClientRoutes from '@routes/addressClient.routes'
import addressLoadRoutes from '@routes/addressLoad.routes'

export class App {
    private app: Application;

    constructor (private port?: number | string) {
      this.app = express()
      this.settings()
      this.middlewares()
      this.routes()
    }

    settings () {
      this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middlewares () {
      this.app.use(express.json()) // urlencoded({ extended: false }) para apenas json e formulario
    }

    routes () {
      this.app.use(indexRoutes)
      this.app.use('/clients', clientRoutes)
      this.app.use('/addressClients', addressClientRoutes)
      this.app.use('/loads', LoadRoutes)
      this.app.use('/addressLoads', addressLoadRoutes)
    }

    async listen () {
      await this.app.listen(this.app.get('port'))
      console.log('Server running in ' + this.app.get('port'))
    }
}
