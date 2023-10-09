export default function More(props){
    return(
        <div className='more recoil'>
            <div className='title'>
                <h1>ALGUNS DE NOSSOS PROJETOS IMPLEMENTADOS​</h1>
            </div>
            <div className='more-list'>
                <div>
                    <ol>
                        {
                            props.list.map((items, index) =>
                                <li key={index}><h3>{items.content}</h3></li>
                            )
                        }
                    </ol>
                </div>
                <div className='more-list-images'>
                    {
                        props.image.map((items, index) =>
                            <div className='more-list-images-container'>
                                <div className='more-list-images-items'>
                                    <img key={index} src={items.content} />  
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}