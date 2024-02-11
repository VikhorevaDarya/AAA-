import { useCallback } from 'react'
import { Form, Input, Modal, Select, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import { useAppStore } from '@/store'

import classNames from 'classnames/bind'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

type FormValues = {
  name: String
  phone: String
  email?: String
  comment?: String
  connect?: String
}

const ModalWindow = () => {
  const [isOpenModal, setIsOpenModal, sendMessage] = useAppStore((state) => [
    state.isOpenModal,
    state.setIsOpenModal,
    state.sendMessage,
  ])

  const [form] = Form.useForm()

  const onCancel = useCallback(() => {
    setIsOpenModal(false)
    form.resetFields()
  }, [])

  const handleSubmit = (values: FormValues) => {
    const name = values.name
    const phone = values.phone
    const email = values.email ?? ''
    const comment = values.comment ?? ''
    const connect = values.connect ?? 'Перезвонить'

    const message = `
    <strong>❗️Заявка с сайта❗️</strong>
      
    <b>Имя:</b>
    ${name}

    <b>Телефон:</b>
    ${phone}

    <b>E-mail:</b>
    ${email}

    <b>Как связаться:</b>
    ${connect}

    <b>Комментарий:</b>
    ${comment}
    `

    sendMessage(message).then(onCancel)
  }

  return (
    <Modal
      open={isOpenModal}
      onCancel={onCancel}
      className={cx('modal')}
      footer={false}
    >
      <h2 className={cx('modal__title')}>
        Оставьте заявку и мы с вами свяжемся
      </h2>

      <Form
        onFinish={handleSubmit}
        layout='vertical'
        form={form}
        className={cx('modal__form')}
      >
        <Form.Item
          label='Ваше ФИО'
          name='name'
          className={cx('modal__form-item')}
          rules={[{ required: true, message: 'Пожалуйста введите ваше имя' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Контактный номер телефона'
          name='phone'
          className={cx('modal__form-item')}
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите ваш номер телефона',
            },
          ]}
        >
          <Input type='phone' />
        </Form.Item>

        <Form.Item
          label='Ваш e-mail'
          name='email'
          className={cx('modal__form-item')}
        >
          <Input />
        </Form.Item>

        <Form.Item label='Как с вами связаться?' name='connect'>
          <Select
            options={[
              { label: 'Перезвонить', value: 'call' },
              { label: 'Написать в WhatsApp', value: 'Написать в WhatsApp' },
              { label: 'Написать в Telegram', value: 'Написать в Telegram' },
            ]}
            defaultValue={{ label: 'Перезвонить', value: 'call' }}
          />
        </Form.Item>

        <Form.Item label='Комментарий' name='comment'>
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 8, span: 16 }}
          className={cx('modal__button-wrapper')}
        >
          <Button htmlType='submit' className={cx('modal__button')}>
            Отправить
            <ArrowRightOutlined color='#FFFFFF' />
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalWindow
