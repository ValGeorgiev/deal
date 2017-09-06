import {
  ADMIN_ADD_CATEGORY_LINK
} from './links'

import HTTP from '../HTTP'

class Category {
  add(data) {

    return new Promise((resolve, reject) => {
      HTTP.post(ADMIN_ADD_CATEGORY_LINK, data).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }
}

export default Category
