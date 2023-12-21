import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  ImageBackground,
  FlatList,
  ScrollView,
  ToastAndroid,
  Image,
  Dimensions
} from 'react-native';
import colors from '../../../res/colors';
import MenuTop from '../../components/UI/MenuTopHealthLanding';
import MenuBottom from '../../components/UI/MenuBottomHealth';
import PostCard from '../../components/UI/PostCard';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import CreatePostBottomSheet from '../../components/bottomsheet/CreatePostBottomSheet';
import DotsBottomSheet from '../../components/bottomsheet/DotsBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import branch, { BranchEvent } from 'react-native-branch'
import images from '../../../res/images_url';
import HealthLandingModulesCard from '../../components/UI/HealthLandingModulesCard';
import UpcomingCard from '../../components/UI/UpcomingCard';
import RelatedImage from '../../components/UI/RelatedImage';


import HTMLView from 'react-native-htmlview';
import messaging from '@react-native-firebase/messaging';
import HealthLandingComp from '../../components/UI/HealthLanding';
import HealthLandingShopByCat from '../../components/UI/HealthLandingShopByCat';

import YourHealthIssueCard from '../../components/UI/YourHealthIssueCard';
import DoctorsNearYouCard from '../../components/UI/DoctorsNearYouCard';
import { Linking } from 'react-native'
import FamousDoctorCard from '../../components/UI/FamousDoctorCard';
import AutoHeightImage from 'react-native-auto-height-image';
import Slider from '../../components/UI/SliderLanding';
import { SliderBox } from "react-native-image-slider-box";
import Rating from "react-native-star-rating";

