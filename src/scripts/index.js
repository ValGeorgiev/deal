import Auth from './service/Auth'
import Estate from './service/Estate'
import User from './service/User'

const Deal = {
  Auth: new Auth(),
  Estate: new Estate(),
  User: new User()
}

window.__DEAL__ = Deal

export default Deal
