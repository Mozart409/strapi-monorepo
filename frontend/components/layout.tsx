import React, { useState } from 'react'
import Navbar from './elements/navbar'
import Footer from './elements/footer'
import NotificationBanner from './elements/notification-banner'

interface Props {
  children: JSX.Element | JSX.Element[]
  global: {
    navbar: unknown
    footer: unknown
    notificationBanner: unknown
  }
  pageContext
}

const Layout: React.FC = ({ children, global, pageContext }: Props) => {
  const { navbar, footer, notificationBanner } = global

  const [bannerIsShown, setBannerIsShown] = useState(true)
  return (
    <div className="flex flex-col justify-between min-h-screen font-sans antialiased">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout
