import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MobileNoScreen from '../login/MobileNoScreen';
import OTPScreen from '../login/OTPScreen';
import { useSelector } from 'react-redux';
import colors from '../../../res/colors';
import BackArrow from '../../../res/images/Back_Onboarding.svg';
import { Button, TouchableOpacity } from 'react-native';
import OnBoardingScreen from '../onboarding/OnBoardingScreen';
import OnBoardingSuccessScreen from '../onboarding/OnBoardingSuccessScreen';
import HomeScreen from '../home/HomeScreen';
import ShareHomeScreen from '../home/ShareHomeScreen';
import HealthScreen from '../health/HealthScreen';
import ChannelScreen from '../channel/ChannelScreen';
import ChannelBookScreen from '../channel/ChannelBookScreen';
import HealthReadingLanding from '../health/HealthReadingLanding';


import FindDoctorScreen from '../health/FindDoctorScreen';
import BookDoctorScreen_1 from '../health/BookDoctorScreen_1';
import BookDoctorScreen_2 from '../health/BookDoctorScreen_2';
import UpcomingSchedule from '../health/UpcomingSchedule';
import DoctorDetails from '../health/DoctorDetails';
import AddMessagePostScreen from '../post/textpost/AddMessagePostScreen';
import MyCommunity from '../community/MyCommunity';
import RecoCommunity from '../community/RecoCommunity';
import MyCommunityDetail from '../community/MyCommunityDetail';
import Reminders from '../reminders/RemindersScreen';
import ReminderCategory from '../reminders/ReminderCategory';
import ReminderNotification from '../reminders/ReminderNotification';
import MedicineReminder_1 from '../reminders/MedicineReminder_1';
import MedicineReminder_2 from '../reminders/MedicineReminder_2';
import MedicineReminder_3 from '../reminders/MedicineReminder_3';
import MedicineReminder_4 from '../reminders/MedicineReminder_4';
import MedicineReminder_5 from '../reminders/MedicineReminder_5';
import MedicineReminder_6 from '../reminders/MedicineReminder_6';
import BirthdayReminder_1 from '../reminders/BirthdayReminder_1';
import HealthCheckReminder_1 from '../reminders/HealthCheckReminder_1';
import CommunityAdmin from '../community/CommunityAdmin';
import CommunityChangePhoto from '../community/CommunityChangePhoto';
import CommunityChangeName from '../community/CommunityChangeName';
//import ShopScreen from '../../navigation/HomeScreen';

import ShopScreen from '../shop/ShopLanding';
import ShopList from '../shop/ShopList';
import ShopListChild from '../shop/ShopListChild';
import ShopDetail from '../shop/ShopDetail';
import SearchScreen from '../shop/SearchScreen';
import ServiceScreen from '../services/ServiceLanding';
import ServiceList from '../services/ServiceList';
import ServiceListChild from '../services/ServiceListChild';

import ProfileScreen from '../profile/ProfileScreen';

// import DetailScreen from '../../navigation/DetailScreen';
// import CategoriesScreen from '../../navigation/CategoriesScreen';
// import ListAllScreen from '../../navigation/ListAllScreen';
// import CartScreen from '../../navigation/CartScreen';
// import SearchScreen from '../../navigation/SearchScreen';

import HealthLanding from '../healthlanding/HealthLanding';

//import TextPostCommunity from '../postCommunity/textpost/AddMessagePostScreen';
//import ImagePostCommunity from '../postCommunity/imagepost/AddMessagePostScreen';
//import VideoPostCommunity from '../postCommunity/videopost/AddMessagePostScreen';
//import TextPostCommunity_2 from '../postCommunity/textpost/CreateTextPostScreen';
//import ImagePostCommunity_2 from '../postCommunity/imagepost/CreateTextPostScreen';
//import VideoPostCommunity_2 from '../postCommunity/videopost/CreateTextPostScreen';

