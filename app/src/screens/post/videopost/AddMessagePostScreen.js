/* eslint-disable no-console */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Image
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { RNCamera } from 'react-native-camera';
import colors from '../../../../res/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import CreatePostView from '../../../components/UI/CreatePostView';
import Text_Post from '../../../../res/images/Text_Post.svg';

import RNcameraTop from '../../../components/post/RNcameraVideoTop';
import RNcameraBottom from '../../../components/post/RNcameraVideoBottom';

import BaseSafeAreaView from '../../../components/UI/BaseSafeAreaView';

import Channel from '../../../components/svg/Channel';
import Community from '../../../components/svg/Community';
import Temp_white_circle from '../../../components/svg/Temp_white_circle';
import CameraRoll from "@react-native-community/cameraroll";

let post_array = [
  {
    icon: <Text_Post />,
    name: 'Create Text Post',
    root: 'TextPost',
    navigate: 'TextPostScreen',
  }
];


async function hasAndroidPermission() {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}



const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const landmarkSize = 2;

let image = []
let imageCount = 0

export default class AddMessageVideoScreen extends React.Component {
  state = {
    flash: 'off',
    zoom: 0,
    autoFocus: 'on',
    autoFocusPoint: {
      normalized: { x: 0.5, y: 0.5 }, // normalized values required for autoFocusPointOfInterest
      drawRectPosition: {
        x: Dimensions.get('window').width * 0.5 - 32,
        y: Dimensions.get('window').height * 0.5 - 32,
      },
    },
    depth: 0,
    type: 'back',
    whiteBalance: 'auto',
    ratio: '16:9',
    recordOptions: {
      mute: false,
      maxDuration: 5,
      quality: RNCamera.Constants.VideoQuality['288p'],
    },
    isRecording: false,
    canDetectFaces: false,
    canDetectText: false,
    canDetectBarcode: false,
    faces: [],
    textBlocks: [],
    barcodes: [],
  };





  toggleFacing() {
    this.setState({
      type: this.state.type === 'back' ? 'front' : 'back',
    });
  }

  toggleFlash() {
    this.setState({
      flash: flashModeOrder[this.state.flash],
    });
  }

  toggleWB() {
    this.setState({
      whiteBalance: wbOrder[this.state.whiteBalance],
    });
  }

  toggleFocus() {
    this.setState({
      autoFocus: this.state.autoFocus === 'on' ? 'off' : 'on',
    });
  }

  touchToFocus(event) {
    const { pageX, pageY } = event.nativeEvent;
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const isPortrait = screenHeight > screenWidth;

    let x = pageX / screenWidth;
    let y = pageY / screenHeight;
    // Coordinate transform for portrait. See autoFocusPointOfInterest in docs for more info
    if (isPortrait) {
      x = pageY / screenHeight;
      y = -(pageX / screenWidth) + 1;
    }

    this.setState({
      autoFocusPoint: {
        normalized: { x, y },
        drawRectPosition: { x: pageX, y: pageY },
      },
    });
  }

  zoomOut() {
    this.setState({
      zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1,
    });
  }

  zoomIn() {
    this.setState({
      zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1,
    });
  }

  setFocusDepth(depth) {
    this.setState({
      depth,
    });
  }


  testDadsa() {

    CameraRoll.getPhotos({
      first: imageCount,
      assetType: 'Photos',
    })
      .then(r => {
        image = r.edges;
        this.setState({ image: r.edges });
      })
      .catch((err) => {
        //Error Loading Images
      });

  }


