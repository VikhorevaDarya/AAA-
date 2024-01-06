import { Avatar } from 'antd'
import { StarFilled, UserOutlined } from '@ant-design/icons'
import { FeedbackType } from '../../types'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type SlideProps = {
  feedback: FeedbackType
}

const Slide = ({ feedback }: SlideProps) => {
  const { name, text, avatarSrc, date } = feedback

  return (
    <div className={cx('slide')}>
      <div className={cx('slide__inner')}>
        <div className={cx('slide__header')}>
          <Avatar size={32} icon={<UserOutlined />} />

          <span className={cx('slide__header-inner')}>
            <span className={cx('slide__title')}>{name}</span>

            <span className={cx('slide__rating')}>
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </span>
          </span>
        </div>

        <div className={cx('slide__content')}>{text}</div>
      </div>

      <span className={cx('slide__date')}>{date}</span>
    </div>
  )
}

export default Slide
