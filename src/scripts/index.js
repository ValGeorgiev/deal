import Auth from './service/Auth'

const Deal = {
  Auth: new Auth()
}

window.__DEAL__ = Deal

export default Deal
