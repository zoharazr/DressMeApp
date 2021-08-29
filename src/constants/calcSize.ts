import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const calcSize = width / 375;
export default calcSize;
