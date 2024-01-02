/* App config for apis
 */
export const SECRETE_KEY = '273D70BB68A2DF22B2C5498CB712995C';
export const SECRETE_IV = 'E4806F56EE621821';
//export const LOCAL_HOST = '68.178.161.118';  //
//export const LOCAL_HOST = 'darjeelingtour.in';  //
export const LOCAL_HOST = '192.168.1.6'; 
//export const LOCAL_TEST_HOST = '192.168.1.4'

export const LOCAL_TEST_HOST = '192.168.1.6'; 


//export const LOCAL_HOST = '192.168.56.1';  //
//export const LOCAL_HOST = '52a8-103-141-117-9.ngrok.io';  //

export const PROTOCOL = 'http://'; 
export const LOCAL_TEST_PROTOCOL = 'http://';
//export const PROTOCOL = 'http://';  //

export const IMAGE_HOST = LOCAL_HOST;//'192.168.2.21:7000';  //

//export const IMAGE_PROTOCOL = 'https://';  //
export const IMAGE_PROTOCOL = 'https://';  //

export const IMAGE_BASE = '/images/';  //


export const BASE_URL = `${PROTOCOL}${LOCAL_HOST}/api/`;
export const LOCAL_TEST_BASE_URL = `${LOCAL_TEST_PROTOCOL}${LOCAL_TEST_HOST}/api/`;

export const OTP_GENERATE = `${BASE_URL}otp/generate`;
export const OTP_CHALLENGE = `${BASE_URL}otp/challange`;
export const SIGNUP = `${BASE_URL}signup`;

export const ONBOARDING_GET_LATEST_URL = `${BASE_URL}onboarding/getLatest`;
export const COMMUNITY_SUGGEST = `${BASE_URL}communitiesSuggest`;
export const USER_COMMUNITY = `${BASE_URL}getAllUserCommunities`;

export const SAVE_USER_POST = `${BASE_URL}post/new`;
export const GET_USER_POST = `${BASE_URL}getUserOwnPost`;
export const GET_USER_POST_FULL = `${BASE_URL}getallPostDataForUsers`;
export const GET_USER_FRIEND = `${BASE_URL}getFriendsList`;
export const DELETE_POST = `${BASE_URL}post/`;
export const DELETE_POST_COMUNITY = `${BASE_URL}community/`;
export const UNFOLLOW_POST = `${BASE_URL}user/unfollow`;

export const UNFOLLOW_COMMUNITY = `${BASE_URL}removeFollowerCommunity`;


export const ONBOARDING_SAVE_USERDATA = `${BASE_URL}user/saveUpdateUsersData`;
export const SAVE_USER_COMMENT = `${BASE_URL}post/comment`;
export const GET_USER_COMMENT = `${BASE_URL}getcomment`;
export const LIKE_POST = `${BASE_URL}post/like`;
export const GET_COMMUNITY_CATEGORY = `${BASE_URL}getCommunitiesCategories`;

export const CREATE_COMMUNITY = `${BASE_URL}createCommunities`;
export const GET_COMMUNITY_HASH = `${BASE_URL}getAllHashTags`;

export const GET_COMMUNITY_POST_FOR_USER = `${BASE_URL}post/getAllPostDataByCommunities`;

export const UPDATE_FRIEND_LIST = `${BASE_URL}user/updateFriendsList`;

export const RECO_COMMUNITY = `${BASE_URL}communitiesSuggest`;
export const REMINDER_GET_CATEGORY = `${LOCAL_TEST_BASE_URL}getAllRemind`;


//export const GET_MEDICINE_FORM = `${BASE_URL}getdiseasedata/High`;
export const GET_MEDICINE_FORM = `${BASE_URL}getmedicinecategories`;

//export const GET_MEDICINE_NAME = `${BASE_URL}getmedicinedata`;
export const GET_MEDICINE_NAME = `${BASE_URL}getmedicinedata`;

export const GET_MEDICINE_FOR = `${BASE_URL}getdiseasedata`; //need api

export const SAVE_MEDICINE_REMINDER = `${BASE_URL}createreminders`; //need api
export const GET_MODERATION_DATA = `${BASE_URL}getmoderationdata`;
export const JOIN_PRIVATE_COMMUNITY = `${BASE_URL}joinprivatecommunityrequest`;
export const JOIN_PRIVATE_COMMUNITY_STATUS = `${BASE_URL}privatecommunityjoinstatus`;
export const JOIN_PUBLIC_COMMUNITY_STATUS = `${BASE_URL}joinpubliccommunities`;
export const SEND_USER_TOKEN = `${BASE_URL}user/sendusertoken`;
export const COMMUNITY_NAME_CHANGE = `${BASE_URL}renameCommunity`;

export const COMMUNITY_PHOTO_CHANGE = `${BASE_URL}uploadCommunityPhoto`;
export const CHANNEL_DATA_CATEGORY = `${BASE_URL}getchannelcategory`;
export const CHANNEL_DATA_CATEGORY_ASSET = `${BASE_URL}getchanneldata`;
export const CHANNEL_BANNER_DATA = `${BASE_URL}getbannerdata`;

//: postId
export const DOCTOR_UPCOMMING_SCHEDULE = `${BASE_URL}getsinglescheduledetails`;//
export const DOCTOR_TOP_SPECIALIST = `${BASE_URL}getallspeciality`;
export const DOCTOR_POPULAT_HEALTH_ISSUE = `${BASE_URL}getallhealthissues`;
export const DOCTOR_YOUR_HEALTH_ISSUE = `${BASE_URL}getallhealthissues`; //need api
export const DOCTOR_FAMOUS_DOCTOR = `${BASE_URL}getfamousdoctor`;
export const DOCTOR_NEAR_YOU = `${BASE_URL}getdoctorsbycity`; //user city id req ///60a4a9027ef01b35e48fad2d
export const GET_DOCTOR_BY_SPECIALITY = `${BASE_URL}getdoctorsbyspeciality`;
export const GET_DOCTOR_SCHEDULE = `${BASE_URL}getdoctorsscheduled`;
export const CREATE_DOCTOR_BOOKING = `${BASE_URL}createdoctorbooking`;
export const GET_DOCTOR_DETAIL = `${BASE_URL}getdoctorsdetails`;
export const GET_USER_ALL_SCHEDULE = `${BASE_URL}getscheduleDetails`;
export const POST_ICON_DETAILS = `${BASE_URL}getlikedata`;

export const GET_CITY = `${BASE_URL}/getallcities`;

export const GET_CATEGORY = `${BASE_URL}categorieslist`;

export const GET_CHILD_CATEGORY = `${BASE_URL}getchildcategories`;


export const GET_CATEGORY_PRODUCT = `${BASE_URL}getproductforcateories`;
export const GET_PRODUCT_DETAILS = `${BASE_URL}product`;
export const GET_USER_MEDICAL_DASHBOARD = `${BASE_URL}dashboardtracking`;


export const SEARCH_PRODUCT = `${BASE_URL}searchproducts`; 

export const GET_SERVICES = `${BASE_URL}getallservicestypes`;
export const GET_CHILD_SERVICES = `${BASE_URL}getservicesubcategory`;
export const GET_SERVICE_DETAILS = `${BASE_URL}getallservicestypes`;
export const GET_SERVICE_OPTIONS = `${BASE_URL}getserviceoptions`;



