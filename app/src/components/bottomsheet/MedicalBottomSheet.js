import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import colors from '../../../res/colors';
import strings from '../../../res/strings';
import Close_Toast_Msg from '../../../res/images/Close_Toast_Msg.svg';

const MedicalBottomSheet = props => {
  const { rbMedicalSheetRef, diseases_options, onSelectedDiseases } = props;
  const [diseases, setdiseases] = useState([]);
  const [donotshare, setDonotshare] = useState(false);
  const [alldiseases, setAlldiseases] = useState(false);

  const onPressdiseases = selected_disease => {
    let s_diseases = diseases.filter(d => d._id === selected_disease._id);
    if (s_diseases.length == 0)
      setdiseases(oldArray => [...oldArray, selected_disease]);
    else
      setdiseases(diseases.filter(item => item._id !== selected_disease._id));
  };

  const onDoneClick = () => {
    // onSelectedDiseases(diseases);
    if (!donotshare && alldiseases) {
      onSelectedDiseases(diseases_options);
    } else if (donotshare) {
      onSelectedDiseases([]);
    } else if (!donotshare && !alldiseases) {
      onSelectedDiseases(diseases);
    }
  };
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        // ref={refRBSheet}
        ref={rbMedicalSheetRef}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View style={styles.rbsheet}>
          <View style={styles.diseases_bottom_container}>
            <Text style={styles.interest_text}>
              Do you have any existing medical concerns?
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                // backgroundColor: 'red',
                padding: 5,
              }}
              onPress={() => rbMedicalSheetRef.current.close()}>
              <Close_Toast_Msg />
            </TouchableOpacity>
          </View>
          <View style={styles.dotted_line}></View>
          <Text style={styles.multiple_select}>Multiple select available</Text>
          <TouchableOpacity
            style={
              alldiseases
                ? {
                  ...styles.card,
                  borderWidth: 1,
                  borderColor: donotshare
                    ? colors.disabled_border
                    : colors.selected_border,
                }
                : { ...styles.card }
            }
            disabled={donotshare}
            onPress={() => {
              setAlldiseases(prev => !prev);
            }}>
            <Text
              style={
                donotshare
                  ? { ...styles.options_text, color: '#999' }
                  : { ...styles.options_text }
              }>
              All
            </Text>
          </TouchableOpacity>

          <FlatList
            data={diseases_options}
            keyExtractor={item => "Med" + item._id + Math.floor(Math.random() * 10) + 1}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={itemData => (
              <TouchableOpacity
                disabled={donotshare}
                style={
                  diseases.some(h => h._id === itemData.item._id)
                    ? {
                      ...styles.card,
                      borderWidth: 1,
                      borderColor: donotshare
                        ? colors.disabled_border
                        : colors.selected_border,
                    }
                    : { ...styles.card }
                }
                onPress={() => {
                  onPressdiseases(itemData.item);
                }}>
                {/* <Image
                  source={{uri: itemData.item.icon}}
                  style={
                    donotshare
                      ? {...styles.icon, opacity: 0.5}
                      : {...styles.icon}
                  }
                /> */}
                <Text
                  style={
                    donotshare
                      ? { ...styles.options_text, color: '#999' }
                      : { ...styles.options_text }
                  }>
                  {itemData.item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={
              donotshare
                ? { ...styles.card, borderColor: '#106EAA', borderWidth: 1 }
                : { ...styles.card }
            }
            onPress={() => {
              setDonotshare(prev => !prev);
            }}
            opacity={false}>
            <Text style={styles.options_text}>Don't want to share</Text>
          </TouchableOpacity>
          <View
            style={{
              ...styles.dotted_line,
              borderStyle: 'solid',
              marginVertical: 20,
            }}></View>
          <TouchableOpacity
            style={styles.done_button}
            disabled={!(donotshare || alldiseases || diseases.length >= 1)}
            style={
              donotshare || alldiseases || diseases.length >= 1
                ? styles.done_button
                : {
                  ...styles.done_button,
                  backgroundColor: colors.disabled_button,
                }
            }
            onPress={() => onDoneClick()}>
            <Text style={{ ...styles.interest_text, color: colors.white }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  interest_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: '#111111',
  },
  dotted_line: {
    marginVertical: 5,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#D0D5DB',
  },
  rbsheet: {
    flexDirection: 'column',
    // backgroundColor: 'pink',
    flex: 1,
    margin: 15,
  },
  diseases_bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 5,
  },
  multiple_select: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#666666',
    fontSize: 14,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 17,
    marginVertical: 5,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#00000017', //colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    // borderColor: '#106EAA',
    // borderWidth: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
    // opacity: 0.5,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: '#00000070',
  },
  options_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#111111',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,

    // opacity: 0.4,
  },
  done_button: {
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  icon: {
    width: 30,
    height: 30,
    alignContent: 'center',
  },
});

export default MedicalBottomSheet;