import CreateTextPostScreen from '../post/textpost/CreateTextPostScreen';
import AddMessageImagePostScreen from '../post/imagepost/AddMessagePostScreen';
import CreateTextImagePostScreen from '../post/imagepost/CreateTextPostScreen';
import ImageGalScreen from '../post/imagepost/ImageGalScreen';
import Comments from '../home/Comments';
import IconScreen from '../home/IconScreen';
import VideoScreen from '../home/VideoScreen';
import CreateRepostTextPostScreen from '../repost/textpost/CreateRepostTextPostScreen';
import CreateRepostTextImagePostScreen from '../repost/imagepost/CreateRepostTextImagePostScreen';
import CreateRepostTextVideoPostScreen from '../repost/videopost/CreateRepostTextVideoPostScreen';
import AddMessageVideoScreen from '../post/videopost/AddMessagePostScreen';
import CreateTextVideoPostScreen from '../post/videopost/CreateTextPostScreen';
import VideoGalScreen from '../post/videopost/ImageGalScreen';
import MenuContent from '../../components/UI/MenuContent';
import CreateCommunity from '../community/CreateCommunity';
import CreateCommunityCategory from '../community/CreateCommunityCategory';
import CreateCommunityFriends from '../community/CreateCommunityFriends';
import CreateCommunityHash from '../community/CreateCommunityHash';
import CreateCommunityDone from '../community/CreateCommunityDone';
import Aniversary from '../reminders/AniversaryReminder_1'
import BillPayment from '../reminders/BillPaymentReminder_1'
import Profile_Rems from '../Profile_Rems/Profile_Rems';
import ReminderUpdateDelete from '../ReminderUpdateDelete/ReminderUpdateDelete';
import ReminderUpdate from '../ReminderUpdateDelete/RemiderUpdate';

//@todo check stacking of community , reminder tbd 
const OTPStackNavigator = createStackNavigator();
const OnBoardingStackNavigator = createStackNavigator();
const HomeStackNavigator = createStackNavigator();
const TextPostStackNavigator = createStackNavigator();
const ImagePostStackNavigator = createStackNavigator();
const VideoGalStackNavigator = createStackNavigator();
const HomeScreenStackNavigator = createDrawerNavigator();
const HealthScreenStackNavigator = createDrawerNavigator();
const ChannelScreenStackNavigator = createDrawerNavigator();//();
const VideoScreenStackNavigator = createStackNavigator();
const CommentsScreenStackNavigator = createStackNavigator();
const IconScreenScreenStackNavigator = createStackNavigator();
const CreateCommunityPostStackNavigator = createStackNavigator();
const ShopScreenStackNavigator = createDrawerNavigator(); 
const ServiceScreenStackNavigator = createDrawerNavigator(); 
const ProfileScreenStackNavigator = createDrawerNavigator();

const HealthLandingStackNavigator = createDrawerNavigator();


const defaultNavOptions = {
  // headerTitle: (props) => <LogoTitle {...props} />,

  headerStyle: {
    backgroundColor: colors.enabled_button, // 'transparent',
    // height: 50,
    elevation: 0,
    shadowOpacity: 0,
    // borderBottomWidth: 0.5,
    // borderBottomColor: colors.gradient2,
  },
  // headerTitleAlign: 'center',
  // headerTintColor: colors.primary_color,
  // headerTitleStyle: {
  //   ...palette.basicText,
  //   fontSize: 18,
  // },
  headerBackImage: props => <BackImage {...props} />,
  // headerBackTitleStyle: {
  //   ...palette.basicText,
  // },
};

function BackImage() {
  return (
    <BackArrow style={{ marginHorizontal: 10, position: 'absolute', left: 0 }} />
  );
}

export const OnBoardingNavigator = () => {
  const allQuestionsAsked = useSelector(
    state => state.onboarding.allQuestionsAsked,
  );
  return (
    <OnBoardingStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true,
        headerTransparent: true,
      }}>
      {!allQuestionsAsked ? (
        <OnBoardingStackNavigator.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
        />
      ) : (
        <OnBoardingStackNavigator.Screen
          name="OnBoardingSuccessScreen"
          component={OnBoardingSuccessScreen}
        />
      )}
      {/* <OnBoardingStackNavigator.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
      />
      <OnBoardingStackNavigator.Screen
        name="OnBoardingSuccessScreen"
        component={OnBoardingSuccessScreen}
      /> */}
    </OnBoardingStackNavigator.Navigator>
  );
};

