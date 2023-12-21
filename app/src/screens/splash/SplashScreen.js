import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, StyleSheet, Text } from 'react-native';
// import {connect} from 'react-redux';

import AppLogo from '../../components/UI/AppLogo';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import * as authActions from '../startup/authActions';
import * as types from '../startup/types';

const SplashScreen = props => {
  const image = { uri: 'https://reactjs.org/logo-og.png' };
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const checkAccessValidation = () => {
    // dispatch(authActions.requestAuth('123', 'GRTE@#$53453'));

    /*
    roshan
    dispatch({
      type: types.AUTH_REQUEST,
      payload: {id: '123', token: 'RTE@#$5345376767'},
    });
*/
  };

  useEffect(() => {
    checkAccessValidation();
  }, []);

  return (
    <>
      <BaseSafeAreaView>
        <ImageBackground source={image} style={styles.image}>
          <Text style={{ fontSize: 40, color: 'red' }}>{token}</Text>
          <AppLogo />
        </ImageBackground>
      </BaseSafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const mapStateToProps = (state, props) => {
//   const {id, isLoggedIn, token} = state.auth;

//   return {id, isLoggedIn, token};
// };

// const mapDispatchToProps = (dispatch, props) => ({
//   checkAccessValidation: () => {
//     dispatch(authActions.requestAuth('123', 'GRTE@#$53453'));
//   },
// });

// const SplashScreen = connect(mapStateToProps, mapDispatchToProps)(Splash);

export default SplashScreen;
