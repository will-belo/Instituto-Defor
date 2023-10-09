export default function Depoiment(props){
    return(
        <div className='depoiment'>
            <div className='depoiment-image'>
                <img src={props.image} />
            </div>
            <div className='depoiment-text'>
                { props.children }
                <div>
                    <cite>{ props.cite }</cite>
                </div>
            </div>
        </div>
    )
}