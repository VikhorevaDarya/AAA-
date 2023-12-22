import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header, Content, Footer } from '@/partials'

const MainLayout = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  )
}

export default MainLayout
