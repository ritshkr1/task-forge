import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as allSolidIcons from '@fortawesome/free-solid-svg-icons';
import * as allRegularIcons from '@fortawesome/free-regular-svg-icons';
const solidIconList = Object.keys(allSolidIcons)
    .filter(key => key !== 'fas' && key !== 'prefix') // Exclude metadata keys
    .map(key => allSolidIcons[key]);

const regularIconList = Object.keys(allRegularIcons)
    .filter(key => key !== 'far' && key !== 'prefix')
    .map(key => allRegularIcons[key]);
library.add(...solidIconList, ...regularIconList);

export default function AweFontIcons({iconName}){
    return <FontAwesomeIcon icon={iconName} />
}