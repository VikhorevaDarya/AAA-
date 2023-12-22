import { Layout } from 'antd'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

export type ContentProps = {
  children?: React.ReactNode
}

const cx = classNames.bind(styles)

const Content: React.FC<ContentProps> = ({ children }) => {
  return <Layout.Content className={cx('content')}>{children}</Layout.Content>
}

export default Content
