import { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import type { Swiper as SwiperType } from 'swiper'

import { feedbacks } from './config'
import { Slide } from './components'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import 'swiper/css'
import 'swiper/css/pagination'

const cx = classNames.bind(styles)

const swiperProps = {
  slidesPerView: 1,
  spaceBetween: 26,
  pagination: true,
  className: cx('feedbacks__swiper'),
  breakpoints: {
    745: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
}

const Feedbacks = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const swiperRef = useRef()

  const swipeRight = () => {
    swiperInstance.slideNext()
  }

  const swipeLeft = () => {
    swiperInstance.slidePrev()
  }

  useEffect(() => {
    setSwiperInstance((swiperRef.current as SwiperType).swiper)
  }, [swiperRef])

  return (
    <div className={cx('feedbacks')} id='#feedbacks'>
      <div className={cx('feedbacks__content')}>
        <h3 className={cx('feedbacks__title')}>Отзывы клиентов:</h3>

        <div className={cx('feedbacks__slider')}>
          <DoubleLeftOutlined
            className={cx(['feedbacks__arrow', 'feedbacks__arrow_left'])}
            onClick={swipeLeft}
          />

          <Swiper
            ref={swiperRef}
            {...swiperProps}
            paginationDynamicBullets={true}
            modules={[Pagination]}
          >
            {feedbacks.map((feedback, index) => (
              <SwiperSlide key={index}>
                <Slide feedback={feedback} />
              </SwiperSlide>
            ))}
          </Swiper>

          <DoubleRightOutlined
            className={cx(['feedbacks__arrow', 'feedbacks__arrow_right'])}
            onClick={swipeRight}
          />
        </div>
      </div>
    </div>
  )
}

export default Feedbacks
