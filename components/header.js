import React, { Component } from 'react';
import {Header, Avatar} from 'react-native-elements';
import bg from '../assets/avatar.jpg';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class HEADER extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: require("../assets/chief_logo.png"),
      chief_logo:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    }
  }
  componentWillUpdate() {
    console.log('inside header');
  }
  componentDidMount() {
    this.retrieveData();
  }
  async retrieveData() {
    try {
      const data = await AsyncStorage.getItem('user');
      const value = JSON.parse(data);
      if (value !== null) {
        console.log("after signin data",value);
        if(value.media === "fb") {
          var logo = value.picture.data.url;
          this.setState({chief_logo:logo});
        } else{
          var logo = value.photoUrl;
          this.setState({chief_logo:logo});
          Alert.alert("hai result failed");
        }
      }
    } catch (error) {
      // Error retrieving data
      console.log("Async storage error: ",error);
    }
  }

  render() {
    const image1 = require("../assets/chief_logo.png")
    return (
      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      leftComponent={ <Avatar
        rounded
        source={
          require("../assets/chief_logo.png")
        }
      /> }
      centerComponent={{ text: 'True Realization Center', style: { color: '#fff' } }}
      rightComponent={<Avatar
        rounded
        source={{     
          uri:this.state.chief_logo,
        }}
      />}
      containerStyle={{
        backgroundColor: '#3D6DCC',
        justifyContent: 'space-around',
        marginTop: Platform.OS === 'ios' ? 0 : - 24
      }}
    />
    );
  }
}

