import {
  ADMIN_ADD_CATEGORY_LINK,
  ADMIN_GET_CATEGORIES_LINK,
  ADMIN_GET_CATEGORY_LINK,
  ADMIN_DELETE_CATEGORY_LINK,
  ADMIN_UPDATE_CATEGORY_LINK
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

  getAll() {
    return new Promise((resolve, reject) => {
      HTTP.get(ADMIN_GET_CATEGORIES_LINK).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  getCategory(id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${ADMIN_GET_CATEGORY_LINK}${id}`).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  deleteByID(id) {
    return new Promise((resolve, reject) => {
      HTTP.delete(`${ADMIN_DELETE_CATEGORY_LINK}${id}`).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  update(data) {
    return new Promise((resolve, reject) => {
      HTTP.put(`${ADMIN_UPDATE_CATEGORY_LINK}${data._id}`, data).then(({ json, ok }) => {
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