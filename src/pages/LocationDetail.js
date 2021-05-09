import React from "react";
import {SafeAreaView,View,Text} from "react-native";
import MapView from 'react-native-maps';

export const LocationDetail = (props) =>{
    const {data} = props.route.params
    console.log(data)
    return(
        <SafeAreaView>
            <View>
                <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={{height: 400,margin:15}}
                />
            </View>
        </SafeAreaView>
    )
}