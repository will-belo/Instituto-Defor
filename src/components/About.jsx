export default function About(props){
    return(
        <div className='about-us recoil'>
            <div className='about-us-content'>
                <div className='title'>
                    <h1>Sobre</h1>
                </div>
                {
                    props.list.map((items, index) =>
                        <div key={index}>
                            <h2>
                                {items.title}
                            </h2>
                            <p>
                                {items.content}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}