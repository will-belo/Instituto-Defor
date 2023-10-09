import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Works(props){
    return(
        <div className='works'>
            <div className='title'>
                <h1>Nichos de trabalho</h1>
            </div>
            <div className='work-grid recoil'>
                {
                    props.list.map((work, index) =>
                        <div className='work' key={index}>
                            <div className='work-icon'><FontAwesomeIcon icon={work.icon} size="xl" /></div>
                            <div className='work-text'>
                                <h2>{work.content}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}