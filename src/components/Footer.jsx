import forgeLogo from '/forge.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return(
        <footer>
            <div>
            <FontAwesomeIcon icon={faEnvelope} /> cristiane@institutodefor.com.br
            </div>
            <div>
                <img src={forgeLogo} width='70' />
            </div>
        </footer>
    )
}