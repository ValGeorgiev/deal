import {
  ADMIN_ADD_CATEGORY_LINK,
  ADMIN_GET_CATEGORIES_LINK,
  ADMIN_GET_CATEGORY_LINK,
  ADMIN_DELETE_CATEGORY_LINK,
  ADMIN_UPDATE_CATEGORY_LINK,
  ADMIN_GET_REFINEMENTS_LINK,
  ADMIN_GET_REFINEMENT_LINK,
  ADMIN_DELETE_REFINEMENT_LINK,
  ADMIN_UPDATE_REFINEMENT_LINK,
  GET_ONLINE_CATEGORIES_LINK
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

  getAllOnline() {
    return new Promise((resolve, reject) => {
      HTTP.get(GET_ONLINE_CATEGORIES_LINK).then(({ json, ok }) => {
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

  getAllRefinements() {
    return new Promise((resolve, reject) => {
      HTTP.get(ADMIN_GET_REFINEMENTS_LINK).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  getRefinement(id) {
    return new Promise((resolve, reject) => {
      HTTP.get(`${ADMIN_GET_REFINEMENT_LINK}${id}`).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  deleteRefinementByID(id) {
    return new Promise((resolve, reject) => {
      HTTP.delete(`${ADMIN_DELETE_REFINEMENT_LINK}${id}`).then(({ json, ok }) => {
        if (ok) {
          resolve(json)
        } else {
          reject(json)
        }
      })
    })
  }

  updateRefinement(data) {
    return new Promise((resolve, reject) => {
      HTTP.put(`${ADMIN_UPDATE_REFINEMENT_LINK}${data._id}`, data).then(({ json, ok }) => {
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
