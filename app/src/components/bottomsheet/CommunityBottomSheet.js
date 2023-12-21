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
import Select_Communities from '../../../res/images/Select_Communities.svg';

const CommunityBottomSheet = props => {
  const { rbCommunitySheetRef, communities_options, onSelectedCommunities } =
    props;
  const [communities, setCommunities] = useState([]);
  const [donotshare, setDonotshare] = useState(false);

  const onPressCommunity = selected_community => {
    let s_communities = communities.filter(
      community => community._id === selected_community._id,
    );
    if (s_communities.length == 0)
      setCommunities(oldArray => [...oldArray, selected_community]);
    else
      setCommunities(
        communities.filter(item => item._id !== selected_community._id),
      );
  };
  const onDoneClick = () => {
    if (donotshare) {
      onSelectedCommunities([]);
    } else {
      onSelectedCommunities(communities);
    }
  };
  return (
    <>
      <RBSheet
        closeOnDragDown={true}
        // ref={refRBSheet}
        ref={rbCommunitySheetRef}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            borderRadius: 10,
          },
          wrapper: { margin: 0 },
        }}>
        <View style={styles.rbsheet}>
          <View style={styles.bottom_container}>
            <Text style={styles.communities_text}>
              {strings.select_communities}
            </Text>
            <TouchableOpacity
              style={{
                marginHorizontal: 5,
                padding: 5,
              }}
              onPress={() => rbCommunitySheetRef.current.close()}>
              <Close_Toast_Msg />
            </TouchableOpacity>
          </View>
          <View style={styles.dotted_line}></View>
          <Text style={styles.multiple_select}>Multiple select available</Text>
          <FlatList
            data={communities_options}
            keyExtractor={item => "Com" + item._id + Math.floor(Math.random() * 10) + 1}
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            renderItem={itemData => (
              <TouchableOpacity
                disabled={donotshare}
                // style={styles.card}
                style={
                  communities.some(h => h._id === itemData.item._id + Math.floor(Math.random() * 10) + 1)
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
                  onPressCommunity(itemData.item);
                }}>
                <View style={{ flex: 3 }}>
                  <Image
                    source={{
                      uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/hair-straightener-1485882-1259358.png',
                    }}
                    style={
                      donotshare
                        ? { ...styles.icon, opacity: 0.5 }
                        : { ...styles.icon }
                    }
                  />
                </View>
                <View
                  style={{
                    flex: 7,
                    flexDirection: 'column',
                    // backgroundColor: 'pink',
                    margin: 10,
                  }}>
                  <Text
                    style={
                      donotshare
                        ? { ...styles.communities_text, color: '#999' }
                        : { ...styles.communities_text }
                    }
                  //   style={styles.communities_text}
                  >
                    {itemData.item.name}
                  </Text>
                  <Text style={styles.multiple_select}>
                    {itemData.item.members}
                  </Text>
                </View>
                <View style={{ marginVertical: 10, flex: 1 }}>
                  {/* condition */}

                  {communities.some(h => h._id === itemData.item._id) ? (
                    <Select_Communities
                      style={donotshare ? { opacity: 0.8 } : null}
                    />
                  ) : null}
                </View>
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
            <Text style={styles.dont_share_text}>
              {strings.dont_join_community}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.done_button}
            disabled={!(donotshare || communities.length >= 1)}
            style={
              donotshare || communities.length >= 1
                ? styles.done_button
                : {
                  ...styles.done_button,
                  backgroundColor: colors.disabled_button,
                }
            }
            onPress={() => onDoneClick()}>
            <Text style={{ ...styles.communities_text, color: colors.white }}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  rbsheet: {
    flexDirection: 'column',
    // backgroundColor: 'pink',
    flex: 1,
    margin: 15,
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 5,
  },
  communities_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: '#111111',
  },
  dont_share_text: {
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
  dotted_line: {
    marginVertical: 5,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: '#D0D5DB',
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
    // height: 80,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#0000001A', //colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    // alignSelf: 'flex-start',
    justifyContent: 'flex-start',

    alignItems: 'flex-start',
    padding: 1,

    // borderColor: '#106EAA',
    // borderWidth: 1,
    // opacity: 0.5,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: '#00000070',
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
    width: 60,
    height: 60,
    alignContent: 'center',
    margin: 10,
    borderRadius: 8,
    // backgroundColor: 'red',
  },
});

export default CommunityBottomSheet;
