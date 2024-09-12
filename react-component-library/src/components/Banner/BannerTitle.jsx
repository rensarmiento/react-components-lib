import React from 'react'
import { FaInfoCircle, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { BannerContext } from './Banner'


export default function BannerTitle({children}) {
    const variantIcon = {
        'danger':< FaCircleXmark />,
        'neutral': <FaInfoCircle/>,
        'warning': <FaExclamationTriangle/>,
        'success': <FaCheckCircle/>
    }
    const {variant} = React.useContext(BannerContext)
    console.log(variant + " in BannerTitle")
        return (
        <div className={`banner-title`}>
            <div className={`banner-icon-${variant}`}>
                {variantIcon[variant]}
            </div>
            {children}
        </div>
        )
    }


