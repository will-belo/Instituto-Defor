import { useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Clients(props){
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    
    return(
        <div className='clients recoil'>
            <div className='title'>
                <h1>Alguns de Nossos clientes</h1>
            </div>
            <div className='clients-carousel' ref={carousel}>
                {
                    props.images.map((image, index) =>
                        <div key={index}>
                            <img src={image} />
                        </div>
                    )
                }
            </div>
            {
                props.images.length > 5 ?
                    <div className='clients-controller'>
                        <button onClick={handleLeftClick}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <button onClick={handleRightClick}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                :
                    null
            }
        </div>
    )
}