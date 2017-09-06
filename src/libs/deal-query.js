class DealQuery {

  constructor() {

  }

  parseQuery(query) {
    if (!query || query === '') {
      return {}
    }

    let q = query
    let queryArray = []
    let queryArrayLength = 0
    let queryBuilder = {}

    // Remove the ? character
    q = q.slice(1)

    queryArray = q.split('&')
    queryArrayLength = queryArray.length

    for (let i = 0; i < queryArrayLength; i++) {

      let queryKeyValue = queryArray[i].split('=')
      queryBuilder[queryKeyValue[0]] = queryKeyValue[1]
    }

    return queryBuilder
  }

  addParam(queryBuilder, key, value) {
    if (queryBuilder[key]) {
      if (queryBuilder[key].includes(value)) {

        return this.removeParams(queryBuilder, key, value)
      }

      queryBuilder[key] = `${queryBuilder[key]},${value}`

    }

    return queryBuilder
  }

  queryToString(queryBuilder) {
    let queryString = ''

    if (queryBuilder) {
      queryString = '?'
      let queryKeys = Object.keys(queryBuilder)

      let queryKeysLength = queryKeys.length
      for (let i = 0; i < queryKeysLength; i++) {

        queryString += `${queryKeys[i]}=${queryBuilder[queryKeys[i]]}`

        if (i < queryKeysLength - 1) {
          queryString += '&'
        }
      }
    }

    return queryString
  }

  buildQuery(query, key, value) {
    if (!query || query === '') {
      return `?${key}=${value}`
    }

    if (query.includes(`${key}=`)) {
      let queryBuilder = this.parseQuery(query)
      queryBuilder = this.addParam(queryBuilder, key, value)

      if (queryBuilder[key] === '') {
        return ''
      }

      return this.queryToString(queryBuilder)
    }

    if (value === '') {
      return query
    }
    return `${query}&${key}=${value}`
  }

  removeParams(queryBuilder, key, value) {
    let _queryBuilder = queryBuilder

    if (_queryBuilder[key]) {

      let index = _queryBuilder[key].indexOf(value)
      if (index > -1) {
        let paramToRemove

         if (index > 0) {
          paramToRemove = `,${value}`
        } else {
          paramToRemove = `${value},`
        }
        if (!_queryBuilder[key].includes(paramToRemove)) {
          paramToRemove = value
        }

        _queryBuilder[key] = _queryBuilder[key].replace(paramToRemove, '')
      }
    }

    return _queryBuilder
  }

  getQuery(search) {
    return search.substr(search.indexOf('=') + 1, search.length)
  }
}

const __DEAL_QUERY__ = new DealQuery()

export const parseQuery = __DEAL_QUERY__.parseQuery.bind(__DEAL_QUERY__)

export const buildQuery = __DEAL_QUERY__.buildQuery.bind(__DEAL_QUERY__)

export const removeParams = __DEAL_QUERY__.removeParams.bind(__DEAL_QUERY__)

export const getQuery = __DEAL_QUERY__.getQuery.bind(__DEAL_QUERY__)
