import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  const { headerText } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
    paddingBottom: 10,
    shadowColor: '#000',
    shoadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Header;
