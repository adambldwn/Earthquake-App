import React from "react";
import {SafeAreaView,View,Text,Image,ScrollView} from "react-native";
import MapView,{Marker} from 'react-native-maps';

import {adData} from "../helper/adData";
import {LocationDetailStyle} from "./styles";

export const LocationDetail = (props) =>{
    const {data} = props.route.params

    let count = Math.floor(Math.random() * 3)

    return(
        <SafeAreaView>
            <ScrollView>
                <Image
                    source={adData[count].path}
                    style={LocationDetailStyle.img}
                />
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
                        // key={index}
                        coordinate={{ latitude : data.lat , longitude : data.lng }}
                        // title={marker.title}
                        // description={marker.description}
                    />
                </MapView>
            </ScrollView>
        </SafeAreaView>
    )
}