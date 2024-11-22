import { FC, ReactNode } from 'react'

interface InnerPageProps {
  children: ReactNode
}

const InnerPage: FC<InnerPageProps> = ({ children }) => {
  return <div className="container mt-4">
    {children}
  </div>
}

export default InnerPage