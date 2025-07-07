import React from 'react'
import Layout from '../components/layout/Layout'
import { useAuth } from '../context/Auth' // Importing Auth context for authentication state

const HomePage = () => {
  const {auth} = useAuth(); // Accessing authentication state from context
  return (
    <Layout Title={"best offers"}>
        <h1>HomePage</h1>
        <pre>
          {JSON.stringify(auth, null, 4)} {/* Displaying authentication state in a formatted way */}
        </pre>
        </Layout>
  )
}

export default HomePage