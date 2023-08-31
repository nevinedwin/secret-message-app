import React from 'react'

const LayoutContainer = ({ children, className }) => {
    return (
        <div className={`w-full h-full inline-block p-32 bg-light ${className}`}>
            {children}
        </div>
    )
}

export default LayoutContainer