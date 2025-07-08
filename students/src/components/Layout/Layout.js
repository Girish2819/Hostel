import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import { Toaster } from 'react-hot-toast'

const Layout = ({ children, Title, description, keywords, author }) => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{Title}</title>
      </Helmet>
      <Header />
      <main className="main-content">
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
