import Realm from 'realm'

class Bookmark extends Realm.Object {}

Bookmark.schema = {
  name: 'Bookmark',
  properties: {
    _id: 'string',
    title: 'string',
    author: 'string',
    imageHeader: 'string',
    content: 'string',
    createdAt: 'string',
    category: 'string'
  },
}

export default new Realm({ schema: [Bookmark] });
