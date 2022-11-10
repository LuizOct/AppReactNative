import React from "react";
import { StyledCard } from "./styles";
import { View , Text } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function Card(props){
    const navigation = useNavigation();
    const pageName = props.pageName;
    
    function openScreen(){
        navigation.navigate("Cards", {
            pageName : pageName,
        });
    }
    return(
        <StyledCard onPress={openScreen}>
            <Text>{props.name}</Text>
        </StyledCard>        
       
    );
}