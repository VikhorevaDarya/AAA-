import { Header } from '@/partials'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const HomePage = () => {
  return (
    <div className={cx('home')}>
      <Header /> 
      AAA+
    </div>
  )
}

export default HomePage
