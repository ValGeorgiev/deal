import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

class Footer extends PureComponent {
  render() {
    return (
      <div className='footer__wrapper'>
        <div className='footer__row'>

          <div className='footer__estates'>
            <h3>Имоти в София</h3>
            <Link to='/'>Под наем</Link>
            <Link to='/'>За продажба</Link>
            <Link to='/'>ВИП обяви</Link>
            <Link to='/'>Имоти от последните 24 часа</Link>
          </div>

          <div className='footer__estates'>
            <h3>Имоти във Варна</h3>
            <Link to='/'>Под наем</Link>
            <Link to='/'>За продажба</Link>
            <Link to='/'>ВИП обяви</Link>
            <Link to='/'>Имоти от последните 24 часа</Link>
          </div>

          <div className='footer__estates'>
            <h3>Имоти в Пловдив</h3>
            <Link to='/'>Под наем</Link>
            <Link to='/'>За продажба</Link>
            <Link to='/'>ВИП обяви</Link>
            <Link to='/'>Имоти от последните 24 часа</Link>
          </div>

          <div className='footer__estates'>
            <h3>Имоти в Бургас</h3>
            <Link to='/'>Под наем</Link>
            <Link to='/'>За продажба</Link>
            <Link to='/'>ВИП обяви</Link>
            <Link to='/'>Имоти от последните 24 часа</Link>
          </div>

        </div>

        <div className='footer__row'>
          <div className='footer__deal'>
            <h3>DEAL</h3>
            <Link to='/'>Правила и условия</Link>
            <Link to='/'>Цени</Link>
            <Link to='/'>За нас</Link>
          </div>

          <div className='footer__create'>
            <h3>Създай</h3>
            <Link to='/create/agency'>Агенция</Link>
            <Link to='/create/freelancer'>Фрийлансър портфолио</Link>
            <Link to='/'>Строителна фирма</Link>
          </div>

          <div className='footer__more'>
            <h3>Още</h3>
            <Link to='/'>Ръководство за покупко-продажба</Link>
            <Link to='/'>Топ Брокери</Link>
            <Link to='/'>Фрийлансъри</Link>
            <Link to='/'>Строителни фирми</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default Footer
