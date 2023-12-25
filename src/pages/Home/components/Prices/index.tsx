import { Devices, Models } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Prices = () => {
  return (
    <div className={cx('prices')}>
      <Devices />
      <Models />
    </div>
  )
}

export default Prices
