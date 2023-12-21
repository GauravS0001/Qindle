import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  Image,
  Button,
  ScrollView
} from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';
import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import MyCommunityHead from '../../components/UI/MyCommunityHead';
import TimeAgo from 'react-native-timeago';
import {
  ProgressChart,
  LineChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const TrackCards = props => {

  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };



  let data3 = {
    labels: ["Sugar"],
    datasets: [
      {
        data: [20, 40, 50, 60],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };
  if (props.data && props.data.sugarinfo && props.data.sugarinfo[0]) {
    data3 = {
      labels: ["Sugar"],
      datasets: [
        {
          data: [parseFloat(props.data.sugarinfo[0].sugarinfo) > 0 ? parseFloat(props.data.sugarinfo[0].sugarinfo) : 0],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
    };
  }


  let data = {
    labels: ["Steps"],
    data: [100]
  };
  if (props.data && props.data.stepsinfo && props.data.stepsinfo[0]) {
    data = {
      labels: ["Steps"],
      data: [parseFloat(props.data.stepsinfo[0].steps) > 0 ? parseFloat(props.data.stepsinfo[0].steps) : 0]
    };
  }

  const chartConfig2 = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "white",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 80, 14, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  let data2 = {
    labels: ["Calories"],
    data: [0.2]
  };
  if (props.data && props.data.caloriesinfo && props.data.caloriesinfo[0]) {
    data2 = {
      labels: ["Calories"],
      data: [parseFloat(props.data.caloriesinfo[0].calories)]
    };
  }



  const renderForm = item => {
    console.log('item', item);
    props.navigation.navigate('HealthReadingLanding', {
      screen: 'HealthReadingLanding',
      params: {
        item: item
      },
    });
  }

  const connectDevice = item => {
    console.log(item);
  }
  return (
    <>
      <View style={styles.rowP}>
        <Text
          style={{ fontSize: 18 }}
        >My Vitals and fitness</Text>
      </View>
      <View style={styles.rowP}>
        <View style={{ ...styles.row1, marginBottom: 10 }} >
          <View style={{ ...styles.t1, flex: 6 }}>
            <Text style={{ fontSize: 14, color: "green" }}  >Daily health Tracker</Text>
          </View>
          <View style={{ ...styles.t2, flex: 4, alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: 10 }}>
            <Text style={{ fontSize: 14, color: "gray" }}  >Connect Device   </Text>
            <TouchableOpacity
              onPress={() => {
                connectDevice('')
              }}
            >
              <Image source={require('./images/set/plus.png')}
                style={{ width: 18, height: 18 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/******************************************************** */}

      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.row1}>
            <Text style={styles.text1}>Steps</Text>
            <Image source={require('./images/footsteps.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1}>
            <View style={styles.row2}>

              <TouchableOpacity
                onPress={() => {
                  renderForm('Steps')
                }}
              >
                <ProgressChart
                  data={data}
                  width={100}
                  height={120}
                  strokeWidth={16}
                  radius={32}
                  chartConfig={chartConfig}
                  hideLegend={true}
                />
              </TouchableOpacity>

            </View>
          </View>

          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.stepsinfo && props.data.stepsinfo[0] ? props.data.stepsinfo[0].steps : 0} </Text><Text>Steps</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Steps')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Calories</Text>
            <Image source={require('./images/calories.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >

              <TouchableOpacity
                onPress={() => {
                  renderForm('Calories')
                }}
              ><ProgressChart
                  data={data2}
                  width={100}
                  height={120}
                  strokeWidth={16}
                  radius={32}
                  chartConfig={chartConfig2}
                  hideLegend={true}
                /></TouchableOpacity>

            </View>
          </View>
          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.caloriesinfo && props.data.caloriesinfo[0] ? props.data.caloriesinfo[0].calories : 0} </Text><Text>Kcal</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Calories')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/******************************************************** */}

      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Blood Pressure</Text>
            <Image source={require('./images/BP.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('BP')
                }}
              >
                <Image source={require('./images/blood-pressure2.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >
                {props.data && props.data.bloodpressureinfo && props.data.bloodpressureinfo[0] ? props.data.bloodpressureinfo[0].sbp_high_num : 0}/
                {props.data && props.data.bloodpressureinfo && props.data.bloodpressureinfo[0] ? props.data.bloodpressureinfo[0].dbp_low_number : 0} </Text><Text>mmHg</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('BP')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Blood Glucose</Text>
            <Image source={require('./images/sugar-blood-level-2.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Sugar')
                }}
              >
                <LineChart
                  data={data3}
                  width={190}
                  height={120}
                  verticalLabelRotation={30}
                  chartConfig={chartConfig}
                  bezier
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.sugarinfo && props.data.sugarinfo[0] ? props.data.sugarinfo[0].sugarlevel : 0} </Text><Text>mg/c</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Sugar')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/******************************************************** */}

      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Sleep</Text>
            <Image source={require('./images/sleeping.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Sleep')
                }}
              >
                <Image source={require('./images/sleep.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.sleepinfo && props.data.sleepinfo[0] ? props.data.sleepinfo[0].sleep : 0} </Text><Text> hours</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Sleep')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Heart Rate</Text>
            <Image source={require('./images/heart-attack.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Heart')
                }}
              >
                <Image source={require('./images/electrocardiogram.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.heartrateinfo && props.data.heartrateinfo[0] ? props.data.heartrateinfo[0].heartrate : 0}  </Text><Text>bpm</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Heart')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>

      {/******************************************************** */}

      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Oxygen Saturation</Text>
            <Image source={require('./images/oximeter-64.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Oxygen')
                }}
              >
                <Image source={require('./images/o2.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.respiratoryinfo && props.data.respiratoryinfo[0] ? props.data.respiratoryinfo[0].respiratoryratelevel : 0} </Text><Text> %</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Oxygen')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Temperature</Text>
            <Image source={require('./images/centigrade.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Temperature')
                }}
              >
                <Image source={require('./images/thermometer.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.temperatureinfo && props.data.temperatureinfo[0] ? props.data.temperatureinfo[0].temperaturelevel : 0}  </Text><Text>F</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Temperature')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/******************************************************** */}

      <View style={styles.row}>
        <View style={styles.left}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Water</Text>
            <Image source={require('./images/glass.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Water')
                }}
              >
                <Image source={require('./images/glass.png')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.watersinfo && props.data.watersinfo[0] ? props.data.watersinfo[0].glass_of_water : 0}</Text><Text> Glass</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Water')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>

          </View>
        </View>


        <View style={styles.right}>
          <View style={styles.row1} >
            <Text style={styles.text1}  >Weight</Text>
            <Image source={require('./images/measure-64.png')}
              style={styles.imageS1}
            />
          </View>
          <View style={styles.box1} >
            <View style={styles.row2} >
              <TouchableOpacity
                onPress={() => {
                  renderForm('Weight')
                }}
              >
                <Image source={require('./images/weight.jpg')}
                  style={styles.imageS2}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row1} >
            <View style={styles.t1}>
              <Text style={styles.textt1}  >{props.data && props.data.weightinfo && props.data.weightinfo[0] ? props.data.weightinfo[0].weight : 0} </Text><Text>Kg</Text>
            </View>
            <View style={styles.t2}>
              <TouchableOpacity
                onPress={() => {
                  renderForm('Weight')
                }}
              >
                <Image source={require('./images/set/plus.png')}
                  style={{ width: 18, height: 18 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>



      {/* <View
        style={{
          //backgroundColor: 'white',
          borderRadius: 8,
          borderColor: '#055F9B',
          borderWidth: 1,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          height: 30,
          marginTop: 10,
          marginLeft: 20,
          marginBottom: 10,
        }}
      >


        <Text style={{
          textAlign: 'right',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: 'bold',
          color: '#055F9B',
          fontSize: 16,
          opacity: 1,
          letterSpacing: 0,
          lineHeight: 19,
          marginHorizontal: 10
        }}>Add Information</Text>

      </View> */}

    </>
  );

}
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  rowP: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 15
  },
  left: {
    width: '45%',
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white'

  },
  right: {
    width: '45%',
    marginLeft: 20,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: 'white'
  },
  row1: {
    flex: 1,
    flexDirection: "row",

  },
  text1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: 'black',
    paddingLeft: 10,
    flex: 7,
  },
  imageS1: {
    width: 24, height: 24, marginRight: 10
  },
  box1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2: {
    flexDirection: "row",
    marginLeft: 20,
  },
  imageS2: {
    width: 120, height: 120
  },
  textt1: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    color: 'black',
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  t1: { flex: 8, flexDirection: 'row' },
  t2: { flex: 2, flexDirection: 'row' },

});

export default TrackCards;

