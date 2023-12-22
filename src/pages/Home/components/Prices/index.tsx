import { Devices } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Prices = () => {
  return (
    <div className={cx('prices')}>
      <Devices />
    </div>
  )
}

export default Prices
