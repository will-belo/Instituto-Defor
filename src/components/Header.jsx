import defor from '/defor.svg'
import simple from '../assets/simple-logo.png'

export default function Header(props){
    return(
        <header>
            <div className='menu'><img src={defor} width='70' /></div>
            <div className='header-block recoil'>
                <div>
                    { props.children }
                    <button>Saiba mais</button>
                </div>
                <div>
                    <img src={simple} width='400' />
                </div>
            </div>
        </header>
    ) 
}