import { Feedbacks, Greeting, Prices } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const HomePage = () => {
  return (
    <div className={cx('home')}>
      <Greeting />
      <Prices />
      <Feedbacks />
    </div>
  )
}

export default HomePage
