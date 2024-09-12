import {useId} from 'react'
export default function Card({children}) {
    const id = useId();
    return (
        <div className="card" id={id}>
            <div className='card-contents'>                
                <img className='card-img' src="../../public/imgs/Brand icon.png" alt="brand icon"/>
                {children}
            </div>
        </div>
    )
} 