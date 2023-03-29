import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },
  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: async (collection: any): Promise<any> => {
    const Collection = MongoHelper.getCollection('accounts')

    const { insertedId: id } = collection
    const collectionById = await Collection.findOne({ _id: id })
    const { _id, ...collectionWithoutId } = collectionById

    const result = Object.assign({}, collectionWithoutId, { id: _id.toHexString() })

    return result
  }
}
