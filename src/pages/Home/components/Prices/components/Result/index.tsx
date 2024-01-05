import { SvgIcon } from '@/components'
import { ProblemType } from '@/store/app/types'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type ResultProps = {
  problem: ProblemType
}

const Result = ({ problem }: ResultProps) => {
  return (
    <div className={cx('result')}>
      <p className={cx('result__title')}>{problem.title}</p>

      <div className={cx('result__content')}>
        <div className={cx('result__content-item')}>
          <SvgIcon name='clock' className={cx('result__icon')} />
          {problem.time}
        </div>

        <div className={cx('result__content-item')}>
          <SvgIcon name='cosh' className={cx('result__icon')} />
          {problem.count}
        </div>
      </div>
    </div>
  )
}

export default Result
