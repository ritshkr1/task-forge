import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faSquareCheck, faWrench, faSquarePlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faSquareCheck, faWrench, faSquarePlus, faCalendarAlt);

export default function AweFontIcons({iconName}){
    return <FontAwesomeIcon icon={iconName} />
    // <FontAwesomeIcon icon="user" />
}