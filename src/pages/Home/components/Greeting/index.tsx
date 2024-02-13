import { useCallback } from 'react'

import { useAppStore } from '@/store'
import { Button, ContactLinks } from '@/components'
import BackgroundImg from '@/assets/images/bg.png'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

const Greeting = () => {
  const [setIsOpenModal] = useAppStore((state) => [state.setIsOpenModal])

  const onClick = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return (
    <div className={cx('greeting')}>
      <div className={cx('greeting__inner')}>
        <img src={BackgroundImg} className={cx('greeting__image')} />

        <div className={cx('greeting__content')}>
          <h1 className={cx('greeting__title')}>
            Ремонт техники Apple любой сложности
          </h1>

          <div className={cx('greeting__text')}>
            <p className={cx('greeting__paragraph')}>
              Диагностика Вашего устройства{' '}
              <span className={cx('greeting__paragraph_bold')}>бесплатно.</span>
            </p>

            <p className={cx('greeting__paragraph')}>
              Ремонт{' '}
              <span className={cx('greeting__paragraph_bold')}>
                от 450 руб.
              </span>
            </p>

            <p className={cx('greeting__paragraph')}>
              Починим при вас{' '}
              <span className={cx('greeting__paragraph_bold')}>
                от 5 минут.
              </span>
            </p>

            <p className={cx('greeting__paragraph')}>
              Гарантия на ремонт{' '}
              <span className={cx('greeting__paragraph_bold')}>1 год.</span>
            </p>

            <p className={cx('greeting__paragraph')}>
              При записи через сайт -
              <span className={cx('greeting__paragraph_bold')}>
                {' '}
                скидка 10%{' '}
              </span>
              от общего прайса
            </p>
          </div>

          <div className={cx('greeting__actions')}>
            <Button className={cx('greeting__button')} onClick={onClick}>
              Записаться на диагностику
            </Button>
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Greeting
