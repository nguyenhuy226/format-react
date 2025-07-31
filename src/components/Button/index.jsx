import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { cn } from '@/utils'
export const Button = ({children,disable, loading,className, ...props}) => {
  return (
    <button {...props} className={cn(className, "flex items-center justify-center gap-2", {"disabled pointer-events-none": loading || disable})} disabled={loading || disable}>
      {
        loading && <LoadingOutlined/>
      }
      {children}
    </button>
  )
}
