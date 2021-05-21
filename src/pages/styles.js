import {StyleSheet,Dimensions} from "react-native";

export const LocationDetailStyle = StyleSheet.create({
    img:{
        height:200,
        width:"100%",
        position: "relative",
    },
    title:{
        color:"#4527a0",
        fontSize:20,
        textAlign:"center",
        marginVertical:10
    },
    desc:{
        paddingRight:10,
        paddingLeft:10,
        paddingBottom:10,
    },
    icon:{
        position: "absolute",
        right: 5,
        bottom: 5,
        opacity: 0.8,
        backgroundColor: 'rgba(255,255,255,0.9)',
        height: 27,
        width: 27,
    }
})