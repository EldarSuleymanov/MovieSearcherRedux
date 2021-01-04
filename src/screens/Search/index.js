import React, {Component} from 'react';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import {Header} from '../../Components';
import ImageCard from '../../Components/ImageCard';

import {asyncFuncThunk, inputActionCreator} from '../../redux/actions';
// import {ImageCard, Header} from '../../Components';
import {styles} from './styles';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.Method('Spider Man');
  }

  Method = async (par) => {
    // try {
    // const response = await fetch(this.props.url1 + par);
    // const array = await response.json();

    // if (array.length) {
    // this.setState({data: array});
    this.props.asyncFunc1(this.props.url1, par);
    //   } else {
    //     this.props.errorFunc1('there is no such movie');
    //   }
    // } catch (e) {
    //   this.props.errorFunc1('Something went wrong, try again later');
    // }
  };

  onChangeText(text) {
    this.props.onChangeText1(text);
  }

  Search = async (str) => {
    await this.Method(str);
    Keyboard.dismiss();
  };

  render() {
    const {title1, searchText1, errorMessage1, data1} = this.props;
    const isMovieExist =
      errorMessage1 !== '' ? (
        <Text style={{backgroundColor: 'red'}}>{errorMessage1}</Text>
      ) : (
        data1.map((item, index) => <ImageCard data={item} key={index} rootName ={this.props.route.name} />)
      );

    return (
      <View style={{flex: 1, backgroundColor: '#99917c'}}>
        <Header title={title1} />
        <View style={styles.row}>
          <TextInput
            style={styles.textInputs}
            placeholder="Write something to start search"
            onChangeText={(text) => this.onChangeText(text)}
            value={searchText1}
          />

          <TouchableOpacity
            style={{flex: 0.15}}
            onPress={() => this.Search(searchText1)}>
            <Text style={styles.button}>&#128270;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.container}>{isMovieExist}</View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title1: state.searchReducer.title,
    searchText1: state.searchReducer.searchText,
    errorMessage1: state.searchReducer.errorMessage,
    url1: state.searchReducer.url,
    data1: state.searchReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeText1: (text) => {
      dispatch(inputActionCreator(text));
    },

    // errorFunc1: (message) => {
    //   dispatch(errorActionCreator(message));
    // },

    asyncFunc1: (url, search) => {
      dispatch(asyncFuncThunk(url, search));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
