import React from 'react'
import { Children } from 'react'

const BannerContext = React.createContext()

export default function Banner({children, variant="neutral"}) {
    return (
            <BannerContext.Provider value={{variant}}>
                <div className={`banner banner-${variant}`} >
                    {children}
                </div>
            </BannerContext.Provider>
        )
}
export { BannerContext }