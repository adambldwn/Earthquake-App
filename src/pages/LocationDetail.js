import React from "react";
import {SafeAreaView,View,Text,ImageBackground,ScrollView,Platform,PermissionsAndroid} from "react-native";
import MapView,{Marker} from 'react-native-maps';
import { showLocation } from 'react-native-map-link';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useDispatch} from "react-redux";

import {adData} from "../helper/adData";
import {LocationDetailStyle} from "./styles";

export const LocationDetail = (props) =>{
    const {data} = props.route.params
    const dispatch = useDispatch()
    let count = Math.floor(Math.random() * 3)

    const markerPress = () =>{
        if(Platform.OS === "ios"){
            Geolocation.getCurrentPosition((info) => {
                showLocation({
                  latitude: data.lat,
                  longitude: data.long,
                  sourceLatitude: info.coords.latitude,
                  sourceLongitude: info.coords.longitude,
                })
            });
        }else{

            async () => {
                try {
                    console.log("trytry")
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                    {
                      title: "Cool Photo App Camera Permission",
                      message:
                        "Cool Photo App needs access to your camera " +
                        "so you can take awesome pictures.",
                      buttonNeutral: "Ask Me Later",
                      buttonNegative: "Cancel",
                      buttonPositive: "OK"
                    }
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    Geolocation.getCurrentPosition((info) => {
                        showLocation({
                          latitude: data.lat,
                          longitude: data.long,
                          sourceLatitude: info.coords.latitude,
                          sourceLongitude: info.coords.longitude,
                        })
                    });
                  }
                } catch (err) {
                  console.warn(err);
                }
        }
        
    }
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <ImageBackground
                    source={adData[count].path}
                    style={LocationDetailStyle.img}
                >
                  <Icon 
                    name="map-marker-plus" 
                    size={25} 
                    color="red" 
                    style={LocationDetailStyle.icon}
                    onPress={()=> dispatch({type:"EKLE",payload:{selectCity:data}})}
                  />
                </ImageBackground>
                <Text style={LocationDetailStyle.title}>{data.title}</Text>
                <Text style={LocationDetailStyle.desc}>{`AFAD tarafından yapılan açıklamaya göre ${data.lokasyon}'da 3.8 büyüklüğünde deprem meydana geldi.`}</Text>
                <MapView
                    initialRegion={{
                    latitude: data.lat,
                    longitude: data.lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                    style={{height: 400,margin:15}}
                >
                    <Marker
                        coordinate={{ latitude : data.lat , longitude : data.lng }}
                        title={data.title}
                        onPress={markerPress}
                    />
                </MapView>
            </ScrollView>
        </SafeAreaView>
    )
}