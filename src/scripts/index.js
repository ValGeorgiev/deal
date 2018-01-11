import Auth from './service/Auth'
import Estate from './service/Estate'
import User from './service/User'
import Favourites from './service/Favourites'
import Category from './service/Category'
import Search from './service/Search'

const Deal = {
  Auth: new Auth(),
  Estate: new Estate(),
  User: new User(),
  Favourites: new Favourites(),
  Category: new Category(),
  Search: new Search()
}

window.__DEAL__ = Deal

export default Deal
