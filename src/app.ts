import express, { Application } from 'express'
import indexRoutes from '@routes/index.routes'
import userRoutes from '@routes/users.routes'

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
      this.app.use(express.json()) // urlencoded({ extended: false }) para apenas json
    }

    routes () {
      this.app.use(indexRoutes)
      this.app.use('/users', userRoutes)
    }

    async listen () {
      await this.app.listen(this.app.get('port'))
      console.log('Server running in ' + this.app.get('port'))
    }
}
