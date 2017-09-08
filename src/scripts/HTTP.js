import fetch from 'node-fetch'

class HTTP {
  post(url, body) {
    let _body = JSON.stringify(body)

    return fetch(url, {
      method: 'POST',
      body: _body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  put(url, body) {
    let _body = JSON.stringify(body)

    return fetch(url, {
      method: 'PUT',
      body: _body,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  get(url) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  delete(url) {
    return fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return {
        json: res.json(),
        ok: res.ok
      }
    })
  }

  addParameters(url, data) {
    const dataKeys = Object.keys(data)
    let params = ''
    dataKeys.map((key) => {
      params += `${key}=${data[key]}&`
    })
    if (url.includes('?')) {
      url = `${url}&${params.slice(0, -1)}`
    } else {
      url = `${url}?${params.slice(0, -1)}`
    }
    return url
  }
}


export default new HTTP()
