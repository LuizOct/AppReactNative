import React from "react";
import { StyledButton,ButtonText } from "./ButtonStyle";
import { useNavigation } from '@react-navigation/native';


export default function AppButton(props){
    const navigation = useNavigation();
    const rota = props.rota
   
    function openScreen() {
        navigation.navigate(rota);
    }
    

    

    return(
        <StyledButton onPress={openScreen}        >
            <ButtonText>
                {props.name}
            </ButtonText>
        </StyledButton>
       
    )
}