export const OTPNavigator = () => {
  //   const otpDetails = useSelector(state => state.auth.otpDetails);
  return (
    <OTPStackNavigator.Navigator
      // headerMode="none"
      // screenOptions={defaultNavOptions}

      screenOptions={{
        headerTitle: '',
        headerShown: true,
        headerTransparent: true,
      }}>
      <OTPStackNavigator.Screen
        name="MobileNoScreen"
        component={MobileNoScreen}
      // options={introductionScreenOptions}
      />
      <OTPStackNavigator.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={({ navigation, route }) => ({
          headerLeft: props => (
            <TouchableOpacity
              style={{
                // backgroundColor: 'red',
                width: 50,
                height: 50,
                margin: 10,
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <BackImage {...props} />
            </TouchableOpacity>
          ),
        })}
      />
    </OTPStackNavigator.Navigator>
  );
};

export const HomeScreenNavigator = () => {
  return (
    <HomeScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HomeScreenStackNavigator.Screen
        name="Home"
        component={HomeScreen}
      />
    </HomeScreenStackNavigator.Navigator>
  );
};

export const ShareHomeScreenNavigator = () => {
  return (
    <HomeScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HomeScreenStackNavigator.Screen
        name="ShareHomeScreen"
        component={ShareHomeScreen}
      />
    </HomeScreenStackNavigator.Navigator>
  );
};



export const HealthScreenNavigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="Health"
        component={HealthScreen}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};

export const HealthReadingLandingNavigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="HealthReadingLanding"
        component={HealthReadingLanding}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};



export const ServiceScreenNavigator = () => {
  return (
    <ServiceScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ServiceScreenStackNavigator.Screen
        name="ServiceScreen"
        component={ServiceScreen}
      />
    </ServiceScreenStackNavigator.Navigator>
  );
};

export const ServiceListChildNavigator = () => {
  return (
    <ServiceScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ServiceScreenStackNavigator.Screen
        name="ServiceListChild"
        component={ServiceListChild}
      />
    </ServiceScreenStackNavigator.Navigator>
  );
};

export const ServiceListNavigator = () => {
  return (
    <ServiceScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ServiceScreenStackNavigator.Screen
        name="ServiceList"
        component={ServiceList}
      />
    </ServiceScreenStackNavigator.Navigator>
  );
};


export const ProfileScreenNavigator = () => {
  return (
    <ProfileScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ProfileScreenStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </ProfileScreenStackNavigator.Navigator>
  );
};

export const ShopScreenNavigator = () => {
  return (
    <ShopScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ShopScreenStackNavigator.Screen
        name="Shop"
        component={ShopScreen}
      />
    </ShopScreenStackNavigator.Navigator>
  );
};

export const ShopListNavigator = () => {
  return (
    <ShopScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ShopScreenStackNavigator.Screen
        name="ShopList"
        component={ShopList}
      />
    </ShopScreenStackNavigator.Navigator>
  );
};

export const ShopListChildNavigator = () => {
  return (
    <ShopScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ShopScreenStackNavigator.Screen
        name="ShopListChild"
        component={ShopListChild}
      />
    </ShopScreenStackNavigator.Navigator>
  );
};



export const SearchScreenNavigator = () => {
  return (
    <ShopScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ShopScreenStackNavigator.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </ShopScreenStackNavigator.Navigator>
  );
};

export const ShopDetailNavigator = () => {
  return (
    <ShopScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ShopScreenStackNavigator.Screen
        name="ShopDetail"
        component={ShopDetail}
      />
    </ShopScreenStackNavigator.Navigator>
  );
};




export const HealthLandingNavigator = () => {
  return (
    <HealthLandingStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthLandingStackNavigator.Screen
        name="HealthLanding"
        component={HealthLanding}
      />
    </HealthLandingStackNavigator.Navigator>
  );
};
 
 

 


export const ChannelScreenNavigator = () => {
  return (
    <ChannelScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ChannelScreenStackNavigator.Screen
        name="ChannelScreen"
        component={ChannelScreen}
      />
    </ChannelScreenStackNavigator.Navigator>
  );
};

export const ChannelBookScreenNavigator = () => {
  return (
    <ChannelScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <ChannelScreenStackNavigator.Screen
        name="ChannelBookScreen"
        component={ChannelBookScreen}
      />
    </ChannelScreenStackNavigator.Navigator>
  );
};


export const FindDoctorScreenNavigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="FindDoctor"
        component={FindDoctorScreen}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};

