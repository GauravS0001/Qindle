/*
 * combines all th existing reducers
 */
// import * as authReducer from '../screens/startup/reducers';
// export default Object.assign({}, {auth: authReducer});

import { combineReducers } from 'redux';
import authReducer from '../screens/startup/authReducer';
//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from 'redux-persist';
import userReducer from '../screens/startup/userReducer';
import onboardinReducer from '../screens/onboarding/onboardingReducer';
import communityReducer from '../screens/community/communityReducer';
import postReducer from '../screens/post/postReducer';
import userPostReducer from '../screens/post/userPostReducer';
import commentPostReducer from '../screens/post/commentPostReducer';
import userPostCommunityReducer from '../screens/post/userPostCommunityReducer';
import branchReducer from '../screens/startup/branchReducer';
import reminderReducer from '../screens/reminders/reminderReducer';
import healthReducer from '../screens/health/healthReducer';
import channelReducer from '../screens/channel/channelReducer';
import shopReducer from '../screens/shop/shopReducer';
import serviceReducer from '../screens/services/serviceReducer';







/** @format */

// import { persistCombineReducers } from "redux-persist";
// import storage from "redux-persist/es/storage";

// You have to import every reducers and combine them.
import { reducer as AppReducer } from "../redux/AppRedux";
import { reducer as CategoryReducer } from "../redux/CategoryRedux";
import { reducer as ProductRedux } from "../redux/ProductRedux";
import { reducer as NetInfoReducer } from "../redux/NetInfoRedux";
import { reducer as ToastReducer } from "../redux/ToastRedux";
import { reducer as UserRedux } from "../redux/UserRedux";
import { reducer as CartRedux } from "../redux/CartRedux";
import { reducer as WishListRedux } from "../redux/WishListRedux";
import { reducer as NewsRedux } from "../redux/NewsRedux";
import { reducer as LayoutRedux } from "../redux/LayoutRedux";
import { reducer as PaymentRedux } from "../redux/PaymentRedux";
import { reducer as CountryRedux } from "../redux/CountryRedux";
import { reducer as LangRedux } from "../redux/LangRedux";
import { reducer as CurrencyRedux } from "../redux/CurrencyRedux";
import { reducer as SideMenuRedux } from "../redux/SideMenuRedux";
import { reducer as TagRedux } from "../redux/TagRedux";
import { reducer as AddressRedux } from "../redux/AddressRedux";
import { reducer as BrandsRedux } from "../redux/BrandsRedux";
import { reducer as FilterRedux } from "../redux/FilterRedux";







const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['session_id'],
};
const persistConfigUser = {
  key: 'user',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};
const persistConfigOnboarding = {
  key: 'onboarding',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};

const persistConfigCommunity = {
  key: 'community',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};

const persistCreatPost = {
  key: 'creatPost',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};

const persistUserPost = {
  key: 'userPost',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};


const persistUserPostComminuty = {
  key: 'userPostCommunity',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};

const persistBranchReducer = {
  key: 'branchReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};


const persistHealthReducer = {
  key: 'healthReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};



/*
const persistCommentPost = {
  key: 'commentPost',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};
*/

const persistReminderReducer = {
  key: 'reminderReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};


const channelReducerReducer = {
  key: 'channelReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};


const shopReducerReducer = {
  key: 'shopReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};


const serviceReducerReducer = {
  key: 'serviceReducer',
  storage: AsyncStorage,
  // whitelist: ['isLoggedIn'],
};



const config = {
  key: "root",
  AsyncStorage,
  blacklist: [
    "netInfo",
    "toast",
    "nav",
    "layouts",
    "payment",
    "sideMenu",
    "filters",
  ],
};

const rootReducer = combineReducers({
  // auth: persistReducer(persistConfig, authReducer),
  auth: authReducer,
  user: persistReducer(persistConfigUser, userReducer),
  onboarding: persistReducer(persistConfigOnboarding, onboardinReducer),
  community: persistReducer(persistConfigCommunity, communityReducer),
  creatPost: persistReducer(persistCreatPost, postReducer),
  userPost: persistReducer(persistUserPost, userPostReducer),
  userPostCommunity: persistReducer(persistUserPostComminuty, userPostCommunityReducer),
  commentPost: commentPostReducer, //persistReducer(persistCommentPost, commentPostReducer),
  branchData: persistReducer(persistBranchReducer, branchReducer),
  reminder: persistReducer(persistReminderReducer, reminderReducer),
  channel: channelReducer, 
  shop: shopReducer, 
  service:serviceReducer,
  health: healthReducer, //persistReducer(persistHealthReducer, healthReducer),
  //userPost: userPostReducer
  app: AppReducer,
  categories: CategoryReducer,
  products: ProductRedux,
  netInfo: NetInfoReducer,
  toast: ToastReducer,
  //user: UserRedux,
  carts: CartRedux,
  wishList: WishListRedux,
  news: NewsRedux,
  layouts: LayoutRedux,
  language: LangRedux,
  payments: PaymentRedux,
  countries: CountryRedux,
  currency: CurrencyRedux,
  sideMenu: SideMenuRedux,
  tags: TagRedux,
  addresses: AddressRedux,
  brands: BrandsRedux,
  filters: FilterRedux,
});


export default rootReducer;
