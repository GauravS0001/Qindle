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
import ShopDetailsCategoryList from '../../components/UI/ShopDetailsCategoryList';


const ShopDetail = props => {
  const { width, height } = Dimensions.get("window");
  console.log('props', props.route.params.item.item.id)
  const health = useSelector(
    state => state.health,
  );

  const _user = useSelector(state => state.user); //!!state.auth.token
  const _shop = useSelector(state => state.shop); //!!state.auth.token
  const [loading, setLoading] = useState(true);
  const [ratingValue, setRatingValue] = useState(3);
  const [categoryData, setCategoryData] = useState([]);
  const [activeId, setActiveId] = useState(-1);

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

  useEffect(() => {
    if (_shop.detailsLoad) {
      setData()
    }
  }, [_shop.detailsLoad]);

  const loadPost = id => {
    console.log('loadPost', id)
    dispatch({
      type: types.GET_SHOP_DETAIL_DATA,
      _id: id
    })
    setLoading(false);
  }


  /*
  "color"
  "net_quantity"
  "composition"
  "dosage_form"
  */

  const setData = () => {
    let value = [];
    setCategoryData([])
    if (_shop.detailsData && _shop.detailsData.meta_data) {

      let description = _shop.detailsData.description != "" ? _shop.detailsData.description : _shop.detailsData.short_description
      if (description) {
        value.push({ name: "Description", key: "description", clickedItem: false, _id: '1' })
      }

      _shop.detailsData.meta_data.forEach(element => {
        if (element.key == 'uses') {
          value.push({ name: "Usage", key: "uses", clickedItem: false, _id: '2' })
        }
        if (element.key == 'side_effects') {
          value.push({ name: "Side Effects", key: "side_effects", clickedItem: false, _id: '3' })
        }
        if (element.key == 'indications') {
          value.push({ name: "Indications", key: "indications", clickedItem: false, _id: '4' })
        }
        if (element.key == 'dosage') {
          value.push({ name: "Dosage", key: "dosage", clickedItem: false, _id: '5' })
        }
        if (element.key == 'precautions') {
          value.push({ name: "Precautions", key: "precautions", clickedItem: false, _id: '6' })
        }
        if (element.key == 'storage') {
          value.push({ name: "Storage", key: "storage", clickedItem: false, _id: '7' })
        }
        if (element.key == 'interactions') {
          value.push({ name: "Interactions", key: "interactions", clickedItem: false, _id: '8' })
        }
      })
    }
    value[0].clickedItem = true
    setActiveId(value[0]._id)
    setCategoryData(value)
  };


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

  const loadData = (item) => {
    let _data = []
    categoryData.forEach(element => {
      element.clickedItem = false
      if (element.key == item.key) {
        element.clickedItem = true
        setActiveId(element._id)
      }
      _data.push(element);
    });
    setCategoryData(_data)
  }

  const renderTop = item => {


    return (
      <>
        <TouchableOpacity
          onPress={() => {
            loadData(item)
          }}
        >
          <View
            style={{
              marginTop: 20,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                fontSize: item.clickedItem ? 16 : 16,
                color: item.clickedItem ? '#055F9B' : 'black',
                // fontWeight: item.clickedItem ? 'bold' : 'normal'
              }}
            >{item.name} </Text>
          </View>
          {
            item.clickedItem ?
              <View

              >
                <Text
                  style={{
                    width: '100%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 2,
                  }}
                ></Text>
              </View>
              : <View

              >
                <Text
                  style={{
                    width: '100%',
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                  }}
                ></Text>
              </View>
          }
        </TouchableOpacity>

      </>
    )
  }



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
                  <>
                    <View >
                      <SliderBox autoplay images={_shop.detailsData.dImages}
                        ImageComponentStyle={{ borderRadius: 25, width: '90%', marginTop: 25 }}
                      />
                    </View>

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
                  </>
                }


              </View>
              <View
                style={{ padding: 10, }}
              >

                <View style={{ flex: 1, flexDirection: 'row', }}>
                  <View style={{ flex: .5, flexDirection: 'row', alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/offer.png')}
                        style={{ width: 120, height: 40 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: .5, flexDirection: 'row', alignContent: "center", justifyContent: "center" }}>
                    <TouchableOpacity>
                      <Image source={require('../../components/UI/images/similar.png')}
                        style={{ width: 120, height: 40 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Text
                  style={{ fontWeight: 'bold', marginTop: 10, marginBottom: 10, lineHeight: 20 }}
                >{_shop.detailsData.name} </Text>
                <Text
                  style={{ color: '#055F9B', marginBottom: 5 }}
                >Visit DR. Deepak Rai </Text>

                <View style={{ width: '35%', marginBottom: 5 }}  >
                  <Rating
                    disabled={false}
                    maxStars={5}
                    starSize={20}
                    emptyStar="star-o"
                    fullStar="star"
                    // halfStar={'star-half-o'}
                    // halfStarEnabled
                    rating={ratingValue}
                    starColor={'#FDF12C'}
                    fullStarColor={'#FDF12C'}
                    halfStarColor={'#FDF12C'}
                    emptyStarColor="#ccc"
                    selectedStar={(rating) => {
                      console.log(rating)
                      setRatingValue(rating)
                    }}
                  // buttonStyle={{ backgroundColor: "green" }}
                  // containerStyle={{ backgroundColor: "red", height: 20 }}
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
                    <Text style={{ marginTop: 5 }}>
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
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: 35,
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
                  <View style={{ marginTop: 5, marginBottom: 5 }}>
                    <Text>
                      <Text style={{ color: "gray" }}>Deliver by</Text>
                      <Text style={{ fontWeight: "bold" }}> {getMeta('delivery')}  </Text>
                    </Text>

                  </View>
                }

                {getMeta('pack_size') != "" &&
                  <View
                    style={{ borderColor: '#f2f2f2', flex: 1, flexDirection: 'row', borderWidth: 2, borderRadius: 20, padding: 10, marginTop: 10 }}
                  >


                    <View style={{ flex: .9 }}>
                      <Text>
                        <Text style={{ color: "gray" }}>Pack Size:  </Text>
                        <Text style={{}}>  {getMeta('pack_size')} </Text>
                      </Text>
                    </View>

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
                }

                <View style={{ marginTop: 10, marginBottom: 5 }}>
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

                {getMeta('country_of_origin') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold' }}>Country of origin</Text>
                    <HTMLView value={getMeta('country_of_origin')} />
                  </>
                }

                {getMeta('manufacturer') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Manufacturer</Text>
                    <HTMLView value={getMeta('manufacturer')} />
                  </>
                }

                {getMeta('brand') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Brand</Text>
                    <HTMLView value={getMeta('brand')} />
                  </>
                }

                {getMeta('theraupatic_classification') != "" &&
                  <>
                    <Text style={{ fontWeight: 'bold', marginTop: 5 }}>Theraupatic Classification</Text>
                    <HTMLView value={getMeta('theraupatic_classification')} />
                  </>
                }


                <View style={{ marginTop: 10, marginBottom: 10 }}>
                  <ShopDetailsCategoryList
                    userPost={categoryData}
                    renderTop={renderTop}
                  />
                </View>





                {activeId == 1 &&
                  <View style={{ marginTop: 10 }}>
                    <HTMLView value={_shop.detailsData.description != "" ? _shop.detailsData.description : _shop.detailsData.short_description} />
                  </View>
                }

                {activeId == 2 &&
                  <>
                    <HTMLView value={getMeta('uses')} />
                  </>
                }

                {activeId == 3 &&
                  <>
                    <HTMLView value={getMeta('side_effects')} />
                  </>
                }

                {activeId == 4 &&
                  <>
                    <HTMLView value={getMeta('indications')} />
                  </>
                }

                {activeId == 5 &&
                  <>
                    <HTMLView value={getMeta('dosage')} />
                  </>
                }

                {activeId == 6 &&
                  <>
                    <HTMLView value={getMeta('precautions')} />
                  </>
                }

                {activeId == 7 &&
                  <>
                    <HTMLView value={getMeta('storage')} />
                  </>
                }
                {activeId == 8 &&
                  <>
                    <HTMLView value={getMeta('interactions')} />
                  </>
                }


                {_shop.detailsData.relatedProducts != "" &&
                  < View >
                    <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>Related Products</Text>

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
