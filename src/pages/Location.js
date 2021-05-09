import React, {useState,useEffect} from "react";
import {SafeAreaView,View,Text,FlatList} from "react-native";
import axios from "axios";

import {LocationCard} from "../components";

export const Location = (props) =>{
    const [data,setData] = useState([]);

    const fetchData = async() =>{
        const {data}  = await axios.get("https://api.orhanaydogdu.com.tr/deprem/live.php")
        setData(data.result)
    }

    useEffect(()=>{
        fetchData()
    },[])


    const renderData = ({item}) => <LocationCard item={item} myPress={() => selectItem(item)}/>
        
    const selectItem = (item) => props.navigation.navigate("LocationDetail",{data:item})
    
    return(
        <SafeAreaView>
            <View>
                <FlatList
                    keyExtractor={(_,index) => index.toString()}
                    data={data}
                    renderItem={renderData}
                    ItemSeparatorComponent={()=><View style={{borderBottomWidth:1}}/>}
                />
            </View>
        </SafeAreaView>
    )
}