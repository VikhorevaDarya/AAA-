import { Layout, Typography } from 'antd'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <Layout.Footer className={cx('footer')}>
      <Typography.Text>Upstream.Team {year}</Typography.Text>
    </Layout.Footer>
  )
}

export default Footer