const ShopDetail = props => {
  const { width, height } = Dimensions.get("window");
  console.log('props', props.route.params.item.item.id)
  const health = useSelector(
    state => state.health,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.shop); //!!state.auth.token
  const [loading, setLoading] = useState(true);
  let refCreatePostBottomSheet = useRef(null);
  let refDotPostBottomSheet = useRef(null);
  const dispatch = useDispatch();
  let healthLandingModules = [
    {
      _id: 1,
      name: "Medicine",
      icon: "https://www.gigadocs.com/blog/wp-content/uploads/2019/12/Technology-Makes-It-Easy-To-Consult-The-Doctor-Of-Your-Choice.png",
      nav: "ShopDetail"
    },
    {
      _id: 2,
      name: "Supplements",
      icon: "https://www.gigadocs.com/blog/wp-content/uploads/2019/12/Technology-Makes-It-Easy-To-Consult-The-Doctor-Of-Your-Choice.png",
      nav: "ServiceScreen"
    },
    {
      _id: 3,
      name: "Wheel Chair",
      icon: "https://www.gigadocs.com/blog/wp-content/uploads/2019/12/Technology-Makes-It-Easy-To-Consult-The-Doctor-Of-Your-Choice.png",
      nav: "ServiceScreen"
    }
  ]

  useEffect(() => {
    dispatch({
      type: types.GET_SHOP_DETAIL_DATA,
      _id: props.route.params.item.item.id
    })
    setLoading(false);
  }, [props.route.params.item.item.id, loading]);

  const loadPost = id => {
    console.log('loadPost', id)
    dispatch({
      type: types.GET_SHOP_DETAIL_DATA,
      _id: id
    })
    setLoading(false);
  }


  const getMeta = (keyName) => {
    let value = ''
    if (_shop.detailsData && _shop.detailsData.meta_data) {
      _shop.detailsData.meta_data.forEach(element => {
        if (element.key == keyName) {
          value = element.value
        }
      });
    }
    return value
  };


  const addPosts = text => {
    refCreatePostBottomSheet.current.asaraType = "post"
    refCreatePostBottomSheet.current.asaraTypeId = ""
    refCreatePostBottomSheet.current.open()
  };
  return (
    <>
      <BaseSafeAreaView style={{ backgroundColor: colors.white }}>
        <View style={{ flex: 1, flexDirection: "column" }}>

          <View
            style={{ flex: 1.5, flexDirection: "column", backgroundColor: '#055F9B' }}
          >
            <MenuTop />

          </View>

          <View
            style={{ flex: 8.5, flexDirection: "column" }}
          >


            <ScrollView>
              <View >
                {_shop.detailsData.dImages[0] == undefined ? <View> <Text>Loading...</Text></View> :
                  <View >
                    <SliderBox autoplay images={_shop.detailsData.dImages} />
                  </View>
                }
                <View
                  style={{ position: 'absolute', top: 15, right: 10 }}
                >
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/like.png')}
                        style={{ width: 32, height: 32 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ padding: 10 }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/share.png')}
                        style={{ width: 32, height: 32 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View
                style={{ marginTop: 10, padding: 10 }}
              >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: .5, flexDirection: 'row', alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/offer.png')}
                        style={{ width: 100, height: 68 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: .5, flexDirection: 'row', alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/similar.png')}
                        style={{ width: 150, height: 100 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={{ fontWeight: 'bold' }}
                >{_shop.detailsData.name} </Text>
                <Text
                  style={{ color: 'green' }}
                >Visit DR. Deepak Rai </Text>

                <View style={{ width: '35%' }}  >
                  <Rating
                    disabled={false}
                    maxStars={5}
                    starSize={26}
                    emptyStar="star-o"
                    fullStar="star"
                    // halfStar={'star-half-o'}
                    // halfStarEnabled
                    rating={3}
                    starColor={'#FDF12C'}
                    fullStarColor={'#FDF12C'}
                    halfStarColor={'#FDF12C'}
                    emptyStarColor="#ccc"
                    selectedStar={(rating) => {
                      console.log(rating)
                    }}
                  />
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'gray' }}>Inclusive of all taxes </Text>
                    <Text style={{ color: 'gray' }} >MRP </Text>
                    <Text>
                      <Text style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'gray' }}>₹ {_shop.detailsData.regular_price}</Text>
                      <Text>  </Text>
                      <Text style={{ color: 'red' }}>{_shop.detailsData.discounted_price}% OFF </Text>
                    </Text>
                    <Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 22 }} >₹ {_shop.detailsData.sale_price} </Text>
                      <Text style={{ fontSize: 12 }} >{getMeta('pack_size')} </Text>
                    </Text>
                  </View>


                  <View style={{ flex: 1 }}>

                    <TouchableOpacity onPress={() => { }}>
                      <View
                        style={{
                          width: '90%',
                          backgroundColor: '#055F9B',
                          borderRadius: 8,
                          margin: 5,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 35,
                          margin: 10
                        }}
                      >


                        <Text style={{
                          fontStyle: 'normal',
                          fontWeight: 'bold',
                          fontSize: 16,
                          opacity: 1,
                          letterSpacing: 0,
                          lineHeight: 19,
                          color: colors.white,
                        }}>Add To Cart</Text>

                      </View>
                    </TouchableOpacity>

                  </View>
                </View>
                {getMeta('delivery') != "" &&
                  <View style={{ marginTop: 15 }}>
                    <Text>
                      <Text style={{ color: "gray" }}>Deliver by</Text>
                      <Text style={{ fontWeight: "bold" }}> {getMeta('delivery')}  </Text>
                    </Text>

                  </View>
                }


                <View
                  style={{ borderColor: '#f2f2f2', flex: 1, flexDirection: 'row', borderWidth: 2, borderRadius: 20, padding: 10, marginTop: 10 }}
                >

                  {getMeta('pack_size') != "" &&
                    <View style={{ flex: .9 }}>
                      <Text>
                        <Text style={{ color: "gray" }}>Pack Size:  </Text>
                        <Text style={{ fontWeight: 'bold' }}>  {getMeta('pack_size')} </Text>
                      </Text>
                    </View>
                  }

                  <View style={{ flex: .2, alignItems: 'flex-end' }}>
                    {/* <Text style={{ color: "#005f9b" }}>  1 More </Text> */}
                  </View>
                  <View style={{ flex: .1, alignItems: 'flex-end' }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/right.png')}
                        style={{ width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>


                <View style={{ marginTop: 15 }}>
                  {getMeta('returnable') != "" &&
                    <Text>
                      <TouchableOpacity>
                        <Text style={{ color: "gray", textDecorationLine: 'none' }}>{getMeta('returnable')} </Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text style={{ color: "#005f9b", textDecorationLine: 'underline' }}> Read more </Text>
                      </TouchableOpacity>
                    </Text>
                  }

                </View>
                {/* {_shop.detailsData.meta_data &&
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Detail</Text>
                    <FlatList
                      data={_shop.detailsData.meta_data}
                      numColumns={1}
                      keyExtractor={item => item.id}
                      horizontal={false}
                      renderItem={itemData => (

                        <>
                          <Text>
                            <Text style={{ color: 'gray' }}>{itemData.item.key}: </Text>
                            <Text>{itemData.item.value}</Text>
                          </Text>
                        </>

                      )}
                    />
                  </View>
                } */}

                {getMeta('manufacturer') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Manufacturer</Text>
                    <HTMLView value={getMeta('manufacturer')} />
                  </>
                }
                {getMeta('brand') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Brand</Text>
                    <HTMLView value={getMeta('brand')} />
                  </>
                }

                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontWeight: 'bold' }}>Description</Text>
                  <HTMLView value={_shop.detailsData.description != "" ? _shop.detailsData.description : _shop.detailsData.short_description} />
                </View>

                {getMeta('uses') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Uses</Text>
                    <HTMLView value={getMeta('uses')} />
                  </>
                }

                {getMeta('side_effects') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Side Effects</Text>
                    <HTMLView value={getMeta('side_effects')} />
                  </>
                }

                {getMeta('indications') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Indications</Text>
                    <HTMLView value={getMeta('indications')} />
                  </>
                }

                {getMeta('dosage') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Dosage</Text>
                    <HTMLView value={getMeta('dosage')} />
                  </>
                }

                {getMeta('precautions') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Dosage</Text>
                    <HTMLView value={getMeta('precautions')} />
                  </>
                }

                {getMeta('storage') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Storage</Text>
                    <HTMLView value={getMeta('storage')} />
                  </>
                }

                {getMeta('interactions') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Interactions</Text>
                    <HTMLView value={getMeta('interactions')} />
                  </>
                }

                {getMeta('theraupatic_classification') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Theraupatic Classification</Text>
                    <HTMLView value={getMeta('theraupatic_classification')} />
                  </>
                }



                {_shop.detailsData.relatedProducts &&
                  <View>
                    <Text>Related Products</Text>

                    <FlatList
                      data={_shop.detailsData.relatedProducts}
                      //numColumns={1}
                      keyExtractor={item => item.id}
                      horizontal={true}
                      renderItem={itemData => (

                        <>
                          <RelatedImage item={itemData.item} navigation={props.navigation} loadPost={loadPost} />
                        </>

                      )}
                    />

                  </View>
                }
              </View>

            </ScrollView>
          </View>


        </View>
      </BaseSafeAreaView >
    </>
  );
};

const styles = StyleSheet.create({
  done_button: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
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
    //backgroundColor: 'green'
  },
  bg_color_dots: {
    flex: 2,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 20
  },
  button_container: {
    //flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default ShopDetail;
