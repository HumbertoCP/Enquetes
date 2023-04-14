import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri,
      { useUnifiedTopology: true })
  },
  async disconnect (): Promise<void> {
    await this.client?.close()
    this.client = null
  },
  async getCollection (name: string): Collection {
    if (!this.client) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map: async (collection: any): Promise<any> => {
    const Collection = await MongoHelper.getCollection('accounts')

    const { insertedId: id } = collection
    const collectionById = await Collection.findOne({ _id: id })
    const { _id, ...collectionWithoutId } = collectionById

    const result = Object.assign({}, collectionWithoutId, { id: _id.toHexString() })

    return result
  }
}
