import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus);

export default function AweFontIcons({iconName}){
    return <FontAwesomeIcon icon={iconName} />
    // <FontAwesomeIcon icon="user" />
}