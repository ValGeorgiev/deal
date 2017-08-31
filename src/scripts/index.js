import Auth from './service/Auth'
import Estate from './service/Estate'
import User from './service/User'
import Favourites from './service/Favourites'

const Deal = {
  Auth: new Auth(),
  Estate: new Estate(),
  User: new User(),
  Favourites: new Favourites()
}

window.__DEAL__ = Deal

export default Deal
