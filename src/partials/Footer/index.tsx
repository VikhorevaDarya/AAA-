import { SvgIcon } from '@/components'
import { Layout } from 'antd'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <Layout.Footer className={cx('footer')}>
      <div className={cx('footer__content')}>
        <div className={cx('footer__address')}>
          <div className={cx('footer__map')}>
            <iframe
              src='https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=37.626966%2C55.743622&mode=whatshere&whatshere%5Bpoint%5D=37.625249%2C55.743442&whatshere%5Bzoom%5D=17&z=17.41'
              width='100%'
              height='100%'
              frameborder='1'
              allowfullscreen='true'
            ></iframe>
          </div>

          <div className={cx('footer__text')}>
            <h3 className={cx('footer__title')}>Как нас найти?</h3>

            <span className={cx('footer__metro')}>
              <SvgIcon name='metro' className={cx('footer__icon')} />{' '}
              Новокузнецкая, Третьяковская
            </span>

            <span className={cx('footer__subtitle')}>
              Улица Большая Ордынка, 13/9с1
            </span>

            <span className={cx('footer__description')}>
              Наш офис находится тудым сюдым
            </span>
          </div>
        </div>
      </div>
    </Layout.Footer>
  )
}

export default Footer
