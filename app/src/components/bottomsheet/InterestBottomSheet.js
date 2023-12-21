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

const InterestBottomSheet = props => {
  const { rbHobbiesSheetRef, hobbies_options, onSelectedHobbies } = props;
  const [hobbies, setHobbies] = useState([]);
  const [donotshare, setDonotshare] = useState(false);
  const [allHobbies, setAllHobbies] = useState(false);

  const onPressHobbies = selected_hobby => {
    let s_hobbies = hobbies.filter(hobby => hobby._id === selected_hobby._id);
    if (s_hobbies.length == 0)
      setHobbies(oldArray => [...oldArray, selected_hobby]);
    else setHobbies(hobbies.filter(item => item._id !== selected_hobby._id));
  };

  const onDoneClick = () => {
    if (!donotshare && allHobbies) {
      onSelectedHobbies(hobbies_options);
    } else if (donotshare) {
      onSelectedHobbies([]);
    } else if (!donotshare && !allHobbies) {
      onSelectedHobbies(hobbies);
    }
  };
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        // ref={refRBSheet}
        ref={rbHobbiesSheetRef}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View style={styles.rbsheet}>
          <View style={styles.hobbies_bottom_container}>
            <Text style={styles.interest_text}>
              {strings.interests_hobbies}
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                // backgroundColor: 'red',
                padding: 5,
              }}
              onPress={() => rbHobbiesSheetRef.current.close()}>
              <Close_Toast_Msg />
            </TouchableOpacity>
          </View>
          <View style={styles.dotted_line}></View>
          <Text style={styles.multiple_select}>Multiple select available</Text>
          <TouchableOpacity
            style={
              allHobbies
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
              setAllHobbies(prev => !prev);
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
            data={hobbies_options}
            keyExtractor={item => "Int" + item._id}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            renderItem={itemData => (
              <TouchableOpacity
                disabled={donotshare}
                style={
                  hobbies.some(h => h._id === itemData.item._id)
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
                  onPressHobbies(itemData.item);
                }}>
                <Image
                  source={{ uri: itemData.item.icon }}
                  style={
                    donotshare
                      ? { ...styles.icon, opacity: 0.5 }
                      : { ...styles.icon }
                  }
                />
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
            <Text style={styles.options_text}>{strings.dont_share}</Text>
          </TouchableOpacity>
          <View
            style={{
              ...styles.dotted_line,
              borderStyle: 'solid',
              marginVertical: 20,
            }}></View>
          <TouchableOpacity
            style={styles.done_button}
            disabled={!(donotshare || allHobbies || hobbies.length >= 3)}
            style={
              donotshare || allHobbies || hobbies.length >= 3
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
  hobbies_bottom_container: {
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

export default InterestBottomSheet;
