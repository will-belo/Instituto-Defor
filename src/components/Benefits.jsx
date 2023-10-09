import clipboard from '../assets/clipboard.png'

export default function Benefits(props){
    return(
        <div className='benefits'>
            <div className='title'>
                <h1>Benefícios de treinar sua <br/> equipe com nossa metodologia:</h1>
            </div>
            <div className='benefits-content recoil'>
                <div>
                    <img src={clipboard} width='250' />
                </div>
                <div>
                    <ol>
                        {
                            props.list.map((items, index) =>
                                <li key={index}><h3>{items.content}</h3></li>
                            )
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}