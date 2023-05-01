import React, { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen antialiased font-content">
      <main className="mb-auto">{children}</main>
    </div>
  )
}

export default Layout
