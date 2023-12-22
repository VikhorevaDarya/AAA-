import { Header } from '@/partials'
import { Greeting, Prices } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const HomePage = () => {
  return (
    <div className={cx('home')}>
      <Header />
      <Greeting />
      <Prices />
    </div>
  )
}

export default HomePage
