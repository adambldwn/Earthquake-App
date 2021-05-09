import React, {useState,useEffect} from "react";
import {SafeAreaView,View,Text,FlatList} from "react-native";
import axios from "axios";

export const Location = () =>{
    const [data,setData] = useState([]);

    const fetchData = async() =>{
        const {data}  = await axios.get("https://api.orhanaydogdu.com.tr/deprem/live.php")
        setData(data.result)
    }

    useEffect(()=>{
        fetchData()
    },[])
    const renderData = ({item}) => <Text>{item.lokasyon}</Text>
        
    return(
        <SafeAreaView>
            <View>
                <FlatList
                    keyExtractor={(_,index) => index.toString()}
                    data={data}
                    renderItem={renderData}
                />
            </View>
        </SafeAreaView>
    )
}