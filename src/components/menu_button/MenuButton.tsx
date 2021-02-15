import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles/menu_button';

interface Props {
  handleOpen(): void;
}

export const MenuButton: React.FC<Props> = (props) => (
  <FontAwesome5
    style={styles.icon}
    onPress={props.handleOpen}
    name="bars"
    size={25}
    color="white"
  />
);
