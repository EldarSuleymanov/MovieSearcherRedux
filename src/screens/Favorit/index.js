import React from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import ImageCard from '../../Components/ImageCard';
import {FavoriteAdd} from '../../redux/actions';

const FavoriteScreen = ({data1, route}) => {
  const temp = data1.map((item, index) => (
    <ImageCard data={item} key={index} rootName={route.name} />
  ));
  return (
    <ScrollView style={{backgroundColor: 'grey'}}>
      {temp.length ? (
        temp
      ) : (
        <Text>There is no favorite movies in this list</Text>
      )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    data1: state.favoriteReducer.data,
  };
};

export default connect(mapStateToProps, null)(FavoriteScreen);
