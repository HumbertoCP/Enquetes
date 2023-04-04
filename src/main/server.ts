import env from './config/env'
import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import app from './config/app'

MongoHelper.connect(env.mongoUrl)
  .then(() => {
    app.listen(env.port, () => console.log(`App running! Listening on port ${env.port}`))
  })
  .catch(console.error)