  takePicture = async function () {

    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      console.warn('takePicture ', data);


      // if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      //   return;
      // }

      await CameraRoll.save(data.uri);
      imageCount++
      CameraRoll.getPhotos({
        first: imageCount,
        assetType: 'Photos',
      })
        .then(r => {
          image = r.edges;
          this.setState({ image: r.edges });
        })
        .catch((err) => {
          //Error Loading Images
        });

    }
  };

  takeGal = async function () {

    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      console.warn('takePicture ', data);
      this.image = data.uri;
    }
  };

  resetAsset = async function () {
    this.image = [];
    imageCount = 0
    image = [];
    this.setState({ image: [] });
  };

  stopVideo = async () => {
    const { isRecording } = this.state;
    if (this.camera && isRecording) {
      try {
        this.state = !this.state;
      } catch (e) {
        console.error(e);
      }
    }
  };



  takeVideo = async (nav, setPostStatus) => {
    const { isRecording } = this.state;
    if (this.camera && !isRecording) {
      try {
        setPostStatus(true);
        const promise = this.camera.recordAsync(this.state.recordOptions);

        if (promise) {
          this.setState({ isRecording: true });
          const data = await promise;

          await CameraRoll.save(data.uri);
          imageCount++
          CameraRoll.getPhotos({
            first: imageCount,
            assetType: 'Videos',
          })
            .then(r => {
              image = r.edges;
              this.setState({ image: r.edges });
              setPostStatus(false);
              this.state = !this.state;
              nav.navigate('CreateTextVideoPostScreen', { image: r.edges })
            })
            .catch((err) => {
              //Error Loading Images
            });


        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  toggle = value => () => this.setState(prevState => ({ [value]: !prevState[value] }));

  facesDetected = ({ faces }) => this.setState({ faces });

  renderFace = ({ bounds, faceID, rollAngle, yawAngle }) => (
    <View
      key={faceID}
      transform={[
        { perspective: 600 },
        { rotateZ: `${rollAngle.toFixed(0)}deg` },
        { rotateY: `${yawAngle.toFixed(0)}deg` },
      ]}
      style={[
        styles.face,
        {
          ...bounds.size,
          left: bounds.origin.x,
          top: bounds.origin.y,
        },
      ]}
    >
      <Text style={styles.faceText}>ID: {faceID}</Text>
      <Text style={styles.faceText}>rollAngle: {rollAngle.toFixed(0)}</Text>
      <Text style={styles.faceText}>yawAngle: {yawAngle.toFixed(0)}</Text>
    </View>
  );

  renderLandmarksOfFace(face) {
    const renderLandmark = position =>
      position && (
        <View
          style={[
            styles.landmark,
            {
              left: position.x - landmarkSize / 2,
              top: position.y - landmarkSize / 2,
            },
          ]}
        />
      );
    return (
      <View key={`landmarks-${face.faceID}`}>
        {renderLandmark(face.leftEyePosition)}
        {renderLandmark(face.rightEyePosition)}
        {renderLandmark(face.leftEarPosition)}
        {renderLandmark(face.rightEarPosition)}
        {renderLandmark(face.leftCheekPosition)}
        {renderLandmark(face.rightCheekPosition)}
        {renderLandmark(face.leftMouthPosition)}
        {renderLandmark(face.mouthPosition)}
        {renderLandmark(face.rightMouthPosition)}
        {renderLandmark(face.noseBasePosition)}
        {renderLandmark(face.bottomMouthPosition)}
      </View>
    );
  }

  renderFaces = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderFace)}
    </View>
  );

  renderLandmarks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.faces.map(this.renderLandmarksOfFace)}
    </View>
  );

  renderTextBlocks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.textBlocks.map(this.renderTextBlock)}
    </View>
  );

  renderTextBlock = ({ bounds, value }) => (
    <React.Fragment key={value + bounds.origin.x}>
      <Text style={[styles.textBlock, { left: bounds.origin.x, top: bounds.origin.y }]}>
        {value}
      </Text>
      <View
        style={[
          styles.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      />
    </React.Fragment>
  );

  textRecognized = object => {
    const { textBlocks } = object;
    this.setState({ textBlocks });
  };

  barcodeRecognized = ({ barcodes }) => this.setState({ barcodes });

  renderBarcodes = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.barcodes.map(this.renderBarcode)}
    </View>
  );

  renderBarcode = ({ bounds, data, type }) => (
    <React.Fragment key={data + bounds.origin.x}>
      <View
        style={[
          styles.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      >
        <Text style={[styles.textBlock]}>{`${data} ${type}`}</Text>
      </View>
    </React.Fragment>
  );

  renderRecording = () => {
    const { isRecording } = this.state;
    const backgroundColor = isRecording ? 'white' : 'darkred';
    const action = isRecording ? this.stopVideo : this.takeVideo;
    const button = isRecording ? this.renderStopRecBtn() : this.renderRecBtn();
    return (
      <TouchableOpacity
        style={[
          styles.flipButton,
          {
            flex: 0.3,
            alignSelf: 'flex-end',
            backgroundColor,
          },
        ]}
        onPress={() => action()}
      >
        {button}
      </TouchableOpacity>
    );
  };

  stopVideo = async () => {
    await this.camera.stopRecording();
    this.setState({ isRecording: false });
  };

  renderRecBtn() {
    return <Text style={styles.flipText}> REC </Text>;
  }

  renderStopRecBtn() {
    return <Text style={styles.flipText}> ☕ </Text>;
  }


  renderCamera() {
    const { canDetectFaces, canDetectText, canDetectBarcode } = this.state;



    const drawFocusRingPosition = {
      top: this.state.autoFocusPoint.drawRectPosition.y - 32,
      left: this.state.autoFocusPoint.drawRectPosition.x - 32,
    };
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        type={this.state.type}
        flashMode={this.state.flash}
        autoFocus={this.state.autoFocus}
        autoFocusPointOfInterest={this.state.autoFocusPoint.normalized}
        zoom={this.state.zoom}
        whiteBalance={this.state.whiteBalance}
        ratio={this.state.ratio}
        focusDepth={this.state.depth}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        faceDetectionLandmarks={
          RNCamera.Constants.FaceDetection.Landmarks
            ? RNCamera.Constants.FaceDetection.Landmarks.all
            : undefined
        }
        onFacesDetected={canDetectFaces ? this.facesDetected : null}
        onTextRecognized={canDetectText ? this.textRecognized : null}
        onGoogleVisionBarcodesDetected={canDetectBarcode ? this.barcodeRecognized : null}
      >




        <BaseSafeAreaView style={{}}>
          <View style={{ flex: 1, margin: 15 }}>

            <RNcameraTop
              camera={this}
              image={image}
            />



            {/** 
            <ScrollView>
              {image.map((p, i) => {
                return (
                  <Image
                    key={i}
                    style={{
                      width: 300,
                      height: 100,
                    }}
                    source={{ uri: p.node.image.uri }}
                  />
                );
              })}
            </ScrollView>
            */}

            <RNcameraBottom
              camera={this}
              image={image}
            />


            {/**


            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                position: 'absolute',
                bottom: '20%',
                left: 0,
                zIndex: 2,
                width: '100%',
                //backgroundColor: 'red',
                borderColor: '#000',
                borderWidth: 2,
                height: '10%',
                opacity: 0.3
              }}>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  // justifyContent: 'flex-start',
                  borderColor: '#ccc',
                  borderWidth: 1,
                  height: '100%',
                  opacity: 1
                }}>
              </View>

            </View>

            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 2,
                width: '100%',
                backgroundColor: 'black',
                height: '20%',
                opacity: 0.3
              }}>
            </View>


            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // justifyContent: 'flex-start',
                position: 'absolute',
                bottom: 0,
                left: 0,
                zIndex: 2,
                width: '98%',
                height: '20%',
                paddingLeft: '1%',
                paddingRight: '1%'
              }}>

              <View
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  //backgroundColor: 'yellow',
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 60
                }}>

                <View
                  style={{
                    // backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Channel />
                  <Text style={{ color: 'white', marginTop: '30%' }}>
                    Gallery
                  </Text>
                </View>


              </View>

              <View style={{
                flex: 2.5,
                height: 90,
                //backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',

              }}>
                <TouchableOpacity onPress={this.takePicture.bind(this)}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      // backgroundColor: '#FFFFFF',
                      borderRadius: 30,
                      borderColor: '#ccc',
                      borderWidth: 4,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Temp_white_circle />
                  </View>
                  <Text style={{ color: 'white', marginTop: '10%' }}>
                    Tap for photo
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={this.toggleFacing.bind(this)}>
                <View style={{
                  flex: 1.5,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //backgroundColor: 'blue'
                }}>
                  <Community />
                  <Text style={{ color: 'white', marginTop: '20%' }}>
                    Rotate
                  </Text>
                </View>
              </TouchableOpacity>


            </View>


*/}



          </View>
        </BaseSafeAreaView>


      </RNCamera>
    );
  }

  render() {
    return <View style={styles.container}>{this.renderCamera()}</View>;
  }
}

const styles = StyleSheet.create({

  button: {
    flex: 1,
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  continue_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: colors.white,
  },
  textareaWithBackground: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green'
  },
  bg_color_dots: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    //backgroundColor: 'yellow',
    opacity: 0,
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.5,
    position: 'absolute',
    bottom: 0

  },
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#000',
  },
  flipButton: {
    flex: 0.3,
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  autoFocusBox: {
    position: 'absolute',
    height: 64,
    width: 64,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
    opacity: 0.4,
  },
  flipText: {
    color: 'white',
    fontSize: 15,
  },
  zoomText: {
    position: 'absolute',
    bottom: 70,
    zIndex: 2,
    left: 2,
  },
  picButton: {
    backgroundColor: 'darkseagreen',
  },
  facesContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  face: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#FFD700',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  landmark: {
    width: landmarkSize,
    height: landmarkSize,
    position: 'absolute',
    backgroundColor: 'red',
  },
  faceText: {
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: 'absolute',
    borderColor: '#F00',
    justifyContent: 'center',
  },
  textBlock: {
    color: '#F00',
    position: 'absolute',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

