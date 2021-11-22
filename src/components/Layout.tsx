import React from 'react'
import Header from './Header'

const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className="flex justify-center align-start">
           <Header />
           { children }
        </div>
    )
}

export default Layout
