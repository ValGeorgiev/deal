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
      return res.json()
    })
  }

  get(url) {
    return fetch(url).then((res) => {
      return res.json()
    })
  }
}


export default new HTTP()
