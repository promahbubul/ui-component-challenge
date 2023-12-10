import React from 'react'
import { Outlet } from 'react-router-dom'

const Component = () => {
  return (
    <div  className='bg-primary text-textOne p-5'>
        <Outlet/>
    </div>
  )
}

export default Component