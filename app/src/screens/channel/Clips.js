import React, { useState } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Swiper from 'react-native-swiper'
import Video from "react-native-video";
import { useRef } from "react";

const { width, height } = Dimensions.get('window');

const videos = [
    { id: 1, url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { id: 2, url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { id: 3, url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { id: 4, url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }

];

const Clips = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <FlatList
                data={[require("../../../res/images/ClipTest1.mp4"),
                       require("../../../res/images/ClipTest2.mp4"),
                       require("../../../res/images/ClipTest3.mp4")]}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onScroll={e => {
                    setSelectedIndex(Math.ceil(e.nativeEvent.contentOffset.y.toFixed(0) / Dimensions.get('window').height));
                }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ height: height, width: width }}>
                            <Video
                                style={{ height: height, width: width }}
                                source={item}
                                resizeMode={'cover'}
                                paused={selectedIndex == index ? false : true}
                                repeat={true}
                            ></Video>
                        </View>
                    )
                }}
            />
        </View>
    )


}

export default Clips