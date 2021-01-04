import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = (props) => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#99917c',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 2,
  },
  textStyle: {
    color: '#420987',
    fontSize: 28,
  },
});
