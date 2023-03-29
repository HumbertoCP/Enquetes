import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export const map = async (result: any): Promise<AccountModel> => {
  const accountCollection = MongoHelper.getCollection('accounts')

  const { insertedId: id } = result
  const accountById = await accountCollection.findOne({ _id: id })
  const { _id, ...accountWithoutId } = accountById

  const account = Object.assign({}, accountWithoutId, { id: _id.toHexString() }) as AccountModel

  return account
}
