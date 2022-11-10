import React from "react";
import { StyledCardDiv } from "./styles";
import Card from "../Card";
import { ScrollView } from "react-native-gesture-handler";

export default function CardDiv(){
    return(
        <StyledCardDiv>
            <Card pageName = 'a'/>
            <Card pageName = 'b'/>
            <Card pageName = 'c'/>
            <Card pageName = 'd'/>
            <Card pageName = 'e'/>
            <Card pageName = 'f'/>
            <Card pageName = 'g'/>
            <Card pageName = 'h'/>
            <Card pageName = 'i'/>
            

        </StyledCardDiv>
    );
}