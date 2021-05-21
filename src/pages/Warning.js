import React from "react";
import {  SafeAreaView, View,Text,FlatList} from "react-native";
import {useSelector} from "react-redux";
import {LocationCard} from "../components"

export const Warning = (props) =>{
    const cities = useSelector(state => state.warningCity)
    console.log(cities)
    const renderData = ({item}) => <LocationCard item={item} myPress={()=> props.navigation.navigate("LocationDetail",{data:item})}/>
    return(
        <SafeAreaView>
            <View>
            <FlatList
                keyExtractor={(_,index)=> index.toString()}
                data={cities}
                renderItem={renderData}
                ItemSeparatorComponent={()=> <View style={{borderBottomWidth:1}}/>}
            />
            </View>
        </SafeAreaView>
    )
}