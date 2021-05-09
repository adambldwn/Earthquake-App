import React from "react";
import {SafeAreaView,View,Text,TouchableHighlight,TouchableOpacity} from "react-native";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from "./styles";

export const LocationCard = ({item,myPress}) =>{
    return(
            <TouchableOpacity style={styles.button} onPress={myPress}>
                <Text>{item.lokasyon}</Text>
                <Icon name="chevron-right" size={30} color="#900" />
            </TouchableOpacity>
    )
}