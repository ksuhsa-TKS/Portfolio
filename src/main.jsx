import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd'
import { ScrollToTop } from './hooks/scrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ConfigProvider
      theme={{
        components: {
          Anchor: {
            colorText: '#fff',
            colorPrimary: '#ffd666',
          },
          Carousel: {
            colorText: '#fff',
            dotHeight: 4,
            dotWidth: 26,
            dotActiveWidth: 34,
            dotOffset: 0,
          },
          Button: {
            colorPrimary: '#ad4e00',
            colorPrimaryHover: '#d46b08',
            colorPrimaryActive: '#ad4e00',
            paddingInline: 12,
          },
          Menu: {
            itemBg: '#ad4e00',
            itemHoverBg: '#d46b08',
            itemActiveBg: '#ad4e00',
            colorBgElevated: '#ad4e00',
            itemSelectedBg: '#d46b08',
            colorText: '#fff',
            itemSelectedColor: '#fff',
            subMenuItemSelectedColor: '#ffd666',
            collapsedWidth: 40,
            itemBorderRadius: 8,
            itemHeight: 30,
            horizontalItemHoverColor: '#fff',
            horizontalItemSelectedColor: '#fff',
          },
        },
      }}>
      <ScrollToTop />
      <App />
    </ConfigProvider>
  </BrowserRouter>
)
