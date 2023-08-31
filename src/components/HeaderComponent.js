import React from 'react'

const HeaderComponent = ({title}) => {
  return (
    <div className='w-full bg-dark text-7xl md:text-4xl text-light flex items-center justify-center p-6 font-bold'>
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderComponent