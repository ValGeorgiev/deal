import Auth from './service/Auth'
import Estate from './service/Estate'

const Deal = {
  Auth: new Auth(),
  Estate: new Estate()
}

window.__DEAL__ = Deal

export default Deal