export const BookDoctorScreen_1Navigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="BookDoctor_1"
        component={BookDoctorScreen_1}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};

export const UpcomingScheduleNavigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="UpcomingSchedule"
        component={UpcomingSchedule}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};


export const DoctorDetailsNavigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="DoctorDetails"
        component={DoctorDetails}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};


export const BookDoctorScreen_2Navigator = () => {
  return (
    <HealthScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        //== headerTransparent: true,
      }}
      drawerContent={(props) => <MenuContent {...props} />}
    >
      <HealthScreenStackNavigator.Screen
        name="BookDoctor_2"
        component={BookDoctorScreen_2}
      />
    </HealthScreenStackNavigator.Navigator>
  );
};

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false, //true for camera back button
        headerTransparent: true,
      }}>

      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ShareHomeScreen"
        component={ShareHomeScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      

      <HomeStackNavigator.Screen
        name="ChannelScreen"
        component={ChannelScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ChannelBookScreen"
        component={ChannelBookScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      
      <HomeStackNavigator.Screen
        name="HealthScreen"
        component={HealthScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="HealthReadingLanding"
        component={HealthReadingLandingNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      
      <HomeStackNavigator.Screen
        name="ServiceScreen"
        component={ServiceScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ServiceListChild"
        component={ServiceListChildNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ServiceList"
        component={ServiceListNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      
      <HomeStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      
      <HomeStackNavigator.Screen
        name="ShopScreen"
        component={ShopScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ShopList"
        component={ShopListNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      
      
      <HomeStackNavigator.Screen
        name="ShopListChild"
        component={ShopListChildNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="ShopDetail"
        component={ShopDetailNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="SearchScreen"
        component={SearchScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      
      <HomeStackNavigator.Screen
        name="HealthLanding"
        component={HealthLandingNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />
 

      <HomeStackNavigator.Screen
        name="FindDoctorScreen"
        component={FindDoctorScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="BookDoctorScreen_1"
        component={BookDoctorScreen_1Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="UpcomingSchedule"
        component={UpcomingScheduleNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="DoctorDetails"
        component={DoctorDetailsNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="BookDoctorScreen_2"
        component={BookDoctorScreen_2Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />



      <HomeStackNavigator.Screen
        name="TextPost"
        component={TextPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="TextPostCommunity"
        component={TextPostCommunityNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="MyCommunity"
        component={MycommunityNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="RecoCommunity"
        component={RecocommunityNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="Reminders"
        component={RemindersNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ReminderCategory"
        component={ReminderCategoryNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ReminderNotification"
        component={ReminderNotificationNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CommunityAdmin"
        component={CommunityAdminNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CommunityChangePhoto"
        component={CommunityChangePhotoNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CommunityChangeName"
        component={CommunityChangeNameNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />



      <HomeStackNavigator.Screen
        name="MedicineReminder_1"
        component={MedicineReminder_1Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      <HomeStackNavigator.Screen
        name="MedicineReminder_2"
        component={MedicineReminder_2Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      <HomeStackNavigator.Screen
        name="MedicineReminder_3"
        component={MedicineReminder_3Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      <HomeStackNavigator.Screen
        name="MedicineReminder_4"
        component={MedicineReminder_4Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      <HomeStackNavigator.Screen
        name="MedicineReminder_5"
        component={MedicineReminder_5Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />
      <HomeStackNavigator.Screen
        name="MedicineReminder_6"
        component={MedicineReminder_6Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="BirthdayReminder_1"
        component={BirthdayReminder_1Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="Aniversary"
        component={AniversaryNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="BillPayment"
        component={BillPaymentNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ProfileRems"
        component={Profile_RemsNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ReminderUpdateDelete"
        component={ReminderUpdateDeleteNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ReminderUpdate"
        component={ReminderUpdateNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="HealthCheckReminder_1"
        component={HealthCheckReminder_1Navigator}
        options={{ cardStyleInterpolator: forFade }}
      />



      <HomeStackNavigator.Screen
        name="MyCommunityDetail"
        component={MycommunityDetailsNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />



      <HomeStackNavigator.Screen
        name="RepostTextPost"
        component={RepostTextPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />




      <HomeStackNavigator.Screen
        name="CreateCommunity"
        component={CreateCommunityPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CreateCommunityCategory"
        component={CreateCommunityPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="CreateCommunityFriends"
        component={CreateCommunityPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CreateCommunityHash"
        component={CreateCommunityPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="CreateCommunityDone"
        component={CreateCommunityPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="ImagePost"
        component={ImagePostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ImagePostCommunity"
        component={ImagePostCommunityNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="RepostImagePost"
        component={RepostImageGalNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="ImageGalScreen"
        component={ImageGalNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="VideoScreen"
        component={VideoScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />

      <HomeStackNavigator.Screen
        name="VideoPostCommunity"
        component={VideoScreenCommunityNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="Comments"
        component={CommentsScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="IconScreen"
        component={IconScreenScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="RepostVideoScreen"
        component={RepostVideoScreenNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="VideoPost"
        component={VideoPostNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


      <HomeStackNavigator.Screen
        name="VideoGalScreen"
        component={VideoGalNavigator}
        options={{ cardStyleInterpolator: forFade }}
      />


    </HomeStackNavigator.Navigator>
  );
};

export const VideoPostNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false, //true for camera back button
        //headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="AddMessageVideoScreen"
        component={AddMessageVideoScreen}
      />

      <TextPostStackNavigator.Screen
        name="CreateTextVideoPostScreen"
        component={CreateTextVideoPostScreen}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const VideoGalNavigator = () => {
  return (
    <VideoGalStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <VideoGalStackNavigator.Screen
        name="VideoGalScreen"
        component={VideoGalScreen}
      />


    </VideoGalStackNavigator.Navigator>
  );
};

export const ImagePostNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false, //true for camera back button
        //headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="AddMessageImagePostScreen"
        component={AddMessageImagePostScreen}
      />

      <TextPostStackNavigator.Screen
        name="CreateTextImagePostScreen"
        component={CreateTextImagePostScreen}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const ImagePostCommunityNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false, //true for camera back button
        //headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ImagePostCommunity"
        component={ImagePostCommunity}
      />

      <TextPostStackNavigator.Screen
        name="ImagePostCommunity_2"
        component={ImagePostCommunity_2}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const ImageGalNavigator = () => {
  return (
    <ImagePostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <ImagePostStackNavigator.Screen
        name="ImageGalScreen"
        component={ImageGalScreen}
      />

    </ImagePostStackNavigator.Navigator>
  );
};

export const VideoScreenNavigator = () => {
  return (
    <VideoScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <VideoScreenStackNavigator.Screen
        name="VideoScreen"
        component={VideoScreen}
      />

    </VideoScreenStackNavigator.Navigator>
  );
};

export const VideoScreenCommunityNavigator = () => {
  return (
    <VideoScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false, //true for camera back button
        //headerTransparent: true,
      }}>

      <VideoScreenStackNavigator.Screen
        name="VideoPostCommunity"
        component={VideoPostCommunity}
      />

    </VideoScreenStackNavigator.Navigator>
  );
};

export const CommentsScreenNavigator = () => {
  return (
    <CommentsScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <CommentsScreenStackNavigator.Screen
        name="Comments"
        component={Comments}
      />

    </CommentsScreenStackNavigator.Navigator>
  );
};



export const IconScreenScreenNavigator = () => {
  return (
    <IconScreenScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: 'Icon Details',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <IconScreenScreenStackNavigator.Screen
        name="IconScreen"
        component={IconScreen}
      />

    </IconScreenScreenStackNavigator.Navigator>
  );
};


export const TextPostNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="AddMessagePostScreen"
        component={AddMessagePostScreen}
      />

      <TextPostStackNavigator.Screen
        name="CreateTextPostScreen"
        component={CreateTextPostScreen}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const TextPostCommunityNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="TextPostCommunity"
        component={TextPostCommunity}
      />

      <TextPostStackNavigator.Screen
        name="TextPostCommunity_2"
        component={TextPostCommunity_2}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const MycommunityNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MyCommunity"
        component={MyCommunity}
      />



    </TextPostStackNavigator.Navigator>
  );
};

export const RecocommunityNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="RecoCommunity"
        component={RecoCommunity}
      />



    </TextPostStackNavigator.Navigator>
  );
};

export const RemindersNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="Reminders"
        component={Reminders}
      />



    </TextPostStackNavigator.Navigator>
  );
};

export const ReminderCategoryNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ReminderCategory"
        component={ReminderCategory}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const ReminderNotificationNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ReminderNotification"
        component={ReminderNotification}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const CommunityAdminNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: 'Manage',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="CommunityAdmin"
        component={CommunityAdmin}
      />
    </TextPostStackNavigator.Navigator>
  );
};


export const CommunityChangePhotoNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: 'Change Photo',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="CommunityChangePhoto"
        component={CommunityChangePhoto}
      />
    </TextPostStackNavigator.Navigator>
  );
};


export const CommunityChangeNameNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: 'Change Name',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="CommunityChangeName"
        component={CommunityChangeName}
      />
    </TextPostStackNavigator.Navigator>
  );
};


export const MedicineReminder_1Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_1"
        component={MedicineReminder_1}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MedicineReminder_2Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_2"
        component={MedicineReminder_2}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MedicineReminder_3Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_3"
        component={MedicineReminder_3}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MedicineReminder_4Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_4"
        component={MedicineReminder_4}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MedicineReminder_5Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_5"
        component={MedicineReminder_5}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MedicineReminder_6Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="MedicineReminder_6"
        component={MedicineReminder_6}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const BirthdayReminder_1Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="BirthdayReminder_1"
        component={BirthdayReminder_1}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const AniversaryNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="Aniversary"
        component={Aniversary}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const BillPaymentNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="BillPayment"
        component={BillPayment}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const Profile_RemsNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ProfileRems"
        component={Profile_Rems}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const ReminderUpdateDeleteNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ReminderUpdateDelete"
        component={ReminderUpdateDelete}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const ReminderUpdateNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="ReminderUpdate"
        component={ReminderUpdate}
      />
    </TextPostStackNavigator.Navigator>
  );
};


export const HealthCheckReminder_1Navigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>
      <TextPostStackNavigator.Screen
        name="HealthCheckReminder_1"
        component={HealthCheckReminder_1}
      />
    </TextPostStackNavigator.Navigator>
  );
};

export const MycommunityDetailsNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
    //screenOptions={{
    //  headerTitle: '',
    // headerShown: true,
    // headerTransparent: true,
    //}}
    >
      <TextPostStackNavigator.Screen
        name="MyCommunityDetail"
        component={MyCommunityDetail}
      />




    </TextPostStackNavigator.Navigator>
  );
};

export const RepostTextPostNavigator = () => {
  return (
    <TextPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true,
        // headerTransparent: true,
      }}>

      <TextPostStackNavigator.Screen
        name="CreateRepostTextPostScreen"
        component={CreateRepostTextPostScreen}
      />

    </TextPostStackNavigator.Navigator>
  );
};

export const CreateCommunityPostNavigator = () => {
  return (
    <CreateCommunityPostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: false,
        // headerTransparent: true,
      }}>

      <CreateCommunityPostStackNavigator.Screen
        name="CreateCommunity"
        component={CreateCommunity}
      />

      <CreateCommunityPostStackNavigator.Screen
        name="CreateCommunityCategory"
        component={CreateCommunityCategory}
      />
      <CreateCommunityPostStackNavigator.Screen
        name="CreateCommunityFriends"
        component={CreateCommunityFriends}
      />
      <CreateCommunityPostStackNavigator.Screen
        name="CreateCommunityHash"
        component={CreateCommunityHash}
      />
      <CreateCommunityPostStackNavigator.Screen
        name="CreateCommunityDone"
        component={CreateCommunityDone}
      />

    </CreateCommunityPostStackNavigator.Navigator>
  );
};

export const RepostImageGalNavigator = () => {
  return (
    <ImagePostStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <ImagePostStackNavigator.Screen
        name="CreateRepostTextImagePostScreen"
        component={CreateRepostTextImagePostScreen}
      />

    </ImagePostStackNavigator.Navigator>
  );
};

export const RepostVideoScreenNavigator = () => {
  return (
    <VideoScreenStackNavigator.Navigator
      screenOptions={{
        headerTitle: '',
        headerShown: true, //true for camera back button
        //headerTransparent: true,
      }}>

      <VideoScreenStackNavigator.Screen
        name="CreateRepostTextVideoPostScreen"
        component={CreateRepostTextVideoPostScreen}
      />

    </VideoScreenStackNavigator.Navigator>
  );
};